import layout from '../layout/layout';
export default (type) =>
  `
    *[_type == "${type}" && slug.current == $slug && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]
    {
      ...,
      "imageBanner":imageBanner {
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
      "heroImage": heroImage {
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
      category->{
        slug,
        title,
        dynamicRoute
      },
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
