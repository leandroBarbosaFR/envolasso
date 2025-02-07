import layout from '../layout/layout';
export default (type) =>
  `
    *[_type == "${type}" && slug.current == $slug && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]{
      title,
      subtitle,
      body,
      cta,
      "featureImage":image {
        alt,
        caption,
        asset->{
          url,
          "height": metadata.dimensions.height,
          "width": metadata.dimensions.width,
          metadata {
            lqip
          }
        }
      },
      ${layout},
      dynamicRoute,
      "slug":slug.current,
      "overrideMetaTags": {
        overideMetaTitle,
        overideMetaDescription,
        overideMetaKeywords,
        overideMetaImage,
        overideMetaImageDescription,
        metaTitle,
        metaDescription,
        MetaKeywords,
        "metaImage": metaImage {
          alt,
          asset->{
            url,
            "height": metadata.dimensions.height,
            "width": metadata.dimensions.width,
          }
        },
        metaImageDescription
      }
    }
  `;
