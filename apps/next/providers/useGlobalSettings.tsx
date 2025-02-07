import React, { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import sanityClient from 'lib/sanity-client';
// @ts-ignore:next-line
import globalSettings from '@agency-platform/sanity-queries/queries/globalSiteContent';

interface GlobalSettingsContextInterface {
  globalSiteContent: any;
}

export const GlobalSettingsContext = createContext<GlobalSettingsContextInterface>(null!);

function GlobalSettingsProvider({
  locale,
  children
}: {
  locale: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  const { data: globalSiteContent } = useQuery({
    queryFn: () =>
      sanityClient.fetch(globalSettings(), {
        siteHeader: 'siteHeader',
        siteFooter: 'siteFooter',
        locale
      }),
    queryKey: ['siteHeader', 'siteFooter', locale]
  });

  return (
    <GlobalSettingsContext.Provider
      value={{
        globalSiteContent
      }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export default function useGlobalSettings() {
  return useContext(GlobalSettingsContext);
}

export { GlobalSettingsProvider };
