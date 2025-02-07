// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// BlogIndex:
// ==========================================================================
export type BlogIndex = {
  // ==========================================================================
  // StyledBlogFeedItem
  // ==========================================================================
  StyledBlogFeedItem: {
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
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    color: string;
    isFluid: boolean;
    // Fluid Container
    fluidContainer: {
      marginLeft: string;
      marginRight: string;
      width: string;
      maxWidth: string;
      mobile: {
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
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
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
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
    display: string;
    withRowGap: boolean;
    withColGapp: boolean;
    alignItems: string;
    zIndex?: number;
    mobile: {
      gridTemplateColumns: string;
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      gridTemplateColumns: string;
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    tablet: {
      gridTemplateColumns: string;
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    desktop: {
      gridTemplateColumns: string;
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      gridTemplateColumns: string;
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledNotFound
  // ==========================================================================
  StyledNotFound: {
    variant: string;
    color: string;
    margin: string;
    mobile: {
      margin: string;
      gridColumn: string;
    };
    mobileLarge: {
      margin: string;
    };
    tablet: {
      margin: string;
    };
    desktop: {
      margin: string;
    };
    widescreen: {
      margin: string;
    };
  };
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledSection: {
    background: string;
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
};

export type BlogIndexTheme = Record<layoutVariant, BlogIndex>;
