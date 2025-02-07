import { NextApiResponse } from 'next';
import sanityClient from '../../lib/sanity-client';

function generateSiteMap(records: { slug: { _type: string; current: string }; _updatedAt: string }) {
  const { _updatedAt, slug } = records;

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
     ${`
        <url>
          <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/about/${slug.current}`}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.5</priority>
          <lastmod>${_updatedAt}</lastmod>     
        </url>
     `}
   </urlset>
 `;
}

function SiteMap({ records }: { records: { slug: { _type: string; current: string }; _updatedAt: string } }) {
  const sitemap = generateSiteMap(records);
  return sitemap;
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We make an API call to gather the URLs for our site
  const records = await sanityClient.fetch(`*[_type == "about" && defined(slug.current)][0]{
    _updatedAt,
    slug    
  }`);
  const pathJson = JSON.parse(JSON.stringify(records));

  // We generate the XML sitemap with the records data
  const sitemap = generateSiteMap(pathJson);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
