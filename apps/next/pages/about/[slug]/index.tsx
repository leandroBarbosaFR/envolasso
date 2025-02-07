import { GetStaticPaths, GetStaticProps } from 'next';
import { PortableTextBlock } from '@portabletext/types';
import { ParsedUrlQuery } from 'querystring';
//  UI
import { Main, BlogSinglePage } from '@agency-platform/react-ui';
import type { Media, Cta, LayoutConfig, OverrideMetaTags, Category } from '@agency-platform/shared-types';
// Components
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';
// Lib/providers/services
import sanityClient from 'lib/sanity-client';
import getPageData from 'services/getPageData';

interface PageProps {
  aboutPage: {
    title: string;
    subtitle: string;
    body: PortableTextBlock;
    excerpt: string;
    category: Category;
    dynamicRoute: string;
    slug: string;
    aboutPageHeaderImage: Media;
    sectionImageBg: Media;
    ctaTitle: string;
    cta: Cta[];
    layout: LayoutConfig[];
    overrideMetaTags: OverrideMetaTags;
  };
  locale: string;
}

function Page({ aboutPage, locale }: PageProps): JSX.Element | null {
  if (!aboutPage) return null;
  const {
    title,
    body,
    aboutPageHeaderImage,
    layout,
    dynamicRoute,
    overrideMetaTags,
    subtitle,
    excerpt,
    category,
    cta,
    slug
  } = aboutPage;

  return (
    <>
      <MetaTags
        locale={locale}
        contentMetaTags={{
          contentTitle: title,
          contentDescription: body,
          contentImage: aboutPageHeaderImage,
          contentDynamicRoute: dynamicRoute,
          contentSlug: slug
        }}
        overrideMetaTags={overrideMetaTags}
      />
      <Main layoutVariant="default">
        <BlogSinglePage
          title={title}
          body={body}
          layoutVariant={'default'}
          subtitle={subtitle}
          excerpt={excerpt}
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
    await sanityClient.fetch(`*[_type == "about" && defined(slug.current) && !(_id in path('drafts.**'))]{
    slug,
    __i18n_lang
  }`);
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
    let aboutPage = await getPageData({
      queryDir: 'aboutIndexPage',
      type: 'about',
      slug: pageSlug,
      locale: locale
    });
    aboutPage = JSON.parse(JSON.stringify(aboutPage));

    // render the 404 if there is an api error
    if (!aboutPage)
      return {
        notFound: true
      };

    return {
      props: {
        aboutPage,
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
