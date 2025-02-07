import { NextApiResponse } from 'next';
import sanityClient from '../../lib/sanity-client';
import getPageUri from '../../services/getPageUri';

function generateSiteMap(paths: { _updatedAt?: string; params: { category: string[] } }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xhtml="http://www.w3.org/1999/xhtml" 
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
   >
      ${
        paths &&
        paths
          .map(({ params, _updatedAt }: { _updatedAt?: string; params: { category: string[] } }) => {
            const { category } = params;
            return `
                <url>
                  <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/portfolios/page/${category[0]}`}</loc>
                  <changefreq>weekly</changefreq>
                  <priority>0.5</priority>
                  ${_updatedAt ? `<lastmod>${_updatedAt}</lastmod>` : ``}
                </url>
            `;
          })
          .join('')
      }
   </urlset>
 `;
}

function SiteMap({ paths }: { paths: { _updatedAt?: string; params: { category: string[] } }[] }) {
  const sitemap = generateSiteMap(paths);
  return sitemap;
}

export async function getServerSideProps({ res, locale }: { res: NextApiResponse; locale: string }) {
  const records = await sanityClient.fetch(
    `
    {
      "paginationCount": *[_type == "portfolio.index" && __i18n_lang == $locale][0] {
        paginationCount
      },
      "allPosts": count(*[_type == "portfolio" && __i18n_lang == $locale]),
      "categories": *[_type == "portfolio.category" && __i18n_lang == $locale] {
        _updatedAt,
        slug,
        "postsCount": count(*[_type == "portfolio" && references(^._id) && __i18n_lang == $locale])
      }
    }
  `,
    { locale: locale }
  );
  const pathJson = JSON.parse(JSON.stringify(records));

  const paths = await getPageUri(
    pathJson,
    [
      { id: '1', label: 'latest', orderBy: '_createdAt', sort: 'desc' },
      { id: '2', label: 'oldest', orderBy: '_createdAt', sort: 'asc' },
      { id: '3', label: 'a-z', orderBy: 'title', sort: 'asc' },
      { id: '4', label: 'z-a', orderBy: 'title', sort: 'desc' }
    ],
    locale,
    true
  );

  // We generate the XML sitemap with the records data
  const sitemap = generateSiteMap(paths);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
