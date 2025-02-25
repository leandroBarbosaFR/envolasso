import { colors } from '../variables';

const Carousel = {
  // ==========================================================================
  // layoutVariant: default
  // ==========================================================================
  default: {
    SlideCarousel: {
      duration: 5000
    },
    FadeCarousel: {
      duration: 5000
    },
    // ==========================================================================
    // StyledCarouselWrap
    // ==========================================================================
    StyledCarouselWrap: {
      position: `relative`,
      mobile: {
        height: `100vh`,
        minHeight: `750px`,
        maxHeight: ``,
        overflow: ``
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: `93vh`,
        minHeight: `750px`,
        margin: ``,
        padding: ``
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // NavArrows
    // ==========================================================================
    NavArrows: {
      // StyledNav
      // ==========================================================================
      StyledNav: {
        position: `absolute`,
        zIndex: `2`,
        mobile: {
          top: ``,
          bottom: `28px`,
          right: `0`,
          left: `0`,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          top: ``,
          bottom: `38px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          top: ``,
          bottom: `50px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          top: ``,
          bottom: ``,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          top: ``,
          bottom: `75px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavContainer
      // ==========================================================================
      StyledNavContainer: {
        color: `inherit`,
        isFluid: true,
        // fluidContainer
        fluidContainer: {
          marginLeft: ``,
          marginRight: ``,
          width: ``,
          maxWidth: ``,
          mobile: {
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            paddingLeft: ``,
            paddingRight: ``
          }
        },
        // container
        container: {
          marginLeft: `600px`,
          marginRight: ``,
          mobile: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          }
        }
      },
      // StyledNavGrid
      // ==========================================================================
      StyledNavGrid: {
        withRowGap: false,
        withColGapp: false,
        gridTemplateColumns: ``,
        alignItems: `center`,
        zIndex: `10`,
        display: `grid`,
        mobile: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavWrap
      // ==========================================================================
      StyledNavWrap: {
        display: `flex`,
        mobile: {
          gap: `10px`,
          gridColumn: `1/13`
        },
        mobileLarge: {
          gap: ``,
          gridColumn: ``
        },
        tablet: {
          gap: ``,
          gridColumn: ``
        },
        desktop: {
          gap: ``,
          gridColumn: ``
        },
        widescreen: {
          gap: ``,
          gridColumn: ``
        },
        // Button style
        // ==========================================================================
        arrowLeftButton: {
          variant: `CarouselNavBtn`,
          withIcon: true,
          withText: false,
          iconName: `arrowLeft`
        },
        arrowRightButton: {
          variant: `CarouselNavBtn`,
          withIcon: true,
          withText: false,
          iconName: `arrowRight`
        }
      }
    },
    // ==========================================================================
    // NavThumbs
    // ==========================================================================
    NavThumbs: {
      // StyledNavThumbs
      // ==========================================================================
      StyledNavThumbs: {
        position: `absolute`,
        zIndex: `10`,
        mobile: {
          top: ``,
          bottom: `20px`,
          right: `0`,
          left: `0`,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          top: ``,
          bottom: ``,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          top: ``,
          bottom: `30px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          top: ``,
          bottom: `40px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          top: ``,
          bottom: `50px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavThumbsContainer
      // ==========================================================================
      StyledNavThumbsContainer: {
        color: `inherit`,
        isFluid: true,
        // fluidContainer
        fluidContainer: {
          marginLeft: ``,
          marginRight: ``,
          width: ``,
          maxWidth: ``,
          mobile: {
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            paddingLeft: ``,
            paddingRight: ``
          }
        },
        // container
        // ==========================================================================
        container: {
          marginLeft: `600px`,
          marginRight: ``,
          mobile: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          }
        }
      },
      // StyledNavThumbsGrid
      // ==========================================================================
      StyledNavThumbsGrid: {
        withRowGap: false,
        withColGapp: false,
        gridTemplateColumns: ``,
        alignItems: `center`,
        zIndex: `10`,
        display: `grid`,
        mobile: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavThumbsWrap
      // ==========================================================================
      StyledNavThumbsWrap: {
        display: `flex`,
        mobile: {
          gap: `10px`,
          gridColumn: `1/13`
        },
        mobileLarge: {
          gap: ``,
          gridColumn: ``
        },
        tablet: {
          gap: ``,
          gridColumn: `1/13`
        },
        desktop: {
          gap: ``,
          gridColumn: ``
        },
        widescreen: {
          gap: ``,
          gridColumn: ``
        },
        // Button style
        Button: {
          variant: `buttonIconPrimary`
        }
      },
      // ThumbsItem
      // ==========================================================================
      ThumbsItem: {
        cursor: `pointer`,
        background: `${colors.red}`,
        backgroundHover: `${colors.red}`,
        backgroundActive: `${colors.red}`,
        mobile: {
          margin: `0 5px 0 0`,
          padding: ``,
          height: `5px`,
          width: `30px`,
          borderRadius: `3px`
        },
        mobileLarge: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        },
        tablet: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        },
        desktop: {
          margin: ``,
          height: ``,
          width: `40px`,
          borderRadius: ``
        },
        widescreen: {
          margin: ``,
          height: ``,
          width: `50px`,
          borderRadius: ``
        }
      }
    },
    // ==========================================================================
    // StyledSearchBarWrap
    // ==========================================================================
    StyledSearchBarWrap: {
      mobile: {
        gridColumn: `1/13`
      },
      mobileLarge: {
        gridColumn: ``
      },
      tablet: {
        gridColumn: ``,
        padding: `0 55px 0 0`
      },
      desktop: {
        gridColumn: `3/13`,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        padding: ``
      }
    }
  },
  // ==========================================================================
  // layoutVariant: fullScreen
  // ==========================================================================
  fullScreen: {
    SlideCarousel: {
      duration: 5000
    },
    FadeCarousel: {
      duration: 5000
    },
    // ==========================================================================
    // StyledCarouselWrap
    // ==========================================================================
    StyledCarouselWrap: {
      position: `relative`,
      mobile: {
        height: `100vh`,
        minHeight: ``,
        maxHeight: ``,
        overflow: ``
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // NavArrows
    // ==========================================================================
    NavArrows: {
      // StyledNav
      // ==========================================================================
      StyledNav: {
        position: `absolute`,
        zIndex: `2`,
        mobile: {
          top: ``,
          bottom: `45px`,
          right: `0`,
          left: `0`,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          top: ``,
          bottom: `55px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          top: ``,
          bottom: `50px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          top: ``,
          bottom: ``,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          top: ``,
          bottom: `75px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavContainer
      // ==========================================================================
      StyledNavContainer: {
        color: `inherit`,
        isFluid: true,
        // fluidContainer
        fluidContainer: {
          marginLeft: ``,
          marginRight: ``,
          width: ``,
          maxWidth: ``,
          mobile: {
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            paddingLeft: ``,
            paddingRight: ``
          }
        },
        // container
        container: {
          marginLeft: `600px`,
          marginRight: ``,
          mobile: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          }
        }
      },
      // StyledNavGrid
      // ==========================================================================
      StyledNavGrid: {
        withRowGap: false,
        withColGapp: false,
        gridTemplateColumns: ``,
        alignItems: `center`,
        zIndex: `10`,
        display: `grid`,
        mobile: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavWrap
      // ==========================================================================
      StyledNavWrap: {
        display: `flex`,
        mobile: {
          gap: `10px`,
          gridColumn: `1/13`
        },
        mobileLarge: {
          gap: ``,
          gridColumn: ``
        },
        tablet: {
          gap: ``,
          gridColumn: `1/13;`
        },
        desktop: {
          gap: ``,
          gridColumn: ``
        },
        widescreen: {
          gap: ``,
          gridColumn: `1/12;`
        },
        // Button style
        // ==========================================================================
        arrowLeftButton: {
          variant: `CarouselNavBtn`,
          withIcon: true,
          withText: false,
          iconName: `arrowLeft`
        },
        arrowRightButton: {
          variant: `CarouselNavBtn`,
          withIcon: true,
          withText: false,
          iconName: `arrowRight`
        }
      }
    },
    // ==========================================================================
    // NavThumbs
    // ==========================================================================
    NavThumbs: {
      // StyledNavThumbs
      // ==========================================================================
      StyledNavThumbs: {
        position: `absolute`,
        zIndex: `10`,
        mobile: {
          top: ``,
          bottom: `20px`,
          right: `0`,
          left: `0`,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          top: ``,
          bottom: ``,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          top: ``,
          bottom: `30px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          top: ``,
          bottom: `40px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          top: ``,
          bottom: `50px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavThumbsContainer
      // ==========================================================================
      StyledNavThumbsContainer: {
        isFluid: true,
        color: `inherit`,
        // fluidContainer
        fluidContainer: {
          marginLeft: ``,
          marginRight: ``,
          width: ``,
          maxWidth: ``,
          mobile: {
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            paddingLeft: ``,
            paddingRight: ``
          }
        },
        // container
        // ==========================================================================
        container: {
          marginLeft: `600px`,
          marginRight: ``,
          mobile: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          }
        }
      },
      // StyledNavThumbsGrid
      // ==========================================================================
      StyledNavThumbsGrid: {
        withRowGap: false,
        withColGapp: false,
        gridTemplateColumns: ``,
        alignItems: `center`,
        zIndex: `10`,
        display: `grid`,
        mobile: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavThumbsWrap
      // ==========================================================================
      StyledNavThumbsWrap: {
        display: `flex`,
        mobile: {
          gap: `10px`,
          gridColumn: `1/13`
        },
        mobileLarge: {
          gap: ``,
          gridColumn: ``
        },
        tablet: {
          gap: ``,
          gridColumn: `1/13`
        },
        desktop: {
          gap: ``,
          gridColumn: ``
        },
        widescreen: {
          gap: ``,
          gridColumn: ``
        },
        // Button style
        Button: {
          variant: `buttonIconPrimary`
        }
      },
      // ThumbsItem
      // ==========================================================================
      ThumbsItem: {
        cursor: `pointer`,
        background: `${colors.white}`,
        backgroundHover: `${colors.red}`,
        backgroundActive: `${colors.red}`,
        mobile: {
          margin: `0 0 0 5px`,
          padding: ``,
          height: `5px`,
          width: `30px`,
          borderRadius: `3px`
        },
        mobileLarge: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        },
        tablet: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        },
        desktop: {
          margin: ``,
          height: ``,
          width: `40px`,
          borderRadius: ``
        },
        widescreen: {
          margin: ``,
          height: ``,
          width: `50px`,
          borderRadius: ``
        }
      }
    },
    // ==========================================================================
    // StyledSearchBarWrap
    // ==========================================================================
    StyledSearchBarWrap: {
      mobile: {
        gridColumn: `1/13`
      },
      mobileLarge: {
        gridColumn: ``
      },
      tablet: {
        gridColumn: ``,
        padding: `0 55px 0 0`
      },
      desktop: {
        gridColumn: `3/13`,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        padding: ``
      }
    }
  },
  // ==========================================================================
  // layoutVariant: heroCarousel
  // ==========================================================================
  heroCarousel: {
    SlideCarousel: {
      duration: 5000
    },
    FadeCarousel: {
      duration: 5000
    },
    // ==========================================================================
    // StyledCarouselWrap
    // ==========================================================================
    StyledCarouselWrap: {
      position: `absolute`,
      top: `0`,
      bottom: `0`,
      right: `0`,
      left: `0`,
      mobile: {
        height: `100vh`,
        minHeight: `750px`,
        maxHeight: ``,
        overflow: ``
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        overflow: ``
      },
      desktop: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        overflow: ``
      },
      widescreen: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        overflow: ``
      }
    },
    // ==========================================================================
    // NavArrows
    // ==========================================================================
    NavArrows: {
      // StyledNav
      // ==========================================================================
      StyledNav: {
        position: `absolute`,
        zIndex: `2`,
        mobile: {
          top: ``,
          bottom: `45px`,
          right: `0`,
          left: `0`,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          top: ``,
          bottom: `55px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          top: ``,
          bottom: `50px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          top: ``,
          bottom: ``,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          top: ``,
          bottom: `75px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavContainer
      // ==========================================================================
      StyledNavContainer: {
        color: `inherit`,
        isFluid: true,
        // fluidContainer
        fluidContainer: {
          marginLeft: ``,
          marginRight: ``,
          width: ``,
          maxWidth: ``,
          mobile: {
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            paddingLeft: ``,
            paddingRight: ``
          }
        },
        // container
        container: {
          marginLeft: `600px`,
          marginRight: ``,
          mobile: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          }
        }
      },
      // StyledNavGrid
      // ==========================================================================
      StyledNavGrid: {
        withRowGap: false,
        withColGapp: false,
        gridTemplateColumns: ``,
        alignItems: `center`,
        zIndex: `10`,
        display: `grid`,
        mobile: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavWrap
      // ==========================================================================
      StyledNavWrap: {
        display: `flex`,
        mobile: {
          gap: `10px`,
          gridColumn: `1/13`
        },
        mobileLarge: {
          gap: ``,
          gridColumn: ``
        },
        tablet: {
          gap: ``,
          gridColumn: `7/13;`
        },
        desktop: {
          gap: ``,
          gridColumn: ``
        },
        widescreen: {
          gap: ``,
          gridColumn: `7/12;`
        },
        // Button style
        // ==========================================================================
        arrowLeftButton: {
          variant: `CarouselNavBtn`,
          withIcon: true,
          withText: false,
          iconName: `arrowLeft`
        },
        arrowRightButton: {
          variant: `CarouselNavBtn`,
          withIcon: true,
          withText: false,
          iconName: `arrowRight`
        }
      }
    },
    // ==========================================================================
    // NavThumbs
    // ==========================================================================
    NavThumbs: {
      // StyledNavThumbs
      // ==========================================================================
      StyledNavThumbs: {
        position: `absolute`,
        zIndex: `8`,
        mobile: {
          top: ``,
          bottom: `30px`,
          right: `0`,
          left: `0`,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          top: ``,
          bottom: `40px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          top: ``,
          bottom: `50px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          top: ``,
          bottom: ``,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          top: ``,
          bottom: `60px`,
          right: ``,
          left: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavThumbsContainer
      // ==========================================================================
      StyledNavThumbsContainer: {
        color: `inherit`,
        isFluid: true,
        // fluidContainer
        fluidContainer: {
          marginLeft: ``,
          marginRight: ``,
          width: ``,
          maxWidth: ``,
          mobile: {
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            paddingLeft: ``,
            paddingRight: ``
          }
        },
        // container
        container: {
          marginLeft: `600px`,
          marginRight: ``,
          mobile: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          mobileLarge: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          tablet: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          desktop: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          },
          widescreen: {
            width: ``,
            paddingLeft: ``,
            paddingRight: ``
          }
        }
      },
      // StyledNavThumbsGrid
      // ==========================================================================
      StyledNavThumbsGrid: {
        withRowGap: false,
        withColGapp: false,
        gridTemplateColumns: ``,
        alignItems: `center`,
        zIndex: `10`,
        display: `grid`,
        mobile: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        mobileLarge: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        tablet: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        desktop: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        },
        widescreen: {
          colGap: ``,
          rowGap: ``,
          margin: ``,
          padding: ``
        }
      },
      // StyledNavThumbsWrap
      // ==========================================================================
      StyledNavThumbsWrap: {
        display: `flex`,
        mobile: {
          gap: `10px`,
          gridColumn: `1/13`
        },
        mobileLarge: {
          gap: ``,
          gridColumn: ``
        },
        tablet: {
          gap: ``,
          gridColumn: `1/13;`
        },
        desktop: {
          gap: ``,
          gridColumn: ``
        },
        widescreen: {
          gap: ``,
          gridColumn: `1/13;`
        },
        // Button style
        Button: {
          variant: `buttonIconPrimary`
        }
      },
      // ThumbsItem
      // ==========================================================================
      ThumbsItem: {
        cursor: `pointer`,
        background: `${colors.white}`,
        backgroundHover: `${colors.blueLight}`,
        backgroundActive: `${colors.blueLight}`,
        mobile: {
          margin: `0 0 0 5px`,
          padding: ``,
          height: `15px`,
          width: `15px`,
          borderRadius: `100%`
        },
        mobileLarge: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        },
        tablet: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        },
        desktop: {
          margin: `0 0 0 10px`,
          padding: ``,
          height: `15px`,
          width: `15px`,
          borderRadius: ``
        },
        widescreen: {
          margin: ``,
          height: ``,
          width: ``,
          borderRadius: ``
        }
      }
    },
    // ==========================================================================
    // StyledSearchBarWrap
    // ==========================================================================
    StyledSearchBarWrap: {
      mobile: {
        gridColumn: `1/13`
      },
      mobileLarge: {
        gridColumn: ``
      },
      tablet: {
        gridColumn: ``,
        padding: `0 55px 0 0`
      },
      desktop: {
        gridColumn: `3/13`,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        padding: ``
      }
    }
  }
};
export { Carousel };
