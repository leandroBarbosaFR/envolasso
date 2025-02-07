// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// AccordionItem:
// ==========================================================================
export type AccordionItem = {
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledAccordionItem: {
    background: string;
    mobile: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    mobileLarge: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    tablet: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    desktop: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    widescreen: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
  };
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledTriggerHeader: {
    display: string;
    alignItems: string;
    justifyContent: string;
    color: string;
    fontFamily: string;
    fontWeight: number;
    mobile: {
      textAlign: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    mobileLarge: {
      textAlign: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    tablet: {
      textAlign: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    desktop: {
      textAlign: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    widescreen: {
      textAlign: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
  };
  // ==========================================================================
  // StyledContent
  // ==========================================================================
  StyledContent: {
    animationDuration: string;
    animationTimingFunction: string;
    willChange: string;
    open: {
      animation: string;
    };
    mobile: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    mobileLarge: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    tablet: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    desktop: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
    widescreen: {
      height: string;
      margin: string;
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
    };
  };
};

export type AccordionItemTheme = Record<layoutVariant, AccordionItem>;
