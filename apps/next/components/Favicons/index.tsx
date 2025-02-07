import Head from 'next/head'

const Favicons = (): JSX.Element => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" sizes="192x192" href="/touch-icon-192x192.png" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="180x180"
        href="/apple-touch-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/apple-touch-icon-72x72.png"
      />
      <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
    </Head>
  )
}

export default Favicons
