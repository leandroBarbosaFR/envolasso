export default (type) =>
  `
    *[_type == "${type}" && __i18n_lang == $locale && !(_id in path('drafts.**'))]
      {
        title,
        layoutVariant,
        paginationCount,
        featuredBlog[]-> {
          _id,
          slug,
          dynamicRoute,
          subtitle,
          title,
          excerpt,
          "featureImage": image {
            alt,
            caption,
            asset->{
              url,
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
      }[0]
  `;
