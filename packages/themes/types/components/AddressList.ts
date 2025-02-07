// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// AddressList:
// ==========================================================================
export type AddressList = {
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
  // ==========================================================================
  // StyledFeedContainer
  // ==========================================================================
  StyledContainer: {
    position?: string;
    color?: string;
    isFluid: boolean;
    // Fluid Container
    fluidContainer: {
      marginLeft: string;
      marginRight: string;
      width: string;
      maxWidth: string;
      mobile: {
        height?: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        height?: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        height?: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        height?: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        height?: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
    // Container
    container: {
      marginLeft: string;
      marginRight: string;
      mobile: {
        height?: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        height?: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        height?: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        height?: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        height?: string;
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
    gridTemplateColumns: string;
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
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color: string;
      mobile: {
        margin: string;
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
      span: {
        color: string;
      };
    };
  };
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color: string;
    lastOfType: {
      margin: string;
      padding: string;
    };
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
  };
  // ==========================================================================
  // StyledBodycopy
  // ==========================================================================
  StyledAddressList: {
    display: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns: string;
    mobile: {
      height?: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      // nested grid
      colGap: string;
      rowGap: string;
    };
    mobileLarge: {
      height?: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      // nested grid
      colGap: string;
      rowGap: string;
    };
    tablet: {
      height?: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      // nested grid
      colGap: string;
      rowGap: string;
    };
    desktop: {
      height?: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      // nested grid
      colGap: string;
      rowGap: string;
    };
    widescreen: {
      height?: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      // nested grid
      colGap: string;
      rowGap: string;
    };
  };
  // ==========================================================================
  // StyledAddress
  // ==========================================================================
  StyledAddress: {
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
  // StyledHeading
  // ==========================================================================
  StyledAddressTitle: {
    variant: string;
    color: string;
    mobile: {
      margin: string;
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
    span: {
      color: string;
    };
  };
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledAddressArticle: {
    variant: string;
    color: string;
    lastOfType: {
      margin: string;
      padding: string;
    };
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
  };
};

export type AddressListTheme = Record<layoutVariant, AddressList>;
