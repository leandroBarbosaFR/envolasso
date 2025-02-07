// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// buttonIcon1367
// ==========================================================================
export type ButtonIcon1367 = {
  layoutVariant: string;
};

// ==========================================================================
// Logo
// ==========================================================================
export type Logo = {
  fill?: string;
  fillHover?: string;
  display?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  background?: string;

  // Tranisiton spcific styles
  transition?: string;
  transitionTransform?: string;
  webkitTransition?: string;
  mozTransition?: string;
  oTransition?: string;
  webkitTapHighlightColor?: string;
  cursor?: string;
  opacityHover?: string;
  backgroundHover?: string;
  mobile: {
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    border?: string;
  };
  mobileLarge: {
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    border?: string;
  };
  tablet: {
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    border?: string;
  };
  desktop: {
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    border?: string;
  };
  widescreen: {
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    border?: string;
  };
};

export type LogoTheme = Record<layoutVariant, Logo>;
