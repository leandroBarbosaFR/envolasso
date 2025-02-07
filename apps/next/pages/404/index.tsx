import { Main, PageNotFoundIndex } from '@agency-platform/react-ui';
import { useRegionConfig } from '@agency-platform/react-ui';
import type { NextPageWithLayout } from '../_app';
import RootLayout from '../../components/RootLayout';
import MetaTags from '../../components/MetaTags';

const Page: NextPageWithLayout = ({}) => {
  const { locale, siteSettings } = useRegionConfig();

  return (
    <>
      <MetaTags
        locale={locale}
        contentMetaTags={{
          contentTitle: siteSettings?.pageNotFound404?.title
        }}
      />
      <Main layoutVariant="default">
        <PageNotFoundIndex layoutVariant={'default'} pageNotFound404={siteSettings?.pageNotFound404} />
      </Main>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  const { locale } = page.props;
  return <RootLayout locale={locale}>{page}</RootLayout>;
};

export default Page;
