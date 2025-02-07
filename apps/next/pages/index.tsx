import { GetStaticProps } from 'next';
import React, { useState } from 'react';
// 1367 Agency UI
import { Main, HeroSection, HeroSectionContentCarousel } from '@agency-platform/react-ui';
import type { LandingPage } from '@agency-platform/shared-types';
// Components
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import RootLayout from 'components/RootLayout';

// Lib/services/utils
import getPageData from 'services/getPageData';

// Props
interface PageProps {
  landingPage: LandingPage;
  locale: string;
  pricings: {
    quote: string;
    subtitle: string;
    layoutVariant: string;
  }[];
}

function Page({ landingPage, locale }: PageProps): JSX.Element | null {
  if (!landingPage) return null;
  const {
    layoutVariant,
    carousel,
    contentCarousel,
    cta,
    heroFirstFrameImage,
    heroImage,
    heroStaticMedia,
    heroType,
    heroVideoUrl,
    isHeroSearchEnabled,
    isSlideTransition,
    layout,
    standFirst,
    subtitle,
    title,
    overrideMetaTags,
    featureImage
  } = landingPage;
  return (
    <>
      <MetaTags
        locale={locale}
        contentMetaTags={{
          contentTitle: title,
          contentDescription: standFirst
        }}
        overrideMetaTags={overrideMetaTags}
      />
      <Main layoutVariant="removeSpacing">
        {heroType === 'static' || heroType === 'carousel' ? (
          <HeroSection
            title={title}
            cta={cta}
            standFirst={standFirst}
            subtitle={subtitle}
            heroType={heroType}
            isSlideTransition={isSlideTransition}
            isHeroSearchEnabled={isHeroSearchEnabled}
            heroFirstFrameImage={heroFirstFrameImage}
            heroImage={heroImage}
            heroStaticMedia={heroStaticMedia}
            heroVideoUrl={heroVideoUrl}
            carouselData={carousel}
            carouselType={'homeCarousel'}
            layoutVariant={layoutVariant}
            featureImage={featureImage}
          />
        ) : (
          heroType === 'contentCarousel' && (
            <HeroSectionContentCarousel carouselType={'homeContentCarousel'} data={contentCarousel} />
          )
        )}
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

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { locale } = context;

    let landingPage = await getPageData({
      queryDir: 'landingIndexPage',
      type: 'landingPage',
      locale: locale
    });
    landingPage = JSON.parse(JSON.stringify(landingPage));

    // render the 404 if there is an api error
    if (!landingPage) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        landingPage,
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
