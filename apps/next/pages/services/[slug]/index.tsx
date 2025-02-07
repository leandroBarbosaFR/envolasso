import { GetStaticPaths, GetStaticProps } from 'next';
import { PortableTextBlock } from '@portabletext/types';
import { ParsedUrlQuery } from 'querystring';
// 1367 Agency UI
import { Container, Main, Section } from '@agency-platform/react-ui';
import type { Media, Cta, LayoutConfig, OverrideMetaTags } from '@agency-platform/shared-types';
// Components UI
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';
// Lib/providers/services
import sanityClient from 'lib/sanity-client';
import getPageData from 'services/getPageData';

interface PageProps {
  servicesPage: {
    title: string;
    subtitle: string;
    body: PortableTextBlock;
    featureImage: Media;
    cta: Cta[];
    layout: LayoutConfig[];
    dynamicRoute: string;
    slug: string;
    overrideMetaTags: OverrideMetaTags;
  };
  locale: string;
}

function Page({ servicesPage, locale }: PageProps): JSX.Element | null {
  if (!servicesPage) return null;
  const { title, body, featureImage, layout, dynamicRoute, slug, overrideMetaTags } = servicesPage;

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
      <Main layoutVariant={'default'}>
        <Section>
          <Container isFluid={true}>{title && <h1>{title}</h1>}</Container>
        </Section>
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
  const records = await sanityClient.fetch(
    `*[_type == "service" && defined(slug.current) && !(_id in path('drafts.**'))]`
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
    let servicesPage = await getPageData({
      queryDir: 'servicesIndexPage',
      type: 'service',
      slug: pageSlug,
      locale: locale
    });
    servicesPage = JSON.parse(JSON.stringify(servicesPage));

    // render the 404 if there is an api error
    if (!servicesPage)
      return {
        notFound: true
      };

    return {
      props: {
        servicesPage,
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
