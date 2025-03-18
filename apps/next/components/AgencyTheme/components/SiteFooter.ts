import { colors, gridColGap } from '../variables';

const SiteFooter = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Footer Styles
    // ==========================================================================
    overflow: `hidden`,
    position: `relative`,
    zIndex: `1`,
    top: ``,
    bottom: ``,
    left: ``,
    right: ``,
    background: `linear-gradient(90deg, #C9EDFF, #96DDFF)`,
    color: `${colors.black}`,
    mobile: {
      height: ``,
      margin: ``,
      padding: `35px 0 10px`
    },
    mobileLarge: {
      height: ``,
      margin: ``,
      padding: `40px 0 10px`
    },
    tablet: {
      height: ``,
      margin: ``,
      padding: `50px 0 15px`
    },
    desktop: {
      height: ``,
      margin: ``,
      padding: `80px 0 20px`
    },
    widescreen: {
      height: ``,
      margin: ``,
      padding: `100px 0 20px`
    },

    // ==========================================================================
    // StyledCredit
    // ==========================================================================
    StyledCredit: {
      paragraphVariant: `credits`,
      display: `flex`,
      alignItems: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
        textAlign: `center`,
        justifyContent: `center`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        textAlign: ``,
        justifyContent: ``
      },
      tablet: {
        gridColumn: `1/13`,
        gridRow: ``,
        textAlign: `center`,
        justifyContent: ``
      },
      desktop: {
        gridColumn: `5/13`,
        gridRow: `3`,
        textAlign: `right`,
        justifyContent: `flex-end`
      },
      widescreen: {
        gridColumn: `6/13`,
        gridRow: `3`,
        textAlign: ``,
        justifyContent: `flex-end`
      }
    },
    // ==========================================================================
    // StyledFooterContainer
    // ==========================================================================
    StyledFooterContainer: {
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
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledFooterGrid
    // ==========================================================================
    StyledFooterGrid: {
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: `repeat(12, 1fr)`,
      display: `grid`,
      mobile: {
        height: ``,
        colGap: gridColGap.mobile,
        rowGap: `15px`
      },
      mobileLarge: {
        height: ``,
        colGap: gridColGap.mobileLarge,
        rowGap: `10px`
      },
      tablet: {
        height: ``,
        colGap: gridColGap.tablet,
        rowGap: ``
      },
      desktop: {
        height: ``,
        colGap: gridColGap.desktop,
        rowGap: ``
      },
      widescreen: {
        height: ``,
        colGap: gridColGap.widescreen,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledLogoWrapper
    // ==========================================================================
    StyledLogoWrapper: {
      alignItems: `center`,
      justifyContent: `center`,
      position: `relative`,
      display: `flex`,
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
    // StyledIconButton
    // ==========================================================================
    StyledIconButton: {
      position: `absolute`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // StyledLogoWrap
    // ==========================================================================
    StyledLogoWrap: {
      display: `flex`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: `0 auto`,
        padding: ``,
        justifyContent: `center`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: ``
      },
      desktop: {
        gridColumn: `9/13`,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: `flex-end`
      },
      widescreen: {
        gridColumn: `9/13`,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: ``
      },
      logo: {
        variant: `footerLogo`,
        LogoName: `envolTextLogo`
      }
    },
    // ==========================================================================
    // styledNewsletterFormWrap
    // ==========================================================================
    StyledNewsletterFormWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
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
        gridRow: `1`,
        margin: ``,
        padding: `0 0 123px 0`
      },
      widescreen: {
        gridColumn: ` 1/8`,
        gridRow: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledFooterSocialNav
    // ==========================================================================
    StyledFooterSocialNav: {
      display: `flex`,
      alignItems: `end`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``,
        padding: ``,
        justifyContent: `center`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: ``
      },
      desktop: {
        gridColumn: `7/13`,
        gridRow: `2`,
        margin: ``,
        padding: ``,
        justifyContent: `flex-end`
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        justifyContent: ``
      },
      // Navigaiton styles
      SocialNav: {
        variant: `footer`,
        buttonVariant: `buttonNavIconsFooter`,
        withIcon: true,
        withText: false
      }
    },
    // ==========================================================================
    // StyledFooterLinksLogos
    // ==========================================================================
    StyledFooterLinksLogos: {
      mobile: {
        justifyContent: `center`,
        gridColumn: `1/12`,
        gridRow: `1`,
        display: `flex`,
        alignItems: `center`,
        flexWrap: `wrap`,
        gap: `15px`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        justifyContent: ``,
        gridColumn: ``,
        gridRow: ``,
        display: ``,
        alignItems: ``,
        flexWrap: ``,
        gap: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        justifyContent: ``,
        gridColumn: ``,
        gridRow: ``,
        display: ``,
        alignItems: ``,
        flexWrap: ``,
        gap: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        justifyContent: `flex-start`,
        gridColumn: `1/7`,
        gridRow: ``,
        display: ``,
        alignItems: `center`,
        flexWrap: ``,
        gap: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        justifyContent: ``,
        gridColumn: ``,
        gridRow: ``,
        display: ``,
        alignItems: ``,
        flexWrap: ``,
        gap: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledFooterLinks
    // ==========================================================================
    StyledFooterLinks: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
        display: `flex`,
        alignItems: `center`,
        margin: `0 auto`,
        padding: ``,
        gap: `5px`,
        position: `relative`,
        // After pseudo element
        after: {
          content: ``,
          width: ``,
          height: ``,
          background: ``,
          position: ``,
          bottom: ``,
          top: ``,
          left: ``,
          right: ``
        }
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        display: ``,
        alignItems: ``,
        margin: ``,
        padding: ``,
        gap: ``,
        // After pseudo element
        position: ``,
        after: {}
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        display: ``,
        alignItems: ``,
        margin: ``,
        padding: ``,
        gap: ``,
        // After pseudo element
        position: ``,
        after: {}
      },
      desktop: {
        gridColumn: `1/5`,
        gridRow: `3`,
        display: ``,
        alignItems: `center`,
        margin: `0`,
        padding: ``,
        gap: ``,
        // After pseudo element
        position: ``,
        after: {}
      },
      widescreen: {
        gridColumn: `1/6`,
        gridRow: `3`,
        display: ``,
        alignItems: ``,
        margin: ``,
        padding: ``,
        gap: ``,
        // After pseudo element
        position: ``,
        after: {}
      },
      // Navigaiton styles
      navVariant: `footerNav`
    },
    // ==========================================================================
    // StyledFooterGrid
    // ==========================================================================
    StyledTextColumnGrid: {
      display: `grid`,
      gridTemplateColumns: `repeat(12, 1fr)`,
      withRowGap: true,
      withColGapp: true,
      mobile: {
        gridColumn: `span 12`,
        gridRow: `1`,
        height: ``,
        colGap: gridColGap.mobile,
        rowGap: `15px`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: gridColGap.mobileLarge,
        rowGap: `10px`
      },
      tablet: {
        gridColumn: `span 6`,
        gridRow: ``,
        height: ``,
        colGap: gridColGap.tablet,
        rowGap: `35px`
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: gridColGap.desktop,
        rowGap: `35px`
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        height: ``,
        colGap: gridColGap.widescreen,
        rowGap: `35px`
      }
    },
    // ==========================================================================
    // StyledTextColumn
    // ==========================================================================
    StyledTextColumn: {
      // StyledArticle
      // ==========================================================================
      StyledArticle: {
        variant: `bodyCopyFooter`,
        mobile: {
          gridColumn: `span 12`
        },
        mobileLarge: {
          gridColumn: `span 6`
        },
        tablet: {
          gridColumn: ``
        },
        desktop: {
          gridColumn: `span 6`
        },
        widescreen: {
          gridColumn: ``
        }
      },
      // NavList
      // ==========================================================================
      NavList: {
        layoutVariant: `footerTextColumnNavList`
      }
    }
  }
};
export { SiteFooter };
