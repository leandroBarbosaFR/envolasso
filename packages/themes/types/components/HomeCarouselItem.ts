// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// HomeCarouselItem:
// ==========================================================================
export type HomeCarouselItem = {
  // ==========================================================================
  // StyledCarouselItem
  // ==========================================================================
  StyledCarouselItem: {
    width?: string;
    height?: string;
    objectFit?: string;
  };
  // ==========================================================================
  // StyledMediaWrapper
  // ==========================================================================
  StyledMediaWrapper: {
    zIndex?: string;
    position?: string;
    height?: string;
    width?: string;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    pointerEvents?: string;
    overflow?: string;
    backgroundRepeat?: string;
    backgroundAttachment?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
  };
  // ==========================================================================
  // StyledVideo
  // ==========================================================================
  StyledVideo: {
    width?: string;
    height?: string;
    minHeight?: string;
    minWidth?: string;
    position?: string;
    top?: string;
    left?: string;
    transform?: string;
  };
};

export type HomeCarouselItemTheme = Record<layoutVariant, HomeCarouselItem>;
