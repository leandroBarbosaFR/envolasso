import layout from '../layout/layout';
export default (type) =>
  `
    *[_type == "${type}" && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]{
      layoutVariantPageHeader,
      title,
      body,
      subtitle,
      ctaTitle,
      cta[] {
        _key,
        _type,
        url,
        title,
        content-> {
          title,
          dynamicRoute,
          slug
        }
      },
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
