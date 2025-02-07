import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// 1367 Agency UI
import { Main, StandardPageBody } from '@agency-platform/react-ui';
import { StandardPage } from '@agency-platform/shared-types';
// Components
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';
// Lib/providers/services
import sanityClient from 'lib/sanity-client';
import getPageData from 'services/getPageData';

interface PageProps {
  page: StandardPage;
  locale: string;
}

function Page({ page, locale }: PageProps): JSX.Element | null {
  if (!page) return null;
  const { title, body, featureImage, dynamicRoute, slug, overrideMetaTags } = page;

  return (
    <>
      <MetaTags
        locale={locale}
        contentMetaTags={{
          contentTitle: title,
          contentDescription: body,
          contentImage: featureImage,
          contentDynamicRoute: dynamicRoute,
          contentSlug: slug
        }}
        overrideMetaTags={overrideMetaTags}
      />
      <Main layoutVariant="removeSpacing">
        <StandardPageBody layoutVariant="default" isFluid={true} data={page} />
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
  const records = await sanityClient.fetch(
    `*[_type == "page" && defined(slug.current) && !(_id in path('drafts.**'))]`
  );
  const pathJson = JSON.parse(JSON.stringify(records));

  const paths = pathJson.map(({ slug, __i18n_lang }: { slug: { current: string }; __i18n_lang: string }) => {
    return {
      params: {
        slug: slug?.current
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
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { slug: pageSlug = '' },
    locale
  } = context as { params: PageParams; locale: string };

  try {
    let page = await getPageData({
      queryDir: 'pagesIndexPage',
      type: 'page',
      slug: pageSlug,
      locale: locale
    });
    page = JSON.parse(JSON.stringify(page));

    // render the 404 if there is an api error
    if (!page)
      return {
        notFound: true
      };

    return {
      props: {
        page,
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
