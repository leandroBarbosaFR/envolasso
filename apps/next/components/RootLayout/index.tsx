import Head from 'next/head';
import { Router } from 'next/router';
import React, { useEffect } from 'react';

// import { useEffect } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
// 1367 Agency UI
import {
  CookieModal,
  GlobalStyles,
  IconSet,
  ThemeProvider,
  RegionConfigProvider
} from '@agency-platform/react-ui';
// Components
import AgencyTheme from 'components/AgencyTheme';
import LogoSet from 'components/LogoSet';
import SiteWrapper from 'components/SiteWrapper/SiteWrapper';
import Favicons from 'components/Favicons';
import GtmTags from 'components/GtmTags';
// Lib/providers/services
import { GlobalSettingsProvider } from 'providers/useGlobalSettings';
import getSiteSettings from 'services/getSiteSettings';
// Hooks/utils
import { GTMPageView } from 'utils';
import { StyleSheetManager } from 'styled-components';

const queryClient = new QueryClient();

function RootLayout({ children, locale }: { children: React.ReactNode; locale: string }) {
  const siteSettings = getSiteSettings(locale);

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid} enableVendorPrefixes={true}>
      <SpeedInsights />
      <ThemeProvider theme={AgencyTheme}>
        <GlobalStyles />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <Favicons />
        <RegionConfigProvider locale={locale} siteSettings={siteSettings}>
          <QueryClientProvider client={queryClient}>
            <GlobalSettingsProvider locale={locale}>
              <SiteWrapper>{children}</SiteWrapper>
              <CookieModal />
              <Analytics />
              <GoogleAnalytics gaId="G-XYZ" />
              <LogoSet />
              <IconSet />
            </GlobalSettingsProvider>
          </QueryClientProvider>
        </RegionConfigProvider>
        <GtmTags />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default RootLayout;
