// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// ToolTip:
// ==========================================================================
export type ToolTip = {
  // ==========================================================================
  // StyledToolTipArrow
  // ==========================================================================
  StyledToolTipArrow: {
    fill: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
  // ==========================================================================
  // StyledToolTipContent
  // ==========================================================================
  StyledToolTipContent: {
    zIndex: string;
    borderRadius: string;
    padding: string;
    fontSize: string;
    color: string;
    background: string;
    boxShadow: string;
    userSelect: string;
    animationDuration: string;
    animationTimingFunction: string;
    willChange: string;
    textTransform: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
};

export type ToolTipTheme = Record<layoutVariant, ToolTip>;
