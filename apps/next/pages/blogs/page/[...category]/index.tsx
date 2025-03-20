import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// 1367 Agency UI
import { PostIndex, Main } from '@agency-platform/react-ui';
import type { Blog, BlogCategories, OverrideMetaTags } from '@agency-platform/shared-types';
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
    blogsPage: {
      title: string;
      layoutVariant: string;
      paginationCount: number;
      featuredBlog?: string;
      dynamicRoute?: string;
      slug: string;
      overrideMetaTags: OverrideMetaTags;
    };
    blogCategories: BlogCategories[];
    blogs: { title: string; blogsCount: number; blogs: Blog[] };
    pageNumber: number;
  };
  locale: string;
}

function Page({ page, locale }: PageProps): JSX.Element | null {
  if (!page) return null;
  const { blogsPage, blogs, pageNumber } = page;
  const { title, paginationCount, dynamicRoute, slug, overrideMetaTags } = blogsPage;

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
      <Main layoutVariant="default">
        <PostIndex
          layoutVariant="default"
          pageName={'blogs'}
          data={blogs?.blogs}
          postsCount={blogs?.blogsCount}
          perPage={paginationCount}
          urlPageNumber={pageNumber}
          feedItemComponent={'PostFeedItemDefault'}
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
      "paginationCount": *[_type == "blog.index" && __i18n_lang == $locale && !(_id in path('drafts.**'))][0] {
        paginationCount
      },
      "allPosts": count(*[_type == "blog" && __i18n_lang == $locale && !(_id in path('drafts.**'))]),
      "categories": *[_type == "blog.category" && __i18n_lang == $locale && !(_id in path('drafts.**'))] {
        slug,
        "postsCount": count(*[_type == "blog" && references(^._id) && __i18n_lang == $locale && !(_id in path('drafts.**'))])
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
  const blogIndex = categorySlug === 'all';

  try {
    const filter = getOrderingOption(orderBy);
    const uri = `${categorySlug}`;

    // ======================================================================
    // BLOG INDEX
    // ======================================================================
    let blogsPage = await getPageData({
      queryDir: 'blogsIndexPage',
      type: 'blog.index',
      locale: locale
    });

    // ======================================================================
    // BLOG CATEGORIES
    // ======================================================================
    let blogCategories = await getCategoriesData({
      queryDir: 'blogsCategory',
      type: 'blog.category',
      locale: locale
    });

    // ======================================================================
    // BLOG FEED WITH PAGINATION
    // ======================================================================
    let blogs = await getFeedData({
      queryDir: 'blogsIndexFeed',
      type: blogIndex ? 'blog' : 'blog.category',
      slug: uri,
      perPage: blogsPage?.paginationCount,
      page: pageNumber,
      orderBy: filter?.order,
      sort: filter?.sort,
      locale: locale
    });

    blogsPage = JSON.parse(JSON.stringify(blogsPage));
    blogCategories = JSON.parse(JSON.stringify(blogCategories));
    blogs = JSON.parse(JSON.stringify(blogs));

    if (!blogsPage) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        page: {
          blogsPage,
          blogCategories,
          blogs,
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
