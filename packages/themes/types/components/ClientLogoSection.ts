// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type ClientLogoSection = {
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledSection: {
    background?: string;
    position?: string;
    mobile: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledFeedContainer
  // ==========================================================================
  StyledContainer: {
    zIndex?: string;
    position?: string;
    color?: string;
    // Props settings
    isFluid: boolean;
    // fluidContainer
    fluidContainer: {
      marginLeft?: string;
      marginRight?: string;
      width?: string;
      maxWidth?: string;
      mobile: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
    // container
    container: {
      marginLeft?: string;
      marginRight?: string;
      mobile: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
  };
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledGrid: {
    display?: string;
    gridTemplateColumns?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    mobile: {
      gridTemplateColumns?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      gridTemplateColumns?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      gridTemplateColumns?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      gridTemplateColumns?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      gridTemplateColumns?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
  };
  // ==========================================================================
  // StyledSubTitle
  // ==========================================================================
  StyledSubTitleWrap: {
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      color?: string;
      mobile: {
        textAlign?: string;
        margin?: string;
      };
      mobileLarge: {
        textAlign?: string;
        margin?: string;
      };
      tablet: {
        textAlign?: string;
        margin?: string;
      };
      desktop: {
        textAlign?: string;
        margin?: string;
      };
      widescreen: {
        textAlign?: string;
        margin?: string;
      };
      span: {
        color?: string;
      };
    };
  };
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color?: string;
      position?: string;
      overflow?: string;
      mobile: {
        textAlign?: string;
        margin?: string;
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      mobileLarge: {
        textAlign?: string;
        margin?: string;
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      tablet: {
        textAlign?: string;
        margin?: string;
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      desktop: {
        textAlign?: string;
        margin?: string;
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      widescreen: {
        textAlign?: string;
        margin?: string;
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      span: {
        color?: string;
      };
    };
  };
  // ==========================================================================
  // StyledTextImgArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color?: string;
    textAlign?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledFeedGrid
  // ==========================================================================
  StyledGridNested: {
    display?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    mobile: {
      gridTemplateColumns?: string;
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      gridTemplateColumns?: string;
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      gridTemplateColumns?: string;
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      gridTemplateColumns?: string;
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      gridTemplateColumns?: string;
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
  };
  // ==========================================================================
  // StyledClientLogoHeading
  // ==========================================================================
  StyledClientLogoItem: {
    filter?: string;
    opacity?: string;
    display?: string;
    alignItems?: string;
    ImageTag: {
      layoutVariant: string;
      fit?: string;
      fill: boolean;
      width: number;
      height: number;
      cropWidth: number;
      cropHeight: number;
    };
    mobile: {
      gridColumn?: string;
      margin?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      margin?: string;
    };
    tablet: {
      gridColumn?: string;
      margin?: string;
    };
    desktop: {
      gridColumn?: string;
      margin?: string;
    };
    widescreen: {
      gridColumn?: string;
      margin?: string;
    };
  };
};
export type ClientLogoSectionTheme = Record<layoutVariant, ClientLogoSection>;
