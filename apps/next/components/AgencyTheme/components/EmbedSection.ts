import { colors } from '../variables';

const EmbedSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledSection (Section)
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      position: `relative`,
      img: {
        objectFit: `cover`
      },
      mobile: {
        height: ``,
        margin: ``,
        padding: `0 0 15px`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `0 0 20px`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `0 0 25px`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `0 0 30px`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `0 0 30px`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      isFluid: true,
      // Fluid Container
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // Container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
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
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      display: `grid`,
      mobile: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/11`,
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
        gridColumn: `5/12`,
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
      // StyledSubTitle: subtitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `primary`,
        mobile: {
          textAlign: `left`,
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
        gridColumn: `2/11`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `5/12`,
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
      // StyledHeading: title
      // ==========================================================================
      StyledHeading: {
        variant: `primary`,
        color: ``,
        mobile: {
          textAlign: `left`,
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
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      color: colors.black,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/11`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `5/12`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledMediaWrapper
    // ==========================================================================
    StyledMediaWrapper: {
      position: `relative`,
      top: ``,
      left: ``,
      width: `100%`,
      height: `100%`,
      minHeight: ``,
      minWidth: `970px`,
      zIndex: ``,
      pointerEvents: ``,
      overflow: `hidden`,
      backgroundRepeat: ``,
      backgroundAttachment: ``,
      backgroundSize: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``,
        minHeight: ``,
        minWidth: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: ``,
        padding: ``,
        minHeight: ``,
        minWidth: ``
      },
      tablet: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: ``,
        padding: ``,
        minHeight: ``,
        minWidth: ``
      },
      desktop: {
        gridColumn: `5/12`,
        gridRow: ``,
        margin: ``,
        padding: ``,
        minHeight: ``,
        minWidth: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        minHeight: ``,
        minWidth: ``
      }
    },
    // ==========================================================================
    // StyledVideo
    // ==========================================================================
    StyledVideo: {
      width: `100%`,
      height: `100%`,
      minHeight: ``,
      minWidth: ``,
      position: ``,
      top: ``,
      left: ``,
      transform: ``,
      margin: `auto`
    }
  }
};

export { EmbedSection };
