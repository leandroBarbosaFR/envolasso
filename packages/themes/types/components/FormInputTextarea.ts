// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// FormInputTextarea:
// ==========================================================================
export type FormInputTextarea = {
  // ==========================================================================
  // StyledLabel
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
  // StyledTextarea
  // ==========================================================================
  StyledTextarea: {
    width: string;
    resize: string;
    cursor: string;
    height: string;
    fontColor: string;
    background: string;
    fontFamily: string;
    fontWeight: number;
    transition: string;
    textTransform?: string;
    // Hover
    fontColorHover: string;
    backgroundHover: string;
    // Focus
    fontColorFocus: string;
    backgroundFocus: string;
    // Active
    fontColorActive: string;
    backgroundActive: string;
    // activated
    fontColorActivated: string;
    backgroundaActivated: string;

    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
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
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
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
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
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
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
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
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
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
    // Custom Scroll
    // ==========================================================================
    overflowX: string;
    overflowY: string;
    // pointerEvents: `none`,
    //scrollbar
    scrollbarWidth: string;
    scrollbarColor: string;
    webkitScrollbarWidth: string;
    webkitScrollbarHeight: string;
    //scrollbar Track
    scrollbarTrackBgColor: string;
    webkitScrollbarTrackWidth: string;
    webkitScrollbarTrackHeight: string;
    webkitScrollbarTrackBorderRadius: string;
    //scrollbar thumb
    webkitScrollbarThumbBgColor: string;
    webkitScrollbarThumbBorderRadius: string;
    webkitScrollbarThumbBorder: string;
    //scrollbar Hover
    // ==========================================================================
    hover: {
      pointerEvents: string;
      //scrollbar
      scrollbarColor: string;
      //scrollbar thumb
      webkitScrollbarThumbBgColor: string;
    };
  };
  // ==========================================================================
  // StyledErrorMessage
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

export type FormInputTextareaTheme = Record<layoutVariant, FormInputTextarea>;
