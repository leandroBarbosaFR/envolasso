import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// 1367 Agency UI
import { Main, PortfolioSinglePage } from '@agency-platform/react-ui';
import type { Portfolio } from '@agency-platform/shared-types';
// Components
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';
// Lib/providers/services
import sanityClient from 'lib/sanity-client';
import getPageData from 'services/getPageData';

interface PortfolioPageProps {
  portfolioPage: Portfolio;
  locale: string;
}

function Page({ portfolioPage, locale }: PortfolioPageProps): JSX.Element | null {
  if (!portfolioPage) return null;
  const {
    title,
    body,
    excerpt,
    cta,
    subtitle,
    category,
    layout,
    heroImage,
    dynamicRoute,
    slug,
    overrideMetaTags
  } = portfolioPage;

  return (
    <>
      <MetaTags
        locale={locale}
        contentMetaTags={{
          contentTitle: title,
          contentDescription: excerpt,
          contentImage: heroImage,
          contentDynamicRoute: dynamicRoute,
          contentSlug: slug
        }}
        overrideMetaTags={overrideMetaTags}
      />
      <Main layoutVariant={'default'}>
        <PortfolioSinglePage
          layoutVariant={'default'}
          subtitle={subtitle}
          title={title}
          excerpt={excerpt}
          body={body}
          category={category}
          cta={cta}
        />
        <Layout layout={layout} />
      </Main>
    </>
  );
}

Page.getLayout = function getLayout(page: React.ReactElement) {
  const { locale } = page.props;
  return <RootLayout locale={locale}>{page}</RootLayout>;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const records =
    await sanityClient.fetch(`*[_type == "portfolio" && defined(slug.current) && !(_id in path('drafts.**'))]{
    slug,
    __i18n_lang
  }`);
  const pathJson = JSON.parse(JSON.stringify(records));

  const paths = pathJson.map(({ slug, __i18n_lang }: { slug: { current: string }; __i18n_lang: string }) => {
    return {
      params: {
        portfolio: [slug?.current]
      },
      locale: __i18n_lang
    };
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

interface PageParams extends ParsedUrlQuery {
  portfolio: string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { portfolio: portfolioSlug = [''] },
    locale
  } = context as { params: PageParams; locale: string };

  try {
    let portfolioPage = await getPageData({
      queryDir: 'portfoliosShowPage',
      type: 'portfolio',
      slug: portfolioSlug?.join('/'),
      locale: locale
    });
    portfolioPage = JSON.parse(JSON.stringify(portfolioPage));

    if (!portfolioPage)
      return {
        notFound: true
      };

    return {
      props: {
        portfolioPage
      },
      revalidate: 30
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};
