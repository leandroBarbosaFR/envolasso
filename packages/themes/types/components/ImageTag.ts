// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'responsive' | `responsiveClientLogo` | `responsiveLogo` | `fullScreen` | string;

// ==========================================================================
// ImageTag:
// ==========================================================================
export type ImageTag = {
  // ==========================================================================
  // StyledImgWrap
  // ==========================================================================
  StyledImgWrap: {
    position?: string;
    display?: string;
    zIndex?: string;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    filter?: string;
    background?: string;
    borderRadius?: string;
    overflow?: string;
    mobile: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      // margin: `auto`,
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    After: {
      content?: string;
      position?: string;
      zIndex?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      height?: string;
      width?: string;
      mixBlendMode?: string;
      background?: string;
    };
  };
  // ==========================================================================
  // StyledImg
  // ==========================================================================
  StyledImg: {
    position?: string;
    display?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    objectFit?: string;
    filter?: string;
    margin?: string;
    borderRadius?: string;
    overflow?: string;
    mobile: {
      position?: string;
      display?: string;
      width?: string;
      maxWidth?: string;
      height?: string;
      objectFit?: string;
      filter?: string;
      margin?: string;
    };
    mobileLarge: {
      position?: string;
      display?: string;
      width?: string;
      maxWidth?: string;
      height?: string;
      objectFit?: string;
      filter?: string;
      margin?: string;
    };
    tablet: {
      position?: string;
      display?: string;
      width?: string;
      maxWidth?: string;
      height?: string;
      objectFit?: string;
      filter?: string;
      margin?: string;
    };
    desktop: {
      position?: string;
      display?: string;
      width?: string;
      maxWidth?: string;
      height?: string;
      objectFit?: string;
      filter?: string;
      margin?: string;
    };
    widescreen: {
      position?: string;
      display?: string;
      width?: string;
      maxWidth?: string;
      height?: string;
      objectFit?: string;
      filter?: string;
      margin?: string;
    };
  };
  // ==========================================================================
  // StyledImgCaptionWrap
  // ==========================================================================
  StyledImgCaptionWrap: {
    position?: string;
    zIndex?: string;
    mobile: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledImgCaption
  // ==========================================================================
  StyledImgCaption: {
    variant: string;
  };
};

export type ImageTagTheme = Record<layoutVariant, ImageTag>;
