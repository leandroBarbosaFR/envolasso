const Cta = `
    cta[] {
      _key,
      _type,
      url,
      title,
      view,
      labelId,
      email,
      phoneNumber,
      content-> {
        title,
        dynamicRoute,
        slug
      }
    }
`;

const layout = `
    layout[] {
        ...,
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
          ${Cta},
        },
        "albumCarousel": albums [] {
          ...,
          "image": image {
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
        "collectionCarousel": collections [] {
          ...,
          "image": image {
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
        "playlistCarousel": playlists [] {
          ...,
          "image": image {
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
        textImageSection {
          ...,
          "image": image {
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

        "textImgSectionImage": image {
            alt,
            caption,
            asset->{
                url,
                metadata {
                  lqip
                }
            }
        },
        "textImgSectionImageBg": imagebg {
            alt,
            caption,
            asset->{
                url,
                metadata {
                  lqip
                }
            }
        },
        "brandStoryImage": brandStoryImage {
            alt,
            caption,
            asset->{
                url,
                metadata {
                  lqip
                }
            }
        },
        "showReelImage": image {
            alt,
            caption,
            asset->{
                url,
                metadata {
                  lqip
                }
            }
        },
        ${Cta},
        subscriptions[] {
          ...,
          ${Cta},
        },
        category->{
            title,
            subtitle,
            slug,
            dynamicRoute 
        },
        testimonials[] {
            _type,
            _key,
            quote,
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
            credit,
        },
        imageCarousel[] {
          _type,
          _key,
          alt,
          caption,
          asset-> {
            url,
            metadata {
              lqip
            }
          }
        },
        clients[] {
            _type,
            _key,
            url,
            title,
            "featureImage":  logo {
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
        posts[]->{
            ...,
            slug{
                _type,
                current
            },    
            category->{
                slug
            },   
            ${Cta},
            "featureImage": featureImage {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            "firstFrameImage": firstFrameImage {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            "image": image {
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
        partnerships[]->{
            ...,
            slug{
                _type,
                current
            },    
            category->{
                slug
            },   
            ${Cta},
            "featureImage": featureImage {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            "firstFrameImage": firstFrameImage {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            "image": image {
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
        artists[]->{
            ...,
            slug{
                _type,
                current
            },
            category->{
                slug
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
            "imageBanner": imageBanner {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            ${Cta},
        },
        profiles[]->{
            ...,
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
            "featureImageEffect": imageEffect {
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
        composers[]->{
            ...,  
            category->{
                slug
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
            "imageBanner": imageBanner {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            ${Cta},
        },
        mentors[]->{
            ...,  
            category->{
                slug
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
            ${Cta},
        },
        "image": image {
            alt,
            caption,
            asset->{
                url,
                metadata {
                  lqip
                }
            }
        },
        "imagebg": imagebg {
            alt,
            caption,
            asset->{
                url,
                metadata {
                  lqip
                }
            }
        },
        textColumn[]{
            ...,
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
            ${Cta},
        },
        portfolios[]->{
            ...,
            category->{
                slug
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
            "imageBanner": imageBanner {
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
        labels[]->{
            ...,
            "id": labelId[0],
            slug{
                _type,
                current
            },
            category->{
                slug
            }, 
            image {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                      lqip
                    }
                }
            },
            "logo": logo {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                  lqip
                    }
                }
            },
            ${Cta},
        },
        feed [] {
          ...,
          ${Cta},
          labels[]->{
            ...,
            "id": labelId[0],
            slug{
                _type,
                current
            },
            category->{
                slug
            }, 
            "logo": logo {
                alt,
                caption,
                asset->{
                    url,
                    metadata {
                  lqip
                    }
                }
            },
            ${Cta},
          },
        }
    }
`;

export default layout;
