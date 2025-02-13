import layout from '../layout/layout';

export default (type) =>
  `
    *[_type == "${type}" && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]
      {
        carousel[] {
          _type,
          _key,
          videoUrl,
          "heroFirstFrameImage": image {
            alt,
            caption,
            asset->{
              url,
              metadata {
                lqip
              }
            }
          },
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
        },
        contentCarousel[] {
          _type,
          _key,
          title,
          subtitle,
          standFirst,
          "featureImage": image {
            alt,
            caption,
            isBackgroundImage,
            asset->{
              url,
              metadata {
                lqip
              }
            }
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
        "heroFirstFrameImage": heroFirstFrameImage {
          asset->{
            url,
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
            metadata {
              lqip
            }
          }
        },
        layoutVariant,
        heroStaticMedia,
        heroType,
        isSlideTransition,
        heroVideoUrl,
        isHeroSearchEnabled,
        standFirst,
        subtitle,
        title,
        ${layout},
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
