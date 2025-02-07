import { colors } from '../variables';
// ==========================================================================
// TextImgSection Styles
// ==========================================================================
const TextImgSection = {
  // ==========================================================================
  // layoutVariant - default
  // ==========================================================================
  default: {
    config: {
      isImageBgVisible: false
    },
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      position: `relative`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `50px 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `70px 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `104px 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // ImageBgTag
    // ==========================================================================
    ImageBgTag: {
      layoutVariant: `fullScreen`,
      fit: ``,
      width: 300,
      height: 300,
      cropWidth: 300,
      cropHeight: 300
    },
    // ==========================================================================
    // StyledContainer
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
      },
      after: {
        mobile: {},
        mobileLarge: {},
        tablet: {},
        desktop: {},
        widescreen: {}
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
        rowGap: `82px`
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
      border: `none`,
      borderRadius: `6px`,
      overflow: `hidden`,
      mobile: {
        gridColumn: `1/6`,
        gridRow: `1`,
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
        gridColumn: `1/5`,
        gridRow: `2/4`,
        margin: ``,
        padding: ``,
        height: `fit-content`
      },
      desktop: {
        gridColumn: `2/6`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `2/6`,
        gridRow: `2/4`,
        margin: ``,
        padding: ``
      },
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: ``,
        width: 1500,
        height: 1125
        // cropWidth: 300,
        // cropHeight: 300
      }
    },
    // ==========================================================================
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        padding: ``,
        zIndex: `1`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/8`,
        gridRow: `1`,
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
      // StyledSubTitle: subtitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `tertiary`,
        color: `${colors.greyLighter}`,
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
        gridRow: `2`,
        margin: ``,
        padding: ``,
        zIndex: `1`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `5/13`,
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
      // StyledHeading: title
      // ==========================================================================
      StyledHeading: {
        variant: `tertiary`,
        color: `${colors.greyLighter}`,
        position: ``,
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
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      color: `${colors.greyLighter}`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/10`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `7/13`,
        gridRow: `2`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: ``,
      justifyContent: `flex-end`,
      justifySelf: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: `0 auto`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: `unset`,
        padding: ``
      },
      desktop: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
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
    // StyledGridNested
    // ==========================================================================
    StyledGridNested: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(12,1fr)`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // Styles for nested column text
    // ==========================================================================
    // ==========================================================================
    // StyledGridItem
    // ==========================================================================
    StyledGridItem: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(6,1fr)`,
      after: {},
      before: {},
      mobile: {
        gridColumn: `span 12`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      tablet: {
        gridColumn: `span 6`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      desktop: {
        gridColumn: `span 3`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      }
    },
    // ==========================================================================
    // StyledImageItem
    // ==========================================================================
    StyledImageItem: {
      mobile: {
        gridColumn: `span 6`,
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
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: `crop`,
        width: 400,
        height: 400,
        cropWidth: 400,
        cropHeight: 400
      }
    },
    // ==========================================================================
    // StyledSubTitleWrapItem
    // ==========================================================================
    StyledSubTitleWrapItem: {
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `10px 0 10px 0`,
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
        margin: `13px 0 13px 0`,
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
        margin: `13px 0 0 0`,
        padding: ``
      },
      // StyledSubTitleItem: subtitle
      // ==========================================================================
      StyledSubTitleItem: {
        variant: `quinary`,
        color: `${colors.white}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledHeadingWrapItem
    // ==========================================================================
    StyledHeadingWrapItem: {
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `10px 0 10px 0`,
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
        margin: `13px 0 13px 0`,
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
      // StyledHeadingItem: title
      // ==========================================================================
      StyledHeadingItem: {
        variant: `secondary`,
        color: `${colors.white}`,
        mobile: {
          margin: `0`
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
    // StyledArticleItem
    // ==========================================================================
    StyledArticleItem: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        gridColumn: `span 6`,
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
    // StyledCtaNavWrapItem
    // ==========================================================================
    StyledCtaNavWrapItem: {
      display: ``,
      justifyContent: ``,
      mobile: {
        gridColumn: `span 6`,
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
      // StyledCtaNavItem
      // ==========================================================================
      StyledCtaNavItem: {
        variant: `default`,
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
  // layoutVariant - alternative - Portifolio single page
  // ==========================================================================
  alternative: {
    config: {
      isImageBgVisible: false
    },
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.white}`,
      position: `relative`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `64px 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `100px 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `104px 0`
      }
    },
    // ==========================================================================
    // ImageBgTag
    // ==========================================================================
    ImageBgTag: {
      layoutVariant: `fullScreen`,
      fit: ``,
      width: 300,
      height: 300,
      cropWidth: 300,
      cropHeight: 300
    },
    // ==========================================================================
    // StyledContainer
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
      },
      after: {
        mobile: {},
        mobileLarge: {},
        tablet: {},
        desktop: {},
        widescreen: {}
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
      alignItems: `end`,
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
      border: `none`,
      borderRadius: `6px`,
      overflow: `hidden`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
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
        gridColumn: `1/5`,
        gridRow: `1/5`,
        margin: ``,
        padding: ``,
        height: `fit-content`
      },
      desktop: {
        gridColumn: `2/6`,
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
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsiveBorderRadius`,
        fit: ``,
        width: 1500,
        height: 1125
        // cropWidth: 300,
        // cropHeight: 300
      }
    },
    // ==========================================================================
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: ``,
        padding: ``,
        zIndex: `1`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/12`,
        gridRow: `1`,
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
        gridColumn: `7/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledSubTitle: subtitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `primaryLarge`,
        color: `${colors.black}`,
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
          color: `${colors.black}`
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
        padding: ``,
        zIndex: `1`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/12`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `7/12`,
        gridRow: `1`,
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
        color: `${colors.black}`,
        position: ``,
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
          color: `${colors.black}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      color: `${colors.black}`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/11`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `5/13`,
        gridRow: `1`,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `7/12`,
        gridRow: `2`,
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
      display: ``,
      justifyContent: `flex-end`,
      justifySelf: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: `0 auto`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `5/13`,
        gridRow: ``,
        margin: `unset`,
        padding: ``
      },
      desktop: {
        gridColumn: `7/13`,
        gridRow: `3`,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `7/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
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
    // StyledGridNested
    // ==========================================================================
    StyledGridNested: {
      display: `grid`,
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: `repeat(12,1fr)`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: ``,
        padding: `70px 0 50px 0`,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: `184px 0 104px 0`,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // Styles for nested column text
    // ==========================================================================
    // ==========================================================================
    // StyledGridItem
    // ==========================================================================
    StyledGridItem: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(6,1fr)`,
      after: {},
      before: {},
      mobile: {
        gridColumn: `span 12`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      tablet: {
        gridColumn: `span 6`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      desktop: {
        gridColumn: `span 4`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      }
    },
    // ==========================================================================
    // StyledImageItem
    // ==========================================================================
    StyledImageItem: {
      mobile: {
        gridColumn: `span 2`,
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
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsiveBorderRadius`,
        fit: `crop`,
        width: 400,
        height: 400,
        cropWidth: 400,
        cropHeight: 400
      }
    },
    // ==========================================================================
    // StyledSubTitleWrapItem
    // ==========================================================================
    StyledSubTitleWrapItem: {
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `10px 0 10px 0`,
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
        margin: `13px 0 13px 0`,
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
        margin: `13px 0 0 0`,
        padding: ``
      },
      // StyledSubTitleItem: subtitle
      // ==========================================================================
      StyledSubTitleItem: {
        variant: `quinary`,
        color: `${colors.blackMidGrey}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledHeadingWrapItem
    // ==========================================================================
    StyledHeadingWrapItem: {
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `10px 0 10px 0`,
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
        margin: `13px 0 13px 0`,
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
      // StyledHeadingItem: title
      // ==========================================================================
      StyledHeadingItem: {
        variant: `headingFeedItem`,
        color: `${colors.blackMidGrey}`,
        mobile: {
          margin: `0`
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
          color: `${colors.blackMidGrey}`
        }
      }
    },
    // ==========================================================================
    // StyledArticleItem
    // ==========================================================================
    StyledArticleItem: {
      variant: `bodyCopy`,
      color: `${colors.GreyBlue}`,
      mobile: {
        gridColumn: `span 6`,
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
    // StyledCtaNavWrapItem
    // ==========================================================================
    StyledCtaNavWrapItem: {
      display: ``,
      justifyContent: ``,
      mobile: {
        gridColumn: `span 6`,
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
      // StyledCtaNavItem
      // ==========================================================================
      StyledCtaNavItem: {
        variant: `default`,
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
  // layoutVariant - default
  // ==========================================================================
  contactPage: {
    config: {
      isImageBgVisible: false
    },
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.midBlack}`,
      position: `relative`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `50px 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `70px 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `104px 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // ImageBgTag
    // ==========================================================================
    ImageBgTag: {
      layoutVariant: `fullScreen`,
      fit: ``,
      width: 300,
      height: 300,
      cropWidth: 300,
      cropHeight: 300
    },
    // ==========================================================================
    // StyledContainer
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
          paddingLeft: `0`,
          paddingRight: `0`
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
          paddingLeft: `0`,
          paddingRight: `0`
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
      },
      after: {
        mobile: {},
        mobileLarge: {},
        tablet: {},
        desktop: {},
        widescreen: {}
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
        rowGap: `0`
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
        rowGap: `0`
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
      border: `1px solid ${colors.greyMid}`,
      borderRadius: `6px`,
      overflow: `hidden`,
      mobile: {
        gridColumn: `1/6`,
        gridRow: `4`,
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
        gridColumn: `1/5`,
        gridRow: `2/4`,
        margin: ``,
        padding: ``,
        height: `fit-content`
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `2/4`,
        gridRow: `2/4`,
        margin: ``,
        padding: ``
      },
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: ``,
        width: 1500,
        height: 1125
        // cropWidth: 300,
        // cropHeight: 300
      }
    },
    // ==========================================================================
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: ``,
        padding: ``,
        zIndex: `1`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `2/12`,
        gridRow: `1`,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `2/10`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `2/9`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledSubTitle: subtitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `tertiary`,
        color: `${colors.greyLighter}`,
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
        gridRow: `2`,
        margin: ``,
        padding: ``,
        zIndex: `1`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `2/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `2/10`,
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
        variant: `tertiary`,
        color: `${colors.greyLighter}`,
        position: ``,
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
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      color: `${colors.greyLighter}`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/10`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `7/13`,
        gridRow: `3`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: ``,
      justifyContent: `flex-end`,
      justifySelf: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: `0 auto`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: `unset`,
        padding: ``
      },
      desktop: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
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
    // StyledGridNested
    // ==========================================================================
    StyledGridNested: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(12,1fr)`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,

        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // Styles for nested column text
    // ==========================================================================
    // ==========================================================================
    // StyledGridItem
    // ==========================================================================
    StyledGridItem: {
      display: `grid`,
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(6,1fr)`,
      after: {},
      before: {},
      mobile: {
        gridColumn: `span 12`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      tablet: {
        gridColumn: `span 6`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      desktop: {
        gridColumn: `span 3`,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: ``,
        rowGap: ``,
        after: {},
        before: {}
      }
    },
    // ==========================================================================
    // StyledImageItem
    // ==========================================================================
    StyledImageItem: {
      mobile: {
        gridColumn: `span 6`,
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
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: `crop`,
        width: 400,
        height: 400,
        cropWidth: 400,
        cropHeight: 400
      }
    },
    // ==========================================================================
    // StyledSubTitleWrapItem
    // ==========================================================================
    StyledSubTitleWrapItem: {
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `10px 0 10px 0`,
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
        margin: `13px 0 13px 0`,
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
        margin: `13px 0 0 0`,
        padding: ``
      },
      // StyledSubTitleItem: subtitle
      // ==========================================================================
      StyledSubTitleItem: {
        variant: `quinary`,
        color: `${colors.white}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledHeadingWrapItem
    // ==========================================================================
    StyledHeadingWrapItem: {
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `10px 0 10px 0`,
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
        margin: `13px 0 13px 0`,
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
      // StyledHeadingItem: title
      // ==========================================================================
      StyledHeadingItem: {
        variant: `secondary`,
        color: `${colors.white}`,
        mobile: {
          margin: `0`
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
    // StyledArticleItem
    // ==========================================================================
    StyledArticleItem: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        gridColumn: `span 6`,
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
    // StyledCtaNavWrapItem
    // ==========================================================================
    StyledCtaNavWrapItem: {
      display: ``,
      justifyContent: ``,
      mobile: {
        gridColumn: `span 6`,
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
      // StyledCtaNavItem
      // ==========================================================================
      StyledCtaNavItem: {
        variant: `default`,
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
export { TextImgSection };
