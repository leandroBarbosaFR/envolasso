// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Pagination:
// ==========================================================================
export type Pagination = {
  // ==========================================================================
  // AgencyIcons
  // ==========================================================================
  AgencyIcons: {
    layoutVariant: string;
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
  // StyledDots
  // ==========================================================================
  StyledDots: {
    background: string;
    borderRadius: string;
    // Responsive
    mobile: {
      height: string;
      width: string;
    };
    mobileLarge: {
      height: string;
      width: string;
    };
    tablet: {
      height: string;
      width: string;
    };
    desktop: {
      height: string;
      width: string;
    };
    widescreen: {
      height: string;
      width: string;
    };
  };
  // ==========================================================================
  // StyledIconButton
  // ==========================================================================
  StyledIconButton: {
    all: string;
    cursor: string;
    display: string;
    padding: string;
    margin: string;
    border: string;
    borderRadius: string;
    background: string;
    svg: {
      transition: string;
      fill: string;
    };
    hover: {
      svg: {
        opacity: string;
        fill: string;
      };
    };
    disabled: {
      pointerEvents: string;
      svg: {
        opacity: string;
        Ffill: string;
      };
    };
    // Responsive
    mobile: {
      height: string;
      width: string;
      svg: {
        height: string;
        width: string;
      };
    };
    mobileLarge: {
      height: string;
      width: string;
      svg: {
        height: string;
        width: string;
      };
    };
    tablet: {
      height: string;
      width: string;
      svg: {
        height: string;
        width: string;
      };
    };
    desktop: {
      height: string;
      width: string;
      svg: {
        height: string;
        width: string;
      };
    };
    widescreen: {
      height: string;
      width: string;
      svg: {
        height: string;
        width: string;
      };
    };
  };
  // ==========================================================================
  // StyledNav
  // ==========================================================================
  StyledNav: {
    mobile: {
      padding: string;
      margin: string;
    };
    mobileLarge: {
      padding: string;
      margin: string;
    };
    tablet: {
      padding: string;
      margin: string;
    };
    desktop: {
      padding: string;
      margin: string;
    };
    widescreen: {
      padding: string;
      margin: string;
    };
  };
  // ==========================================================================
  // StyledPagination
  // ==========================================================================
  StyledPagination: {
    display: string;
    justifyContent: string;
    alignItems: string;
    mobile: {
      gap: string;
    };
    mobileLarge: {
      gap: string;
    };
    tablet: {
      gap: string;
    };
    desktop: {
      gap: string;
    };
    widescreen: {
      gap: string;
    };
  };
  // ==========================================================================
  // StyledPaginationBtn
  // ==========================================================================
  StyledPaginationBtn: {
    all: string;
    cursor: string;
    textAlign: string;
    display: string;
    padding: string;
    margin: string;
    border: string;
    borderRadius: string;
    color: string;
    background: string;
    transition: string;
    active: {
      color: string;
      background: string;
      border?: string;
    };
    hover: {
      color: string;
      background: string;
      border?: string;
    };
    disabled: {
      pointerEvents: string;
      color: string;
      background: string;
      border?: string;
    };
    // Responsive
    mobile: {
      height: string;
      width: string;
      fontSize: string;
      lineHeight: string;
    };
    mobileLarge: {
      height: string;
      width: string;
      fontSize: string;
      lineHeight: string;
    };
    tablet: {
      height: string;
      width: string;
      fontSize: string;
      lineHeight: string;
    };
    desktop: {
      height: string;
      width: string;
      fontSize: string;
      lineHeight: string;
    };
    widescreen: {
      height: string;
      width: string;
      fontSize: string;
      lineHeight: string;
    };
  };
  // ==========================================================================
  // StyledPaginationItem
  // ==========================================================================
  StyledPaginationItem: {
    display: string;
    justifyContent: string;
    alignItems: string;
    mobile: {
      gap: string;
      height: string;
      width: string;
    };
    mobileLarge: {
      gap: string;
      height: string;
      width: string;
    };
    tablet: {
      gap: string;
      height: string;
      width: string;
    };
    desktop: {
      gap: string;
      height: string;
      width: string;
    };
    widescreen: {
      gap: string;
      height: string;
      width: string;
    };
  };
};

export type PaginationTheme = Record<layoutVariant, Pagination>;
