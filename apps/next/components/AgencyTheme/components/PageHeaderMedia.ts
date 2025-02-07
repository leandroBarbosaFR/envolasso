import { colors } from '../variables';
// ==========================================================================
// PageHeaderMedia Styles
// ==========================================================================
const PageHeaderMedia = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Config: Hide/show content
    // ==========================================================================
    config: {
      isBackButtonVisible: true,
      isBackButtonLink: true,
      isCategoryVisible: false,
      isSubtitleVisible: false,
      isTitleVisible: false,
      isExcerptVisible: false,
      isBodyVisible: false,
      isCtaVisible: false,
      isKeywordsTermsVisible: false
    },
    OptsSharePage: {
      layoutVariant: `default`
    },
    // ==========================================================================
    // StyledPageHeaderMedia (Section)
    // ==========================================================================
    StyledPageHeader: {
      position: `relative`,
      overflow: `hidden`,
      background: colors.black,
      mobile: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        height: ``,
        minHeight: ``,
        maxHeight: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledContainer: {
      // Props settings
      isFluid: true,
      // fluidContainer
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
      // container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: `80%`,
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
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      position: `relative`,
      display: `grid`,
      gridTemplateColumns: ``,
      withRowGap: true,
      withColGapp: true,
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
      },
      StyledBackButton: {
        position: `absolute`,
        zIndex: `3`,
        right: `0`,
        display: `flex`,
        flexWrap: `wrap`,
        mobile: {
          bottom: `20px`,
          left: `0`
        },
        mobileLarge: {
          bottom: ``,
          left: `0`
        },
        tablet: {
          bottom: ``,
          left: `0`
        },
        desktop: {
          bottom: ``,
          left: `0`
        },
        widescreen: {
          bottom: ``,
          left: `0`
        },
        Button: {
          variant: `buttonIconSecondary`,
          withIcon: false,
          withText: true,
          iconName: ``
        }
      },
      StyledIconNav: {
        position: `absolute`,
        zIndex: `3`,
        right: `0`,
        display: `flex`,
        flexWrap: `wrap`,
        gap: `10px`,
        mobile: {
          right: `0`,
          bottom: `10px`
        },
        mobileLarge: {
          right: `0`,
          bottom: `20px`
        },
        tablet: {
          right: `0`,
          bottom: `20px`
        },
        desktop: {
          right: `0`,
          bottom: `30px`,
          gap: `15px`
        },
        widescreen: {
          right: `0`,
          bottom: ``,
          gap: ``
        },
        surpriseMeButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `share`
        }
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: ``,
      zIndex: `1`,
      overflow: `hidden`,
      border: `1px solid ${colors.greyMid}`,
      mobile: {
        mxWidth: ``,
        margin: `auto`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: `6px`,
        borderTopRightRadius: `6px`,
        borderBottomLeftRadius: `6px`,
        borderBottomRightRadius: `6px`
      },
      mobileLarge: {
        mxWidth: ``,
        margin: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      tablet: {
        mxWidth: ``,
        margin: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      desktop: {
        mxWidth: ``,
        margin: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      widescreen: {
        mxWidth: ``,
        margin: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      ImageTag: {
        layoutVariant: `responsive`,
        width: 1440,
        height: 828,
        // cropWidth: 3000,
        // cropHeight: 800,
        fit: `crop`,
        fill: false,
        priority: true,
        placeholder: `blur`
      }
    },
    // ==========================================================================
    // StyledMediaWrapper
    // ==========================================================================
    StyledMediaWrapper: {
      position: ``,
      top: `0`,
      left: `0`,
      width: `100%`,
      height: `100%`,
      zIndex: `0`,
      pointerEvents: ``,
      overflow: `hidden`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `initial`,
      backgroundSize: `cover`,
      mobile: {
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      mobileLarge: {
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      tablet: {
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      desktop: {
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      widescreen: {
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
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
        gridColumn: `2/5`,
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
      zIndex: `1`,
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
        gridColumn: `2/9`,
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
          color: `${colors.white}`
        }
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      zIndex: `1`,
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
        gridColumn: ` 2/9`,
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
        color: ``,
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
          color: colors.white
        }
      }
    },
    // ==========================================================================
    // StyledExcerpt
    // ==========================================================================
    StyledExcerpt: {
      variant: `standfirst`,
      blockquote: {
        color: colors.white
      },
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
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
        gridColumn: `5/13`,
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
        gridColumn: `2/9`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      zIndex: `1`,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        display: ``,
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
        gridColumn: `10/13`,
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
      CtaNav: {
        variant: `default`
      }
    }
  }
};
export { PageHeaderMedia };
