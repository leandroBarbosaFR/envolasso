import { colors } from '../variables/';
// ==========================================================================
// PageHeaderBanner Styles
// ==========================================================================
const PageHeader = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Config: Hide/show content
    // ==========================================================================
    config: {
      isCategoryVisible: true,
      isSectionImageBgVisible: true,
      isImageBgVisible: true,
      isSubtitleVisible: false,
      isTitleVisible: true,
      isBodyVisible: true,
      isCtaVisible: false,
      isKeywordsTermsVisible: false,
      isExcerptVisible: false //false by default
    },
    // ==========================================================================
    // StyledPageHeaderBanner (Section)
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      position: `relative`,
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
    // SectionImageBg
    // ==========================================================================
    SectionImageBg: {
      layoutVariant: `fullScreen`,
      fit: ``,
      width: 1400,
      height: 900,
      cropWidth: 1400,
      cropHeight: 900
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledContainer: {
      // Props settings
      isFluid: true,
      // fluidContainer
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // fluidContainer
      // ==========================================================================
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
      // ========================================================================
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
      display: `grid`,
      gridTemplateColumns: ``,
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
    // StyledImage
    // ==========================================================================
    StyledImage: {
      zIndex: `1`,
      overflow: 'hidden',
      display: 'block',
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `170px`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `200px`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `300px`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `340px`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `500px`,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: `crop`,
        width: 1410,
        height: 500,
        cropWidth: 1410,
        cropHeight: 500
      },
      // ==========================================================================
      // After
      // ==========================================================================
      after: {
        content: ``,
        position: ``,
        zIndex: `0`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        mixBlendMode: ``,
        background: ``
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
        gridColumn: `1/9`,
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
        gridColumn: ` 1/9`,
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
        mobile: {
          margin: ``,
          After: {}
        },
        mobileLarge: {
          margin: ``,
          After: {}
        },
        tablet: {
          margin: ``,
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
          color: colors.white
        }
      }
    },
    // ==========================================================================
    // StyledTextImgArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
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
        gridColumn: `1/9`,
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
        gridColumn: `12/13`,
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
    },
    // ==========================================================================
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      gridTemplateColumns: ``,
      mobile: {
        height: `200px`,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        height: `250px`,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        height: `350px`,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        height: `400px`,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        height: `450px`,
        colGap: ``,
        rowGap: ``
      }
    }
  },
    // ==========================================================================
  // layoutVariant
  // ==========================================================================
  contact: {
    // ==========================================================================
    // Config: Hide/show content
    // ==========================================================================
    config: {
      isCategoryVisible: true,
      isSectionImageBgVisible: true,
      isImageBgVisible: true,
      isSubtitleVisible: false,
      isTitleVisible: true,
      isBodyVisible: true,
      isCtaVisible: false,
      isKeywordsTermsVisible: false,
      isExcerptVisible: false //false by default
    },
    // ==========================================================================
    // StyledPageHeaderBanner (Section)
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      position: `relative`,
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
    // SectionImageBg
    // ==========================================================================
    SectionImageBg: {
      layoutVariant: `fullScreen`,
      fit: ``,
      width: 1400,
      height: 900,
      cropWidth: 1400,
      cropHeight: 900
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledContainer: {
      // Props settings
      isFluid: true,
      // fluidContainer
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // fluidContainer
      // ==========================================================================
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
      // ========================================================================
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
      display: `grid`,
      gridTemplateColumns: ``,
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
    // StyledImage
    // ==========================================================================
    StyledImage: {
      zIndex: `1`,
      overflow: 'hidden',
      display: 'block',
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `170px`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `200px`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `300px`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `340px`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        // height: `500px`,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: `crop`,
        width: 1410,
        height: 500,
        cropWidth: 1410,
        cropHeight: 500
      },
      // ==========================================================================
      // After
      // ==========================================================================
      after: {
        content: ``,
        position: ``,
        zIndex: `0`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        mixBlendMode: ``,
        background: ``
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
        gridColumn: `1/9`,
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
        gridColumn: ` 1/9`,
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
        mobile: {
          margin: ``,
          After: {}
        },
        mobileLarge: {
          margin: ``,
          After: {}
        },
        tablet: {
          margin: ``,
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
          color: colors.white
        }
      }
    },
    // ==========================================================================
    // StyledTextImgArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
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
        gridColumn: `1/9`,
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
        gridColumn: `12/13`,
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
    },
    // ==========================================================================
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      gridTemplateColumns: ``,
      mobile: {
        height: `200px`,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        height: `250px`,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        height: `350px`,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        height: `400px`,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        height: `450px`,
        colGap: ``,
        rowGap: ``
      }
    }
  }
};
export { PageHeader };
