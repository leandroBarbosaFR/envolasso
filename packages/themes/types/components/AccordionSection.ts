// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// AccordionSection:
// ==========================================================================
export type AccordionSection = {
  // ==========================================================================
  // config
  // ==========================================================================
  config: {
    isAccordionGroupVisible: boolean;
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
  // ==========================================================================
  // StyledFeedContainer
  // ==========================================================================
  StyledContainer: {
    position: string;
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
      span: {
        color?: string;
      };
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
    };
  };
  // ==========================================================================
  // StyledBodycopyWrap
  // ==========================================================================
  StyledBodycopyWrap: {
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
    // StyledBodycopy
    // ==========================================================================
    StyledBodycopy: {
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
    };
  };
  // ==========================================================================
  // StyledAccordionGroup
  // ==========================================================================
  StyledAccordionGroup: {
    height: string;
    display: string;
    flexWrap: string;
    mobile: {
      gridColumn: string;
      margin: string;
      gap: string;
    };
    mobileLarge: {
      margin: string;
    };
    tablet: {
      gridColumn: string;
      margin: string;
    };
    desktop: {
      gridColumn: string;
    };
    widescreen: {
      gridColumn: string;
    };
    Button: {
      variant: string;
    };
  };
  // ==========================================================================
  // StyledAccordion
  // ==========================================================================
  StyledAccordion: {
    AccordionItem: {
      variant: string;
      buttonVariant: string;
      withIcon: boolean;
      withText: boolean;
      iconName: string;
    };
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
  // StyledAccordionItemBodyWrap
  // ==========================================================================
  StyledAccordionItemBodyWrap: {
    variant: string;
    color?: string;
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
};

export type AccordionSectionTheme = Record<layoutVariant, AccordionSection>;
