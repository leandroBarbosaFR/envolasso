import '../public/fonts.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppContext, AppProps } from 'next/app';

export type NextPageWithLayout<P = Record<string, never>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
} & { locale: string };

export default function MyApp({ Component, pageProps, locale }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} locale={locale} />);
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  return { locale: ctx.locale };
};
