import { Cta } from '../common/objects';

export default (type) =>
  `
    *[_type == "${type}" && slug.current == $slug && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]{
      title,
      subtitle,
      body,
      "featureImage": image {
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
      dynamicRoute,
      cta[] ${Cta},
      address,
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
