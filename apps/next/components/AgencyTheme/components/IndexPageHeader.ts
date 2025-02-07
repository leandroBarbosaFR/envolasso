import { colors } from '../variables';

const IndexPageHeader = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledIndexPageHeader
    // ==========================================================================
    StyledIndexPageHeader: {},
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      color: `inherit`,
      isFluid: true,
      // Fluid Container
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
      // Container
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
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      alignItems: `center`,
      mobile: {
        colGap: ``,
        rowGap: ``,
        margin: `0 0 30px`,
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
    // ==========================================================================
    // StyledImageItem
    // ==========================================================================
    StyledImage: {
      zIndex: `1`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/10`,
        gridRow: `4`,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: `4`,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `2/6`,
        gridRow: `2/7`,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: `crop`,
        fill: false,
        priority: false,
        placeholder: `blur`,
        width: 600,
        height: 700,
        cropWidth: 600,
        cropHeight: 700
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
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
        gridColumn: `1/6`,
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
      // StyledHeading
      // ==========================================================================
      StyledHeading: {
        variant: `primary`,
        color: `${colors.white}`,
        span: {},
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
    },
    // ==========================================================================
    // Carousel: SlideCarousel
    // ==========================================================================
    SlideCarousel: {
      layoutVariant: `default`,
      withLoop: true,
      withArrowButton: true,
      withThumbnails: true,
      autoSlide: true
    },
    // ==========================================================================
    // Carousel: FadeCarousel
    // ==========================================================================
    FadeCarousel: {
      layoutVariant: `default`,
      withLoop: true,
      withArrowButton: true,
      withThumbnails: true,
      autoSlide: true
    }
  }
};

export { IndexPageHeader };
