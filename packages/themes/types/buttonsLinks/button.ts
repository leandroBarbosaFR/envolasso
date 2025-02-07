// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Button:
// ==========================================================================
export type Button = {
  cursor?: string;
  textAlign?: string;
  whiteSpace?: string;
  textDecoration?: string;
  width?: string;
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  gap?: string;
  pointerEvents?: string;
  boxShadow?: string;
  transition?: string;
  fontFamily?: string;
  fontColor?: string;
  fontWeight?: string;
  textTransform?: string;
  background?: string;
  asCursor?: string;
  asPointerEvents?: string;
  transform?: string;
  position?: string;
  // Hover
  fontColorHover?: string;
  backgroundHover?: string;
  fontWeightHover?: string;
  boxShadowHover?: string;
  transformHover?: string;
  // Focus
  fontColorFocus?: string;
  backgroundFocus?: string;
  fontWeightFocus?: string;
  boxShadowFocus?: string;
  // Active
  fontColorActive?: string;
  backgroundActive?: string;
  fontWeightActive?: string;
  boxShadowActive?: string;
  // activated
  fontColorActivated?: string;
  backgroundaActivated?: string;
  fontWeightActivated?: string;
  boxShadowActivated?: string;
  widthAfterHover?: string;
  //after bottom

  contentAfter?: string;
  positionAfter?: string;
  widthAfter?: string;
  heightAfter?: string;
  backgroundAfter?: string;
  bottomAfter?: string;
  leftAfter?: string;
  transitionAfter?: string;

  // Icon
  icon: {
    fill?: string;
    fillHover?: string;
    fillFocus?: string;
    fillActive?: string;
    fillActivated?: string;
    transform?: string;
  };
  // Mobile
  mobile: {
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    margin?: string;
    padding?: string;
    // Border
    borderRadius?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    // Border Hover
    borderRadiusHover?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    // Border Focus
    borderRadiusFocus?: string;
    borderFocus?: string;
    borderTopFocus?: string;
    borderRightFocus?: string;
    borderBottomFocus?: string;
    borderLeftFocus?: string;
    // Border Active
    borderRadiusActive?: string;
    borderActive?: string;
    borderTopActive?: string;
    borderRightActive?: string;
    borderBottomActive?: string;
    borderLeftActive?: string;
    // Border Activated
    borderRadiusActivated?: string;
    borderActivated?: string;
    borderTopActivated?: string;
    borderRightActivated?: string;
    borderBottomActivated?: string;
    borderLeftActivated?: string;
    // Icon
    icon: {
      height?: string;
      width?: string;
      margin?: string;
    };
  };
  // Large Mobile
  mobileLarge: {
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    margin?: string;
    padding?: string;
    // Border
    borderRadius?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    // Border Hover
    borderRadiusHover?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    // Border Focus
    borderRadiusFocus?: string;
    borderFocus?: string;
    borderTopFocus?: string;
    borderRightFocus?: string;
    borderBottomFocus?: string;
    borderLeftFocus?: string;
    // Border Active
    borderRadiusActive?: string;
    borderActive?: string;
    borderTopActive?: string;
    borderRightActive?: string;
    borderBottomActive?: string;
    borderLeftActive?: string;
    // Border Activated
    borderRadiusActivated?: string;
    borderActivated?: string;
    borderTopActivated?: string;
    borderRightActivated?: string;
    borderBottomActivated?: string;
    borderLeftActivated?: string;
    icon: {
      height?: string;
      width?: string;
      margin?: string;
    };
  };
  // Tabet
  tablet: {
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    margin?: string;
    padding?: string;
    // Border
    borderRadius?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    // Border Hover
    borderRadiusHover?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    // Border Focus
    borderRadiusFocus?: string;
    borderFocus?: string;
    borderTopFocus?: string;
    borderRightFocus?: string;
    borderBottomFocus?: string;
    borderLeftFocus?: string;
    // Border Active
    borderRadiusActive?: string;
    borderActive?: string;
    borderTopActive?: string;
    borderRightActive?: string;
    borderBottomActive?: string;
    borderLeftActive?: string;
    // Border Activated
    borderRadiusActivated?: string;
    borderActivated?: string;
    borderTopActivated?: string;
    borderRightActivated?: string;
    borderBottomActivated?: string;
    borderLeftActivated?: string;
    icon: {
      height?: string;
      width?: string;
      margin?: string;
    };
  };
  // Desktop
  desktop: {
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    margin?: string;
    padding?: string;
    // Border
    borderRadius?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    // Border Hover
    borderRadiusHover?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    // Border Focus
    borderRadiusFocus?: string;
    borderFocus?: string;
    borderTopFocus?: string;
    borderRightFocus?: string;
    borderBottomFocus?: string;
    borderLeftFocus?: string;
    // Border Active
    borderRadiusActive?: string;
    borderActive?: string;
    borderTopActive?: string;
    borderRightActive?: string;
    borderBottomActive?: string;
    borderLeftActive?: string;
    // Border Activated
    borderRadiusActivated?: string;
    borderActivated?: string;
    borderTopActivated?: string;
    borderRightActivated?: string;
    borderBottomActivated?: string;
    borderLeftActivated?: string;
    icon: {
      height?: string;
      width?: string;
      margin?: string;
    };
  };
  // widescreen
  widescreen: {
    fontSize?: string;
    lineHeight?: string;
    letterSpacing?: string;
    margin?: string;
    padding?: string;
    // Border
    borderRadius?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    // Border Hover
    borderRadiusHover?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    // Border Focus
    borderRadiusFocus?: string;
    borderFocus?: string;
    borderTopFocus?: string;
    borderRightFocus?: string;
    borderBottomFocus?: string;
    borderLeftFocus?: string;
    // Border Active
    borderRadiusActive?: string;
    borderActive?: string;
    borderTopActive?: string;
    borderRightActive?: string;
    borderBottomActive?: string;
    borderLeftActive?: string;
    // Border Activated
    borderRadiusActivated?: string;
    borderActivated?: string;
    borderTopActivated?: string;
    borderRightActivated?: string;
    borderBottomActivated?: string;
    borderLeftActivated?: string;
    icon: {
      height?: string;
      width?: string;
      margin?: string;
    };
  };
  // disabled
  // ==========================================================================
  disabled: {
    fontColor?: string;
    background?: string;
    border?: string;
    icon: {
      fill?: string;
    };
  };
  // ==========================================================================
  // StyledToolTipContent
  // ==========================================================================
  StyledToolTipContent: {
    zIndex?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
    boxShadow?: string;
    userSelect?: string;
    animationDuration?: string;
    animationTimingFunction?: string;
    willChange?: string;
  };
  // ==========================================================================
  // StyledToolTipArrow
  // ==========================================================================
  StyledToolTipArrow: {
    fill?: string;
  };
};

export type ButtonTheme = Record<layoutVariant, Button>;
