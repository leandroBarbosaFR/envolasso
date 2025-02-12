import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
// 1367 Agency UI
import { PostBody, Main } from '@agency-platform/react-ui';
import type { Blog } from '@agency-platform/shared-types';
// Components
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';
// Lib/providers/services
import sanityClient from 'lib/sanity-client';
import getPageData from 'services/getPageData';

interface BlogPageProps {
  blogPage: Blog;
  locale: string;
}

function Page({ blogPage, locale }: BlogPageProps): JSX.Element | null {
  if (!blogPage) return null;
  const {
    title,
    subtitle,
    excerpt,
    body,
    cta,
    category,
    layout,
    heroImage,
    dynamicRoute,
    slug,
    overrideMetaTags
  } = blogPage;

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
      <Main layoutVariant="default">
        <PostBody
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
    await sanityClient.fetch(`*[_type == "blog" && defined(slug.current) && !(_id in path('drafts.**'))]{
    slug,
    __i18n_lang
  }`);
  const pathJson = JSON.parse(JSON.stringify(records));

  const paths = pathJson.map(({ slug, __i18n_lang }: { slug: { current: string }; __i18n_lang: string }) => {
    return {
      params: {
        blog: [slug?.current]
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
  blog: string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { blog: blogSlug = [''] },
    locale
  } = context as { params: PageParams; locale: string };

  try {
    let blogPage = await getPageData({
      queryDir: 'blogsShowPage',
      type: 'blog',
      slug: blogSlug?.join('/'),
      locale: locale
    });
    blogPage = JSON.parse(JSON.stringify(blogPage));

    if (!blogPage)
      return {
        notFound: true
      };

    return {
      props: {
        blogPage,
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
