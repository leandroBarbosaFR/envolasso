const withTM = require('next-transpile-modules')([
  '@agency-platform/react-ui',
  '@agency-platform/sanity-queries',
  '@agency-platform/shared-types',
  '@agency-platform/themes'
]);

// next.config.js
module.exports = {
  experimental: {
    esmExternals: 'loose' // or 'all'
  },
    rules: {
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en_GB'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en_GB'
  },
  images: {
    // add cloudfront domain here for the nextjs image tag
    domains: ['cdn.sanity.io']
  },
  compiler: {
    styledComponents: true
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'sanity-studio1367-next'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization'
          }
        ]
      }
    ];
  },
  // SEO redirects
  async redirects() {
    return [
      {
        source: '/blogs',
        destination: '/blogs/page/all/1/latest',
        permanent: false
      },
      {
        source: '/blog/page',
        destination: '/blogs/page/all/1/latest',
        permanent: false
      },
      {
        source: '/blog/page/all',
        destination: '/blogs/page/all/1/latest',
        permanent: false
      },
      {
        source: '/realisations',
        destination: '/realisations/page/all/1/latest',
        permanent: false
      },
      {
        source: '/realisations/page',
        destination: '/realisations/page/all/1/latest',
        permanent: false
      },
      {
        source: '/realisations/page/all',
        destination: '/realisations/page/all/1/latest',
        permanent: false
      }
    ];
  }
});

module.exports = nextConfig;
