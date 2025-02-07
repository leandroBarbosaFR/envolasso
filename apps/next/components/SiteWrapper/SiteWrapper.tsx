/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { useRouter } from 'next/router';
import { SiteFooter, SiteHeader } from '@agency-platform/react-ui';
import useGlobalSettings from 'providers/useGlobalSettings';

// Alternative Header Layout Variants
const altHeaderLayoutVariant = [''];
// Alternative Footer Styles
const altFooterLayoutVariant = [''];
const hideFooter = [''];

function SiteWrapper({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const router = useRouter();
  const isAltHeaderLayoutVariant = altHeaderLayoutVariant.includes(router.pathname);
  const isAltFooterLayoutVariant = altFooterLayoutVariant.includes(router.pathname);
  const isFooterHidden = hideFooter.includes(router.pathname);
  const { globalSiteContent } = useGlobalSettings();

  // ----------------------------------------------------------
  // Footer logo
  // ----------------------------------------------------------
  const renderFooterLinksLogos = null;

  return (
    <>
      <SiteHeader
        layoutVariant={isAltHeaderLayoutVariant ? 'alternative' : 'default'}
        data={globalSiteContent?.siteHeader}
        isAltHeaderLayoutVariant={isAltHeaderLayoutVariant}
      />
      {children}
      <SiteFooter
        layoutVariant={isAltFooterLayoutVariant ? 'alternative' : 'default'}
        isFooterHidden={isFooterHidden}
        isAltFooter={isAltFooterLayoutVariant}
        data={globalSiteContent?.siteFooter}
        FooterLinksLogos={renderFooterLinksLogos}
      />
    </>
  );
}

export default SiteWrapper;
