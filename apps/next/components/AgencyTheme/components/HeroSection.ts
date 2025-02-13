import { colors } from '../variables/';
const HeroSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      display: `flex`,
      alignItems: `flex-end`,
      position: `relative`,
      overflow: `hidden`,
      background: `${colors.black}`,
      mobile: {
        height: `100vh`,
        minHeight: ``,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      mobileLarge: {
        height: ``,
        minHeight: ``,
        margin: ``,
        padding: ``,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      tablet: {
        height: `100vh`,
        minHeight: `500px`,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      desktop: {
        height: ``,
        minHeight: ``,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      widescreen: {
        height: ``,
        minHeight: ``,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      // Before
      // ==========================================================================
      Before: {
        zIndex: `0`,
        content: ``,
        height: `0`,
        width: `0`,
        position: ``,
        top: `0`,
        bottom: `0`,
        left: `0`,
        pointerEvents: `none`,
        background: ``
      },
      After: {
        zIndex: `1`,
        content: `""`,
        height: `100%`,
        width: `100%`,
        position: `absolute`,
        bottom: `0`,
        right: `0`,
        pointerEvents: `none`,
        background: `rgba(0,0,0, 0.3)`
      }
    },
    // ==========================================================================
    // StyledArrowDown
    // ==========================================================================
    StyledArrowDown: {
      zIndex: `2`,
      position: `absolute`,
      isArrowVisible: true,
      mobile: {
        bottom: `50px`,
        left: `50%`,
        transform: `translateX(-50%)`
      },
      mobileLarge: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      tablet: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      desktop: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      widescreen: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      Button: {
        variant: `buttonIconPrimaryWhite`,
        withText: false,
        withIcon: true,
        iconName: `mouse`
      }
    },
    // ==========================================================================
    // Static Carousel
    // ==========================================================================
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: `absolute`,
      zIndex: ``,
      mobile: {
        height: `100%`,
        width: `100%`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        img: {
          objectFit: `cover`
        }
      },
      mobileLarge: {
        height: `100%`,
        width: `100%`,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      },
      tablet: {
        height: ``,
        width: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      },
      desktop: {
        height: ``,
        width: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      },
      widescreen: {
        height: ``,
        width: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      }
    },
    // ==========================================================================
    // StyledMediaWrapper - Video
    // ==========================================================================
    StyledMediaWrapper: {
      position: `absolute`,
      zIndex: `0`,
      height: `100%`,
      width: `100%`,
      top: `0`,
      bottom: `0`,
      right: `0`,
      left: `0`,
      pointerEvents: `none`,
      overflow: `hidden`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `initial`,
      backgroundPosition: `center`,
      backgroundSize: `cover`
    },
    // ==========================================================================
    // StyledVideo
    // ==========================================================================
    StyledVideo: {
      width: `100vw`,
      height: `66.7vw`,
      minHeight: `100vh`,
      minWidth: `150vh`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    },
    // ==========================================================================
    // Carousel
    // ==========================================================================
    // ==========================================================================
    // FadeCarousel
    // ==========================================================================

    // ==========================================================================
    // Content overlay
    // ==========================================================================
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      position: `absolute`,
      color: `inherit`,
      zIndex: `2`,
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
      withRowGap: true,
      withColGapp: false,
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
      textAlign: ``,
      mobile: {
        gridColumn: `1/12`,
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
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `3/11`,
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
        variant: `primaryHero`,
        color: `${colors.transparent}`,
        backgroundClip: `text !important`,
        background: `linear-gradient(180deg, #FFFFFF, #FFFFFF)`,
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
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      display: 'none',
      textAlign: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        padding: `30px 0 30px 0`
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
        padding: `30px 0 50px 0`
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: `0`,
        padding: ``
      },
      // StyledHeading: title
      // ==========================================================================
      StyledHeading: {
        variant: `primarySemiBold`,
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
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      color: `${colors.white}`,
      textAlign: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `2/8`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `2/8`,
        gridRow: ``,
        margin: `0`,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: ``,
      justifyContent: ``,
      mobile: {
        gridColumn: `5/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 auto`,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: `0`,
        padding: ``
      },
      widescreen: {
        gridColumn: `6/13`,
        gridRow: ``,
        margin: `0`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledSearchBarWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
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
        gridColumn: `1/10`,
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
        gridColumn: `1/8`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      SearchBar: {
        layoutVariant: `default`,
        placeholder: `Search for keyword, genre, mood, speed here...`,
        isPredictiveSearch: true,
        isCustomSearchResult: false,
        isSelectMenuRedirect: false
      },
      // ==========================================================================
      // SearchBarDialog
      // ==========================================================================
      SearchBarDialog: {
        layoutVariant: `SearchBarModal`,
        SearchBar: {
          layoutVariant: `defaultSearchBarDialogDraw`,
          placeholder: `Search for keyword, genre, mood, speed here...`,
          isPredictiveSearch: true,
          isCustomSearchResult: false,
          isSelectMenuRedirect: false
        }
      }
    },
    // ==========================================================================
    // Carousel: SlideCarousel
    // ==========================================================================
    SlideCarousel: {
      layoutVariant: `heroCarousel`,
      withLoop: true,
      withArrowButton: false,
      withThumbnails: true,
      autoSlide: true
    },
    // ==========================================================================
    // Carousel: FadeCarousel
    // ==========================================================================
    FadeCarousel: {
      layoutVariant: `heroCarousel`,
      withLoop: true,
      withArrowButton: false,
      withThumbnails: true,
      autoSlide: true
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  defaultWhite: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      display: `flex`,
      alignItems: `flex-end`,
      position: `relative`,
      overflow: `hidden`,
      background: `${colors.white}`,
      mobile: {
        height: `100vh`,
        minHeight: ``,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      mobileLarge: {
        height: ``,
        minHeight: ``,
        margin: ``,
        padding: ``,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      tablet: {
        height: `100vh`,
        minHeight: `500px`,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      desktop: {
        height: ``,
        minHeight: ``,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      widescreen: {
        height: ``,
        minHeight: ``,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      // Before
      // ==========================================================================
      Before: {
        zIndex: `0`,
        content: ``,
        height: `0`,
        width: `0`,
        position: ``,
        top: `0`,
        bottom: `0`,
        left: `0`,
        pointerEvents: `none`,
        background: ``
      },
      After: {
        zIndex: `1`,
        content: `""`,
        height: `200px`,
        width: `100%`,
        position: `absolute`,
        bottom: `0`,
        right: `0`,
        pointerEvents: `none`,
        background: colors.black
      }
    },
    // ==========================================================================
    // StyledArrowDown
    // ==========================================================================
    StyledArrowDown: {
      zIndex: `2`,
      position: `absolute`,
      isArrowVisible: true,
      mobile: {
        bottom: `0px`,
        left: `50%`,
        transform: `translateX(-50%)`
      },
      mobileLarge: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      tablet: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      desktop: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      widescreen: {
        bottom: ``,
        left: ``,
        transform: ``
      },
      Button: {
        variant: `buttonIconPrimaryWhite`,
        withText: false,
        withIcon: true,
        iconName: `AgencyLogoIcon`
      }
    },
    // ==========================================================================
    // Static Carousel
    // ==========================================================================
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: `absolute`,
      zIndex: ``,
      mobile: {
        height: `100%`,
        width: `100%`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        img: {
          objectFit: `cover`
        }
      },
      mobileLarge: {
        height: `100%`,
        width: `100%`,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      },
      tablet: {
        height: ``,
        width: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      },
      desktop: {
        height: ``,
        width: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      },
      widescreen: {
        height: ``,
        width: ``,
        top: ``,
        bottom: ``,
        right: ``,
        left: ``,
        img: {
          objectFit: ``
        }
      }
    },
    // ==========================================================================
    // StyledMediaWrapper - Video
    // ==========================================================================
    StyledMediaWrapper: {
      position: `absolute`,
      zIndex: `0`,
      height: `100%`,
      width: `100%`,
      top: `0`,
      bottom: `0`,
      right: `0`,
      left: `0`,
      pointerEvents: `none`,
      overflow: `hidden`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `initial`,
      backgroundPosition: `center`,
      backgroundSize: `cover`
    },
    // ==========================================================================
    // StyledVideo
    // ==========================================================================
    StyledVideo: {
      width: `100vw`,
      height: `66.7vw`,
      minHeight: `100vh`,
      minWidth: `150vh`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    },
    // ==========================================================================
    // Carousel
    // ==========================================================================
    // ==========================================================================
    // FadeCarousel
    // ==========================================================================

    // ==========================================================================
    // Content overlay
    // ==========================================================================
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      position: `absolute`,
      color: `inherit`,
      zIndex: `2`,
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
      withColGapp: false,
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
      textAlign: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: `0 auto`,
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
      // StyledSubTitle: subtitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `primaryXl`,
        color: `${colors.black}`,
        // backgroundClip: `text !important`,
        // background: `linear-gradient(90deg, #ecf3ff, #ffe3ee)`,
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
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      textAlign: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: `0 auto`,
        padding: `30px 0 30px 0`
      },
      mobileLarge: {
        gridColumn: `1/13`,
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
        padding: `30px 0 50px 0`
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
        variant: `primarySemiBold`,
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
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      color: `${colors.black}`,
      textAlign: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
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
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `1/13`,
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
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
        margin: `0 auto`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledSearchBarWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
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
        gridColumn: `1/10`,
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
        gridColumn: `1/8`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      SearchBar: {
        layoutVariant: `default`,
        placeholder: `Search for keyword, genre, mood, speed here...`,
        isPredictiveSearch: true,
        isCustomSearchResult: false,
        isSelectMenuRedirect: false
      },
      // ==========================================================================
      // SearchBarDialog
      // ==========================================================================
      SearchBarDialog: {
        layoutVariant: `SearchBarModal`,
        SearchBar: {
          layoutVariant: `defaultSearchBarDialogDraw`,
          placeholder: `Search for keyword, genre, mood, speed here...`,
          isPredictiveSearch: true,
          isCustomSearchResult: false,
          isSelectMenuRedirect: false
        }
      }
    },
    // ==========================================================================
    // Carousel: SlideCarousel
    // ==========================================================================
    SlideCarousel: {
      layoutVariant: `heroCarousel`,
      withLoop: true,
      withArrowButton: false,
      withThumbnails: true,
      autoSlide: true
    },
    // ==========================================================================
    // Carousel: FadeCarousel
    // ==========================================================================
    FadeCarousel: {
      layoutVariant: `heroCarousel`,
      withLoop: true,
      withArrowButton: false,
      withThumbnails: true,
      autoSlide: true
    }
  }
};
export { HeroSection };
