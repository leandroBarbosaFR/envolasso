import { colors } from '../variables/';
// ==========================================================================
// PostBody
// ==========================================================================
const PostBody = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Config: Hide/show content
    // ==========================================================================
    config: {
      isCategoryVisible: true,
      isSubtitleVisible: true,
      isTitleVisible: true,
      isBodyVisible: true,
      isExcerptVisible: true,
      isCtaVisible: true
    },
    OptsSharePage: {
      layoutVariant: `default`
    },
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `linear-gradient(90deg, #C9EDFF, #96DDFF)`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `30px 0 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `40px 0 0`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `50px 0 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `60px 0 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `70px 0 0`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      color: `inherit`,
      // Props settings
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
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: ``,
      alignItems: '',
      display: `grid`,
      position: `relative`,
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
    // StyledGrid
    // ==========================================================================
    StyledIconNav: {
      position: `absolute`,
      zIndex: `3`,
      right: `0`,
      display: `flex`,
      flexWrap: `wrap`,
      gap: `10px`,
      mobile: {
        right: `0`,
        top: `0`
      },
      mobileLarge: {
        right: `0`,
        top: `20px`
      },
      tablet: {
        right: `0`,
        top: `20px`
      },
      desktop: {
        right: `0`,
        top: `30px`,
        gap: `15px`
      },
      widescreen: {
        right: `0`,
        top: ``,
        gap: ``
      },
      button: {
        variant: `buttonIconPrimary`,
        withIcon: true,
        withText: true,
        iconName: `share`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledCatWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
        gridColumn: `1/5`,
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
      Button: {
        variant: `buttonPrimary`,
        text: `Read More`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
        gridColumn: `1/5`,
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
        mobile: {
          margin: `15px 0 15px`
        },
        mobileLarge: {
          margin: `20px 0 20px`
        },
        tablet: {
          margin: `25px 0 25px`
        },
        desktop: {
          margin: `30px 0 30px`
        },
        widescreen: {
          margin: `30px 0 30px`
        }
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
        gridColumn: `1/8`,
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
        color: colors.black,
        mobile: {
          margin: `0 0 15px`
        },
        mobileLarge: {
          margin: `0 0 20px`
        },
        tablet: {
          margin: `0 0 25px`
        },
        desktop: {
          margin: `0 0 30px`
        },
        widescreen: {
          margin: `0 0 30px`
        }
      }
    },
    // ==========================================================================
    // StyledExcerpt
    // ==========================================================================
    StyledExcerpt: {
      variant: `standfirst`,
      blockquote: {
        color: colors.green
      },
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
        margin: ``
      },
      mobileLarge: {
        gridColumn: `1/12`,
        gridRow: ``,
        margin: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      desktop: {
        gridColumn: `1/5`,
        gridRow: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      }
    },
    // ==========================================================================
    // StyledTextImgArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      blockquote: {
        color: colors.green
      },
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      desktop: {
        gridColumn: `1/7`,
        gridRow: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
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
        gridRow: `6`,
        margin: `0 0 15px`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: `0 0 20px`,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: `0 0 25px`,
        padding: ``
      },
      desktop: {
        gridColumn: `1/5`,
        gridRow: `6`,
        margin: `0`,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: `0`,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: `Links:`,
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
export { PostBody };
