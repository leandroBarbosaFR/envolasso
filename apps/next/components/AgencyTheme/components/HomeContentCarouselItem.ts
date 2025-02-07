import { colors } from '../variables';
// ==========================================================================
// ComposerCarouselItem
// ==========================================================================
const HomeContentCarouselItem = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledCarouselItemx
    // ==========================================================================
    StyledCarouselItem: {
      width: `100%`,
      height: `100%`,
      objectFit: `cover`
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {},
    ImageTag: {
      layoutVariant: `fullScreen`,
      objectFit: 'cover',
      userSelect: `none`,
      pointerEvents: `none`
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      isFluid: true,
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: ``,
        bottom: `60px`,
        right: `0`,
        left: `0`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        top: ``,
        bottom: `70px`,
        right: ``,
        left: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        top: ``,
        bottom: `90px`,
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
        bottom: `130px`,
        right: ``,
        left: ``,
        margin: ``,
        padding: ``
      },
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
        marginLeft: ``,
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
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: ``,
      alignItems: ``,
      zIndex: ``,
      after: {},
      before: {},
      mobile: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      mobileLarge: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      tablet: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      desktop: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      widescreen: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      }
    },
    // ==========================================================================
    // StyledContentImage
    // ==========================================================================
    StyledContentImage: {
      mobile: {
        gridColumn: ` 1/13`,
        gridRow: ``
      },
      mobileLarge: {
        gridColumn: ` 7/13`,
        gridRow: ``
      },
      tablet: {
        gridColumn: ` 1/13`,
        gridRow: ``
      },
      desktop: {
        gridColumn: ` 7/13`,
        gridRow: ``
      },
      widescreen: {
        gridColumn: ` 7/12`,
        gridRow: ``
      },
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        width: 330,
        height: 240,
        placeholder: `empty`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: `secondary`,
      color: `${colors.red}`,
      padding: `15px 0 15px 0`,
      mobile: {
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        gridColumn: ` 1/13`
      },
      tablet: {
        gridColumn: ` 1/13`
      },
      desktop: {
        gridColumn: ` 1/13`
      },
      widescreen: {
        gridColumn: ` 7/12`
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `tertiary`,
      color: `${colors.red}`,
      padding: `15px 0 15px 0`,
      mobile: {
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        gridColumn: ` 1/13`
      },
      tablet: {
        gridColumn: ` 7/13`
      },
      desktop: {
        gridColumn: ` 7/13`
      },
      widescreen: {
        gridColumn: ` 7/12`
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledExcerpt
    // ==========================================================================
    StyledExcerpt: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        gridColumn: ` 1/13`,
        margin: `0 0 0 0`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `7/13`,
        margin: `0 0 0`,
        padding: ``
      },
      desktop: {
        gridColumn: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `7/12`,
        margin: `0 0 0`,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `block`,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `7/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: ``,
        mobile: {
          margin: ``
        },
        mobileLarge: {
          margin: ``
        },
        tablet: {
          margin: ``
        },
        desktop: {
          margin: ``
        },
        widescreen: {
          margin: ``
        }
      }
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  fullScreen: {
    // ==========================================================================
    // StyledCarouselItemx
    // ==========================================================================
    StyledCarouselItem: {
      width: `100%`,
      height: `100%`,
      objectFit: `cover`
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {},
    ImageTag: {
      layoutVariant: `fullScreen`,
      objectFit: 'cover',
      userSelect: `none`,
      pointerEvents: `none`
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      isFluid: true,
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: ``,
        bottom: `60px`,
        right: `0`,
        left: `0`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        top: ``,
        bottom: `70px`,
        right: ``,
        left: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        top: ``,
        bottom: `90px`,
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
        bottom: `130px`,
        right: ``,
        left: ``,
        margin: ``,
        padding: ``
      },
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
        marginLeft: ``,
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
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: ``,
      alignItems: ``,
      zIndex: ``,
      after: {},
      before: {},
      mobile: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      mobileLarge: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      tablet: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      desktop: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      widescreen: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      }
    },
    // ==========================================================================
    // StyledContentImage
    // ==========================================================================
    StyledContentImage: {
      mobile: {
        gridColumn: ` 1/13`,
        gridRow: ``
      },
      mobileLarge: {
        gridColumn: ` 7/13`,
        gridRow: ``
      },
      tablet: {
        gridColumn: ` 1/13`,
        gridRow: ``
      },
      desktop: {
        gridColumn: ` 7/13`,
        gridRow: ``
      },
      widescreen: {
        gridColumn: ` 7/12`,
        gridRow: ``
      },
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        width: 330,
        height: 240,
        placeholder: `empty`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: `secondary`,
      color: `${colors.white}`,
      padding: `15px 0 15px 0`,
      mobile: {
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        gridColumn: ` 1/13`
      },
      tablet: {
        gridColumn: ` 1/13`
      },
      desktop: {
        gridColumn: ` 1/13`
      },
      widescreen: {
        gridColumn: ` 7/12`
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `tertiary`,
      color: `${colors.white}`,
      padding: `15px 0 15px 0`,
      mobile: {
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        gridColumn: ` 1/13`
      },
      tablet: {
        gridColumn: ` 7/13`
      },
      desktop: {
        gridColumn: ` 7/13`
      },
      widescreen: {
        gridColumn: ` 7/12`
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledExcerpt
    // ==========================================================================
    StyledExcerpt: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        gridColumn: ` 1/13`,
        margin: `0 0 0 0`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `7/13`,
        margin: `0 0 0`,
        padding: ``
      },
      desktop: {
        gridColumn: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `7/12`,
        margin: `0 0 0`,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `block`,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `7/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: ``,
        mobile: {
          margin: ``
        },
        mobileLarge: {
          margin: ``
        },
        tablet: {
          margin: ``
        },
        desktop: {
          margin: ``
        },
        widescreen: {
          margin: ``
        }
      }
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  heroCarousel: {
    // ==========================================================================
    // StyledCarouselItemx
    // ==========================================================================
    StyledCarouselItem: {
      width: `100%`,
      height: `100%`,
      objectFit: `cover`
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {},
    ImageTag: {
      layoutVariant: `fullScreen`,
      objectFit: 'cover',
      userSelect: `none`,
      pointerEvents: `none`
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      isFluid: true,
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: ``,
        bottom: `60px`,
        right: `0`,
        left: `0`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        top: ``,
        bottom: `70px`,
        right: ``,
        left: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        top: ``,
        bottom: `90px`,
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
        bottom: `130px`,
        right: ``,
        left: ``,
        margin: ``,
        padding: ``
      },
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
        marginLeft: ``,
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
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: ``,
      alignItems: ``,
      zIndex: ``,
      after: {},
      before: {},
      mobile: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      mobileLarge: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      tablet: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      desktop: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      },
      widescreen: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``,
        after: {},
        before: {}
      }
    },
    // ==========================================================================
    // StyledContentImage
    // ==========================================================================
    StyledContentImage: {
      mobile: {
        gridColumn: ` 1/13`,
        gridRow: ``
      },
      mobileLarge: {
        gridColumn: ` 7/13`,
        gridRow: ``
      },
      tablet: {
        gridColumn: ` 1/13`,
        gridRow: ``
      },
      desktop: {
        gridColumn: ` 7/13`,
        gridRow: ``
      },
      widescreen: {
        gridColumn: ` 7/12`,
        gridRow: ``
      },
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        width: 330,
        height: 240,
        placeholder: `empty`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: `secondary`,
      color: `${colors.white}`,
      padding: `15px 0 15px 0`,
      mobile: {
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        gridColumn: ` 1/13`
      },
      tablet: {
        gridColumn: ` 1/13`
      },
      desktop: {
        gridColumn: ` 1/13`
      },
      widescreen: {
        gridColumn: ` 7/12`
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `tertiary`,
      color: `${colors.white}`,
      padding: `15px 0 15px 0`,
      mobile: {
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        gridColumn: ` 1/13`
      },
      tablet: {
        gridColumn: ` 7/13`
      },
      desktop: {
        gridColumn: ` 7/13`
      },
      widescreen: {
        gridColumn: ` 7/12`
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledExcerpt
    // ==========================================================================
    StyledExcerpt: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        gridColumn: ` 1/13`,
        margin: `0 0 0 0`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `7/13`,
        margin: `0 0 0`,
        padding: ``
      },
      desktop: {
        gridColumn: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `7/12`,
        margin: `0 0 0`,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `block`,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `7/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: ``,
        mobile: {
          margin: ``
        },
        mobileLarge: {
          margin: ``
        },
        tablet: {
          margin: ``
        },
        desktop: {
          margin: ``
        },
        widescreen: {
          margin: ``
        }
      }
    }
  }
};

export { HomeContentCarouselItem };
