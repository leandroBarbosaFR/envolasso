import { colors } from '../variables/';

const ClientLogoSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.midBlack}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: ``
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
    // StyledFeedContainer
    // ==========================================================================
    StyledContainer: {
      // Props settings
      position: `relative`,
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
      gridTemplateColumns: ``,
      withRowGap: true,
      withColGapp: true,
      mobile: {
        gridTemplateColumns: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        gridTemplateColumns: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        gridTemplateColumns: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        gridTemplateColumns: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        gridTemplateColumns: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitleWrap: {
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
        gridColumn: ``,
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
      // StyledSubTitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `secondary`,
        color: colors.greyLighter,
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
        },
        span: {
          color: `${colors.greyLighter}`
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
        gridColumn: ``,
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
        variant: `tertiarySmall`,
        color: `${colors.greyLighter}`,
        position: `relative`,
        overflow: `hidden`,
        mobile: {
          margin: ``,
          After: {}
        },
        mobileLarge: {
          margin: ``,
          After: {}
        },
        tablet: {
          margin: `0 0 40px 0`,
          After: {}
        },
        desktop: {
          margin: ``,
          After: {}
        },
        widescreen: {
          margin: ``,
          After: {}
        },
        span: {
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledTextImgArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      textAlign: ``,
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
        gridColumn: ``,
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
    // StyledFeedGrid
    // ==========================================================================
    StyledGridNested: {
      display: `grid`,
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: `repeat(12,1fr)`,
      mobile: {
        gridTemplateColumns: ``,
        gridColumn: `2/12`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        gridTemplateColumns: ``,
        gridColumn: `1/13`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        gridTemplateColumns: ``,
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        gridTemplateColumns: ``,
        gridColumn: `2/12`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        gridTemplateColumns: ``,
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledClientLogoHeading
    // ==========================================================================
    StyledClientLogoItem: {
      // filter: `grayscale(100%) brightness(100%) invert(100%)`,
      opacity: ``,
      display: `flex`,
      alignItems: `center`,
      ImageTag: {
        layoutVariant: `responsiveClientLogo`,
        fit: ``,
        fill: false,
        width: 200,
        height: 50,
        cropWidth: 200,
        cropHeight: 50
      },
      mobile: {
        gridColumn: `span 6`,
        margin: `0px 40px`
      },
      mobileLarge: {
        gridColumn: `span 4`,
        margin: ``
      },
      tablet: {
        gridColumn: ``,
        margin: ``
      },
      desktop: {
        gridColumn: `span 2`,
        margin: ``
      },
      widescreen: {
        gridColumn: ``,
        margin: ``
      }
    }
  }
};
export { ClientLogoSection };
