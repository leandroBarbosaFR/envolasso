// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// FormInputMixed:
// ==========================================================================
export type FormInputMixed = {
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledLabel: {
    position?: string;
    fontColor: string;
    fontFamily: string;
    fontWeight: number;
    textTransform: string;
    textAlign: string;
    background: string;
    display: string;
    width: string;

    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
  };
  // ==========================================================================
  // StyledInput
  // ==========================================================================
  StyledInput: {
    cursor: string;
    whiteSpace: string;
    textAlign: string;
    textDecoration: string;
    textTransform: string;
    width: string;
    display: string;
    gap: string;
    justifyContent: string;
    alignItems: string;

    fontColor: string;
    background: string;
    fontFamily: string;
    fontWeight: number;

    transition: string;

    // Hover
    fontColorHover: string;
    backgroundHover: string;
    fontWeightHover?: string;
    // Focus
    fontColorFocus: string;
    backgroundFocus: string;
    fontWeightFocus?: string;
    // Active
    fontColorActive: string;
    backgroundActive: string;
    fontWeightActive?: string;
    // activated
    fontColorActivated: string;
    backgroundaActivated: string;
    // Icon
    icon: {
      fill: string;
      fillHover: string;
      fillFocus: string;
      fillActive: string;
      fillActivated: string;
    };
    // placeholder
    placeholder: {
      color: string;
      background: string;
    };
    //autofill
    autofill: {
      textFillColor: string;
      boxShadow: string;
      transition: string;
    };
    // Mobile
    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      // Border
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      // Border Hover
      borderRadiusHover: string;
      borderHover: string;
      borderTopHover: string;
      borderRightHover: string;
      borderBottomHover: string;
      borderLeftHover: string;
      // Border Focus
      borderRadiusFocus: string;
      borderFocus: string;
      borderTopFocus: string;
      borderRightFocus: string;
      borderBottomFocus: string;
      borderLeftFocus: string;
      // Border Active
      borderRadiusActive: string;
      borderActive: string;
      borderTopActive: string;
      borderRightActive: string;
      borderBottomActive: string;
      borderLeftActive: string;
      // Border Activated
      borderRadiusActivated: string;
      borderActivated: string;
      borderTopActivated: string;
      borderRightActivated: string;
      borderBottomActivated: string;
      borderLeftActivated: string;
      // Icon
      icon: {
        height: string;
        width: string;
        margin: string;
      };
    };
    // Large Mobile
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      // Border
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      // Border Hover
      borderRadiusHover: string;
      borderHover: string;
      borderTopHover: string;
      borderRightHover: string;
      borderBottomHover: string;
      borderLeftHover: string;
      // Border Focus
      borderRadiusFocus: string;
      borderFocus: string;
      borderTopFocus: string;
      borderRightFocus: string;
      borderBottomFocus: string;
      borderLeftFocus: string;
      // Border Active
      borderRadiusActive: string;
      borderActive: string;
      borderTopActive: string;
      borderRightActive: string;
      borderBottomActive: string;
      borderLeftActive: string;
      // Border Activated
      borderRadiusActivated: string;
      borderActivated: string;
      borderTopActivated: string;
      borderRightActivated: string;
      borderBottomActivated: string;
      borderLeftActivated: string;
      icon: {
        height: string;
        width: string;
        margin: string;
      };
    };
    // Tabet
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      // Border
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      // Border Hover
      borderRadiusHover: string;
      borderHover: string;
      borderTopHover: string;
      borderRightHover: string;
      borderBottomHover: string;
      borderLeftHover: string;
      // Border Focus
      borderRadiusFocus: string;
      borderFocus: string;
      borderTopFocus: string;
      borderRightFocus: string;
      borderBottomFocus: string;
      borderLeftFocus: string;
      // Border Active
      borderRadiusActive: string;
      borderActive: string;
      borderTopActive: string;
      borderRightActive: string;
      borderBottomActive: string;
      borderLeftActive: string;
      // Border Activated
      borderRadiusActivated: string;
      borderActivated: string;
      borderTopActivated: string;
      borderRightActivated: string;
      borderBottomActivated: string;
      borderLeftActivated: string;
      icon: {
        height: string;
        width: string;
        margin: string;
      };
    };
    // Desktop
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      // Border
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      // Border Hover
      borderRadiusHover: string;
      borderHover: string;
      borderTopHover: string;
      borderRightHover: string;
      borderBottomHover: string;
      borderLeftHover: string;
      // Border Focus
      borderRadiusFocus: string;
      borderFocus: string;
      borderTopFocus: string;
      borderRightFocus: string;
      borderBottomFocus: string;
      borderLeftFocus: string;
      // Border Active
      borderRadiusActive: string;
      borderActive: string;
      borderTopActive: string;
      borderRightActive: string;
      borderBottomActive: string;
      borderLeftActive: string;
      // Border Activated
      borderRadiusActivated: string;
      borderActivated: string;
      borderTopActivated: string;
      borderRightActivated: string;
      borderBottomActivated: string;
      borderLeftActivated: string;
      icon: {
        height: string;
        width: string;
        margin: string;
      };
    };
    // widescreen
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      // Border
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      // Border Hover
      borderRadiusHover: string;
      borderHover: string;
      borderTopHover: string;
      borderRightHover: string;
      borderBottomHover: string;
      borderLeftHover: string;
      // Border Focus
      borderRadiusFocus: string;
      borderFocus: string;
      borderTopFocus: string;
      borderRightFocus: string;
      borderBottomFocus: string;
      borderLeftFocus: string;
      // Border Active
      borderRadiusActive: string;
      borderActive: string;
      borderTopActive: string;
      borderRightActive: string;
      borderBottomActive: string;
      borderLeftActive: string;
      // Border Activated
      borderRadiusActivated: string;
      borderActivated: string;
      borderTopActivated: string;
      borderRightActivated: string;
      borderBottomActivated: string;
      borderLeftActivated: string;
      icon: {
        height: string;
        width: string;
        margin: string;
      };
    };
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: string;
      background: string;
      border: string;
      icon: {
        fill: string;
      };
    };
  };
  // ==========================================================================
  // StyledInput
  // ==========================================================================
  StyledErrorMessage: {
    position?: string;
    fontColor: string;
    fontFamily: string;
    fontWeight: number;
    textTransform: string;
    textAlign: string;
    background: string;
    display: string;
    width: string;
    transition: string;
    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      margin: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
  };
};

export type FormInputMixedTheme = Record<layoutVariant, FormInputMixed>;
