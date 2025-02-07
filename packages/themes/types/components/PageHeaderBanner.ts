// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | 'artistProfile' | 'composerProfile' | string;

// ==========================================================================
// PageHeaderBanner:
// ==========================================================================
export type PageHeaderBanner = {
  OptsSharePage: {
    layoutVariant: string;
  };
  // ==========================================================================
  // StyledPageHeaderBanner (Section)
  // ==========================================================================
  StyledPageHeaderSection: {
    position?: string;
    background?: string;
    mobile: {
      minHeight?: string;
      height?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      minHeight?: string;
      height?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      minHeight?: string;
      height?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      minHeight?: string;
      height?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      minHeight?: string;
      height?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledPageHeaderContainer
  // ==========================================================================
  StyledPageHeaderContainer: {
    position?: string;
    zIndex?: string;
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
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    position?: string;
    zIndex?: string;
    overflow?: string;
    mobile: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    mobileLarge: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    tablet: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    desktop: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    widescreen: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    // After
    // ==========================================================================
    after: {
      content?: string;
      position?: string;
      zIndex?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      mixBlendMode?: string;
      background?: string;
    };
    ImageTag: {
      layoutVariant: string;
      fill: boolean;
      priority: boolean;
      placeholder: string;
    };
  };
  // ==========================================================================
  // StyledPageHeaderGrid
  // ==========================================================================
  StyledPageHeaderGrid: {
    position?: string;
    display?: string;
    gridTemplateColumns?: string;
    withRowGap?: boolean;
    withColGapp?: boolean;
    mobile: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    StyledIconNav: {
      position?: string;
      zIndex?: string;
      display?: string;
      flexWrap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      gap?: string;
      mobile: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      mobileLarge: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      tablet: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      desktop: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      widescreen: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      heartButton: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
      };
      surpriseMeButton: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
      };
      cameraButton: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
      };
    };
  };
};

export type PageHeaderBannerTheme = Record<layoutVariant, PageHeaderBanner>;
