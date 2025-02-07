// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// SiteFooter:
// ==========================================================================
export type SiteFooter = {
  // ==========================================================================
  // Footer Styles
  // ==========================================================================
  overflow: string;
  position: string;
  zIndex: string;
  top: string;
  bottom: string;
  left: string;
  right: string;
  background: string;
  color: string;
  mobile: {
    height: string;
    margin: string;
    padding: string;
  };
  mobileLarge: {
    height: string;
    margin: string;
    padding: string;
  };
  tablet: {
    height: string;
    margin: string;
    padding: string;
  };
  desktop: {
    height: string;
    margin: string;
    padding: string;
  };
  widescreen: {
    height: string;
    margin: string;
    padding: string;
  };
  // ==========================================================================
  // StyledCredit
  // ==========================================================================
  StyledCredit: {
    paragraphVariant: string;
    display: string;
    alignItems: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      textAlign: string;
      justifyContent: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      textAlign: string;
      justifyContent: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      textAlign: string;
      justifyContent: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      textAlign: string;
      justifyContent: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      textAlign: string;
      justifyContent: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
  };
  // ==========================================================================
  // StyledFooterContainer
  // ==========================================================================
  StyledFooterContainer: {
    isFluid: boolean;
    // Fluid Container
    fluidContainer: {
      marginLeft: string;
      marginRight: string;
      width: string;
      maxWidth: string;
      mobile: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
    // Container
    container: {
      marginLeft: string;
      marginRight: string;
      mobile: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
  };
  // ==========================================================================
  // StyledFooterGrid
  // ==========================================================================
  StyledFooterGrid: {
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns: string;
    display: string;
    mobile: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    mobileLarge: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    tablet: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    desktop: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    widescreen: {
      height: string;
      colGap: string;
      rowGap: string;
    };
  };
  // ==========================================================================
  // StyledFooterLinks
  // ==========================================================================
  StyledFooterLinks: {
    mobile: {
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      margin: string;
      padding: string;
      gap: string;
      position: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      // After pseudo element
      after: {
        content: string;
        width: string;
        height: string;
        background: string;
        position: string;
        bottom: string;
        top: string;
        left: string;
        right: string;
      };
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      margin: string;
      padding: string;
      gap: string;
      position?: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      // After pseudo element
      after: {
        content?: string;
        width?: string;
        height?: string;
        background?: string;
        position?: string;
        bottom?: string;
        top?: string;
        left?: string;
        right?: string;
      };
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      margin: string;
      padding: string;
      gap: string;
      position?: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      // After pseudo element
      after: {
        content?: string;
        width?: string;
        height?: string;
        background?: string;
        position?: string;
        bottom?: string;
        top?: string;
        left?: string;
        right?: string;
      };
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      margin: string;
      padding: string;
      gap: string;
      position?: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      // After pseudo element
      after: {
        content?: string;
        width?: string;
        height?: string;
        background?: string;
        position?: string;
        bottom?: string;
        top?: string;
        left?: string;
        right?: string;
      };
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      margin: string;
      padding: string;
      gap: string;
      position?: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      // After pseudo element
      after: {
        content?: string;
        width?: string;
        height?: string;
        background?: string;
        position?: string;
        bottom?: string;
        top?: string;
        left?: string;
        right?: string;
      };
    };
    // Navigaiton styles
    navVariant: string;
  };
  // ==========================================================================
  // StyledFooterLinksLogos
  // ==========================================================================
  StyledFooterLinksLogos: {
    mobile: {
      justifyContent: string;
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      flexWrap: string;
      gap: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      justifyContent: string;
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      flexWrap: string;
      gap: string;
      margin: string;
      padding: string;
    };
    tablet: {
      justifyContent: string;
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      flexWrap: string;
      gap: string;
      margin: string;
      padding: string;
    };
    desktop: {
      justifyContent: string;
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      flexWrap: string;
      gap: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      justifyContent: string;
      gridColumn: string;
      gridRow: string;
      display: string;
      alignItems: string;
      flexWrap: string;
      gap: string;
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledFooterSocialNav
  // ==========================================================================
  StyledFooterSocialNav: {
    display: string;
    alignItems: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    // Navigaiton styles
    SocialNav: {
      variant: string;
      buttonVariant: string;
      withIcon: boolean;
      withText: boolean;
    };
  };
  // ==========================================================================
  // StyledLogoWrapper
  // ==========================================================================
  StyledLogoWrapper: {
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    position?: string;
    mobile: {
      gridColumn?: string;
    };
    mobileLarge: {
      gridColumn?: string;
    };
    tablet: {
      gridColumn?: string;
    };
    desktop: {
      gridColumn?: string;
    };
    widescreen: {
      gridColumn?: string;
    };
  };
  // ==========================================================================
  // StyledIconButton
  // ==========================================================================
  StyledIconButton: {
    position?: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
  // ==========================================================================
  // StyledLogoWrap
  // ==========================================================================
  StyledLogoWrap: {
    display: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      justifyContent: string;
    };
    logo: {
      variant: string;
      LogoName: string;
    };
  };
  // ==========================================================================
  // styledNewsletterFormWrap
  // ==========================================================================
  StyledNewsletterFormWrap: {
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledFooterGrid
  // ==========================================================================
  StyledTextColumnGrid: {
    display: string;
    gridTemplateColumns: string;
    withRowGap: boolean;
    withColGapp: boolean;
    mobile: {
      gridColumn: string;
      gridRow: string;
      height: string;
      colGap: string;
      rowGap: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      height: string;
      colGap: string;
      rowGap: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      height: string;
      colGap: string;
      rowGap: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      height: string;
      colGap: string;
      rowGap: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      height: string;
      colGap: string;
      rowGap: string;
    };
  };
  // ==========================================================================
  // StyledTextColumn
  // ==========================================================================
  StyledTextColumn: {
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: string;
      mobile: {
        gridColumn: string;
      };
      mobileLarge: {
        gridColumn: string;
      };
      tablet: {
        gridColumn: string;
      };
      desktop: {
        gridColumn: string;
      };
      widescreen: {
        gridColumn: string;
      };
    };
    // NavList
    // ==========================================================================
    NavList: {
      layoutVariant: string;
    };
  };
};

export type SiteFooterTheme = Record<layoutVariant, SiteFooter>;
