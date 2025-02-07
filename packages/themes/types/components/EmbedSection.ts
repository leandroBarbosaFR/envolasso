// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// EmbedSection:
// ==========================================================================
export type EmbedSection = {
  // ==========================================================================
  // StyledSection (Section)
  // ==========================================================================
  StyledSection: {
    background: string;
    position: string;
    img: {
      objectFit: string;
    };
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
  };
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    position: string;
    zIndex: string;
    color: string;
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
        height: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        height: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        height: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        height: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        height: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
  };
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledGrid: {
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
  // StyledSubTitleWrap
  // ==========================================================================
  StyledSubTitleWrap: {
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
    // StyledSubTitle: subtitle
    // ==========================================================================
    StyledSubTitle: {
      color?: string;
      variant: string;
      mobile: {
        textAlign?: string;
        margin: string;
      };
      mobileLarge: {
        textAlign?: string;
        margin: string;
      };
      tablet: {
        textAlign?: string;
        margin: string;
      };
      desktop: {
        textAlign?: string;
        margin: string;
      };
      widescreen: {
        textAlign?: string;
        margin: string;
      };
    };
  };
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
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
    // StyledHeading: title
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color: string;
      mobile: {
        textAlign?: string;
        margin: string;
      };
      mobileLarge: {
        textAlign?: string;
        margin: string;
      };
      tablet: {
        textAlign?: string;
        margin: string;
      };
      desktop: {
        textAlign?: string;
        margin: string;
      };
      widescreen: {
        textAlign?: string;
        margin: string;
      };
    };
  };
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color: string;
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
  // StyledMediaWrapper
  // ==========================================================================
  StyledMediaWrapper: {
    position: string;
    top: string;
    left: string;
    width: string;
    height: string;
    minHeight: string;
    minWidth: string;
    zIndex: string;
    pointerEvents: string;
    overflow: string;
    backgroundRepeat: string;
    backgroundAttachment: string;
    backgroundSize: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      minHeight: string;
      minWidth: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      minHeight: string;
      minWidth: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      minHeight: string;
      minWidth: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      minHeight: string;
      minWidth: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
      minHeight: string;
      minWidth: string;
    };
  };
  // ==========================================================================
  // StyledVideo
  // ==========================================================================
  StyledVideo: {
    width: string;
    height: string;
    minHeight: string;
    minWidth: string;
    position: string;
    top: string;
    left: string;
    transform: string;
    margin: string;
  };
};

export type EmbedSectionTheme = Record<layoutVariant, EmbedSection>;
