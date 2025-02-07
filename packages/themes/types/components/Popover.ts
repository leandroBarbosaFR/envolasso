// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Popover:
// ==========================================================================
export type Popover = {
  // ==========================================================================
  // StyledContent
  // ==========================================================================
  StyledContent: {
    zIndex: string;
    borderRadius: string;
    background: string;
    boxShadow: string;
    animationDuration: string;
    animationTimingFunction: string;
    willChange: string;
    opacity: string;
    position: string;
    right: string;
    transform: string;
    sideOffset: number;
    after: {
      content: string;
      position: string;
      top: string;
      left: string;
      borderWidth: string;
      borderStyle: string;
      borderColor: string;
      opacity: string;
    };
    mobile: {
      padding: string;
      margin: string;
    };
    mobileLarge: {
      padding?: string;
      margin?: string;
    };
    tablet: {
      padding?: string;
      margin?: string;
    };
    desktop: {
      padding?: string;
      margin?: string;
    };
    widescreen: {
      padding?: string;
      margin?: string;
    };
  };
  // ==========================================================================
  // StyledPopoverItem
  // ==========================================================================
  StyledPopoverItem: {
    cursor: string;
    textAlign: string;
    mobile: {};
    mobileLarge: {};
    tablet: {
      padding: string;
    };
    desktop: {
      padding: string;
    };
    widescreen: {
      padding: string;
    };
  };
  // ==========================================================================
  // StyledPopoverOption
  // ==========================================================================
  StyledPopoverOption: {
    color: string;
    textTransform: string;
    mobile: {};
    mobileLarge: {};
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
  };
  // ==========================================================================
  // StyledTriggerWrap
  // ==========================================================================
  StyledTriggerWrap: {
    width: string;
  };
};

export type PopoverTheme = Record<layoutVariant, Popover>;
