// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require('./sanity-client');

const createDirectory = async () => fs.promises.mkdir('./data', { recursive: true });

const fetchSiteSettings = async () => {
  const data = await client.fetch(`
    *[_type == 'siteSettings' && !(_id in path('drafts.**'))] {
      ...,
      seoGlobalSettings {
        ...,
        "imageSource":  imageSource {
          alt,
          asset->{
            url,
            "height": metadata.dimensions.height,
            "width": metadata.dimensions.width,
          }
        },
      },
      pageNotFound404 {
        ...,
        "imageSource":  imageSource {
          alt,
          asset->{
            url,
            "height": metadata.dimensions.height,
            "width": metadata.dimensions.width,
          }
        },
        cta[] {
          _key,
          _type,
          url,
          title,
          email,
          phoneNumber,
          content-> {
            title,
            dynamicRoute,
            slug
          },
        },
      },
    }
  `);

  fs.writeFileSync('./data/site-settings.json', JSON.stringify(data));
};

(async () => {
  await Promise.all([createDirectory(), fetchSiteSettings()]);
})();
