// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// FormInputSelect:
// ==========================================================================
export type FormInputSelect = {
  AgencyIcons: {
    layoutVariant: string;
    name?: string;
  };
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledLabel: {
    position: string;
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
  // StyledSelectWrap
  // ==========================================================================
  StyledSelectWrap: {
    position: string;
    display: string;
    alignitems: string;
    width: string;
    margin: string;
    padding: string;
    background: string;
    border: string;
    svg: {
      fill: string;
      pointerEvents: string;
      position: string;
      display: string;
      fillHover?: string;
    };
    mobile: {
      svg: {
        top: string;
        right: string;
        bottom: string;
        left: string;
        height: string;
        width: string;
      };
    };
    mobileLarge: {
      svg: {
        top: string;
        right: string;
        bottom: string;
        left: string;
        height: string;
        width: string;
      };
    };
    tablet: {
      svg: {
        top: string;
        right: string;
        bottom: string;
        left: string;
        height: string;
        width: string;
      };
    };
    desktop: {
      svg: {
        top: string;
        right: string;
        bottom: string;
        left: string;
        height: string;
        width: string;
      };
    };
    widescreen: {
      svg: {
        top: string;
        right: string;
        bottom: string;
        left: string;
        height: string;
        width: string;
      };
    };
  };
  // ==========================================================================
  // StyledSelect
  // ==========================================================================
  StyledSelect: {
    // Remove default styling
    appearance: string;
    displayExpand: string;
    outlineFocus: string;
    fontWeightOption: string;
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
    position: string;
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
      top: string;
      bottom: string;
      left: string;
      right: string;
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
      top: string;
      bottom: string;
      left: string;
      right: string;
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
      top: string;
      bottom: string;
      left: string;
      right: string;
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
      top: string;
      bottom: string;
      left: string;
      right: string;
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
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
  };
};

export type FormInputSelectTheme = Record<layoutVariant, FormInputSelect>;
