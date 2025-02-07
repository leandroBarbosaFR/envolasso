// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Toast
// ==========================================================================
export type Toast = {
  // ==========================================================================
  // StyledButton
  // ==========================================================================
  StyledButton: {
    all: string;
    position: string;
    top: string;
    left: string;
    transform: string;
    background: string;
    border: string;
    borderRadius: string;
    width: string;
    height: string;
    display: string;
    justifyContent: string;
    alignItems: string;
    mobile: {
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    mobileLarge: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    tablet: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    desktop: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    widescreen: {
      border?: string;
      borderTop?: string;
      borderRight?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRadius?: string;
    };
    buttonSvg: {
      fill: string;
      height: string;
      width: string;
    };
  };
  // ==========================================================================
  // StyledContent
  // ==========================================================================
  StyledContent: {
    overflow: string;
    width: string;
    height: string;
    position: string;
    padding: string;
    background: string;
    borderRadius: string;
    mobile: {
      position: string;
    };
    mobileLarge: {
      position: string;
    };
    tablet: {
      position: string;
    };
    desktop: {
      position: string;
    };
    widescreen: {
      position: string;
    };
  };
  // ==========================================================================
  // StyledToastDescription
  // ==========================================================================
  StyledToastDescription: {
    height: string;
    display: string;
    alignItems: string;
    StyledDescription: {
      textTransform: string;
      color: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontWeight: string;
    };
  };
  // ==========================================================================
  // StyledToastList
  // ==========================================================================
  StyledToastList: {
    zIndex: string;
    position: string;
    bottom: string;
    right: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
  // ==========================================================================
  // StyledRoot
  // ==========================================================================
  StyledRoot: {
    background: string;
    margin: string;
    width: string;
    position: string;
    height: string;
    dataStateOpen: {
      animation: string;
    };
    dataStateClosed: {
      animation: string;
    };
    dataSwipeMove: {
      transform: string;
    };
    dataSwipeCancel: {
      transform: string;
      transition: string;
    };
    dataSwipeEnd: {
      animation: string;
    };
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
};

export type ToastTheme = Record<layoutVariant, Toast>;
