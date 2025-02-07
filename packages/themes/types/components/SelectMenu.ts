// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type SelectMenu = {
  // ==========================================================================
  // AgencyIcons
  // ==========================================================================
  AgencyIcons: {
    layoutVariant: string;
  };
  // ==========================================================================
  // StyledTrigger
  // ==========================================================================
  StyledTrigger: {
    all: string;
  };
  // ==========================================================================
  // StyledTriggerWrap
  // ==========================================================================
  StyledTriggerWrap: {
    textTransform: string;
    cursor: string;
    display: string;
    alignItems: string;
    width: string;
    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      gap: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding?: string;
      margin?: string;
      background: string;
      colorActive: string;
      color: string;
      borderHover: string;
      colorHover: string;
      backgroundHover: string;
    };
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      gap: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding?: string;
      margin?: string;
      background?: string;
      colorActive?: string;
      color?: string;
      borderHover?: string;
      colorHover?: string;
      backgroundHover?: string;
    };
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      gap: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding?: string;
      margin?: string;
      background?: string;
      colorActive?: string;
      color?: string;
      borderHover?: string;
      colorHover?: string;
      backgroundHover?: string;
    };
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      gap: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding?: string;
      margin?: string;
      background?: string;
      colorActive?: string;
      color?: string;
      borderHover?: string;
      colorHover?: string;
      backgroundHover?: string;
    };
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      gap: string;
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding?: string;
      margin?: string;
      background?: string;
      colorActive?: string;
      color?: string;
      borderHover?: string;
      colorHover?: string;
      backgroundHover?: string;
    };
  };
  // ==========================================================================
  // StyledSelectIcon
  // ==========================================================================
  StyledSelectIcon: {
    height: string;
    width: string;
    display: string;
    mobile: {
      svg: {
        fill: string;
        height: string;
        width: string;
        display: string;
      };
    };
    mobileLarge: {
      svg: {
        fill: string;
        height: string;
        width: string;
      };
    };
    tablet: {
      svg: {
        fill: string;
        height: string;
        width: string;
      };
    };
    desktop: {
      svg: {
        fill: string;
        height: string;
        width: string;
      };
    };
    widescreen: {
      svg: {
        fill: string;
        height: string;
        width: string;
      };
    };
  };
  // ==========================================================================
  // styledContent
  // ==========================================================================
  StyledContent: {
    overflow: string;
    background: string;
    boxShadow: string;
    animationDuration: string;
    animationTimingFunction: string;
    willChange: string;
    open: {
      animation: string;
    };
    mobile: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding: string;
      margin: string;
    };
    mobileLarge: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding: string;
      margin: string;
    };
    tablet: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding: string;
      margin: string;
    };
    desktop: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding: string;
      margin: string;
    };
    widescreen: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
      padding: string;
      margin: string;
    };
  };
  // ==========================================================================
  // StyledItem
  // ==========================================================================
  StyledItem: {
    textTransform: string;
    cursor: string;
    color: string;
    colorActive: string;
    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };

    dataDisabled: {
      color: string;
      pointerEvents: string;
    };
    dataHighlighted: {
      color: string;
    };
  };
  // ==========================================================================
  // StyledPortal
  // ==========================================================================
  StyledPortal: {
    zIndex: number;
  };
  // ==========================================================================
  // StyledSelectMenu
  // ==========================================================================
  StyledSelectMenu: {};
  // ==========================================================================
  // styleSelectValue
  // ==========================================================================
  StyleSelectValue: {};
  // ==========================================================================
  // StyledSelectViewport
  // ==========================================================================
  StyledSelectViewport: {
    display: string;
    flexDirection: string;

    mobile: {
      padding: string;
      gap: string;
    };
    mobileLarge: {
      padding: string;
      gap: string;
    };
    tablet: {
      padding: string;
      gap: string;
    };
    desktop: {
      padding: string;
      gap: string;
    };
    widescreen: {
      padding: string;
      gap: string;
    };
  };
};

export type SelectMenuTheme = Record<layoutVariant, SelectMenu>;
