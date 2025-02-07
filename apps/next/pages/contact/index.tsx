import { ContactIndex, Main } from '@agency-platform/react-ui';
import type { Cta, Media, OverrideMetaTags } from '@agency-platform/shared-types';
import { GetStaticPropsResult } from 'next';
import type { NextPageWithLayout } from '../_app';
import RootLayout from '../../components/RootLayout';
import MetaTags from '../../components/MetaTags';
import Layout from '../../components/Layout';
import getPageData from '../../services/getPageData';

interface PageProps {
  contactPage: {
    layoutVariantPageHeader: string;
    title: string;
    body: any;
    subtitle: string;
    cta: Cta[];
    featureImage: Media;
    layout: any;
    dynamicRoute: string;
    slug: string;
    overrideMetaTags: OverrideMetaTags;
  };
  locale: string;
}

const Page: NextPageWithLayout<PageProps> = ({ contactPage, locale }) => {
  if (!contactPage) return null;
  const { title, body, featureImage, layout, dynamicRoute, slug, overrideMetaTags } = contactPage;

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
        {/* <PageHeader
          layoutVariant={'contact'}
          featureImage={featureImage}
          withImage={true}
          subtitle={subtitle}
          // title={''}
          body={body}
          cta={cta}
        /> */}
        <ContactIndex layoutVariant={'default'} title={title} body={body}>
          <Layout layout={layout} />
        </ContactIndex>
      </Main>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  const { locale } = page.props;
  return <RootLayout locale={locale}>{page}</RootLayout>;
};

export default Page;

export async function getStaticProps(context: { locale: string }): Promise<GetStaticPropsResult<PageProps>> {
  const { locale } = context;

  try {
    let contactPage = await getPageData({
      queryDir: 'contactIndexPage',
      type: 'contact',
      locale: locale
    });
    contactPage = JSON.parse(JSON.stringify(contactPage));

    // render the 404 if there is an api error
    if (!contactPage)
      return {
        notFound: true
      };

    return {
      props: {
        contactPage,
        locale
      },
      revalidate: 30
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
}
