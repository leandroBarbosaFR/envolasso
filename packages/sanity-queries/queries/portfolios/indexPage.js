export default (type) =>
  `
    *[_type == "${type}" && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]
      {
        title,
        layoutVariant,
        paginationCount,
        featuredCaseStudie[]-> {
          _id,
          title,
          slug,
          dynamicRoute,
          subtitle,
          excerpt,
          body,
          cta,
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
          cta,
          postMeuiaVariant,
          category->{
            slug
          }
        },
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
