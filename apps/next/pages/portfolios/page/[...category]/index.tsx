import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// 1367 Agency UI
import { Main, PortfolioIndex } from '@agency-platform/react-ui';
import type {
  Portfolio,
  PortfolioCategories,
  OverrideMetaTags,
  Cta,
  Media,
  Category
} from '@agency-platform/shared-types';
// Components
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';
// Lib/providers/services
import sanityClient from 'lib/sanity-client';
import getCategoriesData from 'services/getCategoriesData';
import getFeedData from 'services/getFeedData';
import getPageData from 'services/getPageData';
import getPageUri from 'services/getPageUri';
// Hooks/utils
import getOrderingOption from 'utils/getOrderingOption';

interface PageProps {
  page: {
    portfoliosPage: {
      title: string;
      layoutVariant: string;
      paginationCount: number;
      featuredCaseStudie: Portfolio[];
      dynamicRoute: string;
      slug: string;
      overrideMetaTags: OverrideMetaTags;
      ctaTitle: string;
      cta: Cta[];
      image: Media;
      subtitle: string;
      body: string;
      featuredBlog: any;
      sectionImageBg: Media;
      category: Category;
    };
    portfoliosCategories: PortfolioCategories[];
    portfolios: { title: string; portfoliosCount: number; portfolios: Portfolio[] };
    pageNumber: number;
  };
  locale: string;
}

function Page({ page, locale }: PageProps): JSX.Element | null {
  if (!page) return null;
  const { portfoliosPage, portfolios, pageNumber } = page;
  const { title, paginationCount, dynamicRoute, slug, overrideMetaTags } = portfoliosPage;

  return (
    <>
      <MetaTags
        locale={locale}
        contentMetaTags={{
          contentTitle: title,
          contentDynamicRoute: dynamicRoute,
          contentSlug: slug
        }}
        overrideMetaTags={overrideMetaTags}
      />
      <Main layoutVariant="removeSpacing">
        <PortfolioIndex
          layoutVariant={'default'}
          pageName={'portfolios'}
          data={portfolios?.portfolios}
          portfolioCount={portfolios?.portfoliosCount}
          perPage={paginationCount}
          urlPageNumber={pageNumber}
          feedItemComponent={'PortfolioFeedItemDefault'}
          portfolio={[]}
          portfoliosCount={0}
        />
      </Main>
    </>
  );
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  const { locale } = page.props;
  return <RootLayout locale={locale}>{page}</RootLayout>;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { defaultLocale } = context as { defaultLocale: string };
  const records = await sanityClient.fetch(
    `
    {
      "paginationCount": *[_type == "portfolio.index" && __i18n_lang == $locale && !(_id in path('drafts.**'))][0] {
        paginationCount
      },
      "allPosts": count(*[_type == "portfolio" && __i18n_lang == $locale && !(_id in path('drafts.**'))]),
      "categories": *[_type == "portfolio.category" && __i18n_lang == $locale && !(_id in path('drafts.**'))] {
          slug,
          "postsCount": count(*[_type == "portfolio" && references(^._id) && __i18n_lang == $locale && !(_id in path('drafts.**'))])
      }
    }
  `,
    { locale: defaultLocale }
  );
  const pathJson = JSON.parse(JSON.stringify(records));

  const paths = await getPageUri(
    pathJson,
    [
      { id: '1', label: 'latest', orderBy: '_createdAt', sort: 'desc' },
      { id: '2', label: 'oldest', orderBy: '_createdAt', sort: 'asc' },
      { id: '3', label: 'a-z', orderBy: 'title', sort: 'asc' },
      { id: '4', label: 'z-a', orderBy: 'title', sort: 'desc' }
    ],
    defaultLocale
  );

  return {
    paths,
    fallback: 'blocking'
  };
};

interface PageParams extends ParsedUrlQuery {
  category: string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { category: pageSlug = [''] },
    locale
  } = context as { params: PageParams; locale: string };

  const categorySlug = pageSlug[0];
  const pageNumber = pageSlug[1];
  const orderBy = pageSlug[2];
  const isPortfolioIndex = categorySlug === 'all';

  if (pageSlug[3])
    return {
      notFound: true
    };

  try {
    const filter = getOrderingOption(orderBy);
    const uri = `${categorySlug}`;

    // ======================================================================
    // PORTFOLIO CAROUSEL FEED
    // ======================================================================
    let portfoliosPage = await getPageData({
      queryDir: 'portfoliosIndexPage',
      type: 'portfolio.index',
      locale: locale
    });

    // ======================================================================
    // PORTFOLIO CATEGORIES
    // ======================================================================
    let portfoliosCategories = await getCategoriesData({
      queryDir: 'portfoliosCategory',
      type: 'portfolio.category',
      locale: locale
    });

    // ======================================================================
    // PORTFOLIO FEED WITH PAGINATION
    // ======================================================================
    let portfolios = await getFeedData({
      queryDir: 'portfoliosIndexFeed',
      type: isPortfolioIndex ? 'portfolio' : 'portfolio.category',
      slug: uri,
      perPage: portfoliosPage?.paginationCount,
      page: pageNumber,
      orderBy: filter?.order,
      sort: filter?.sort,
      locale: locale
    });

    portfoliosPage = JSON.parse(JSON.stringify(portfoliosPage));
    portfoliosCategories = JSON.parse(JSON.stringify(portfoliosCategories));
    portfolios = JSON.parse(JSON.stringify(portfolios));

    // render the 404 if there is an api error
    if (!portfoliosPage)
      return {
        notFound: true
      };

    return {
      props: {
        page: {
          portfoliosPage,
          portfoliosCategories,
          portfolios,
          pageNumber: pageNumber || null
        },
        locale
      },
      revalidate: 30
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};
