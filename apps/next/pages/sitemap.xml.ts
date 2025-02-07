import { NextApiRequest, NextApiResponse } from 'next';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/about.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/blogs-index.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/blogs-show.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/contact.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/pages.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/portfolios-index.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/portfolios-show.xml</loc>
      </sitemap>
      <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/services.xml</loc>
      </sitemap>
    </sitemapindex>
  `;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
