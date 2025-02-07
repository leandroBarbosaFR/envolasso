// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;
// ==========================================================================
// DefaultFeed
// ==========================================================================
export type DefaultFeed = {
  // ==========================================================================
  // StyledHeaderGrid
  // ==========================================================================
  StyledFeedGrid: {
    gridTemplateColumns?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    alignItems?: string;
    zIndex?: string;
    display?: string;
    pointerEvents?: string;
    userSelect?: string;
    mobile: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
  };
};

export type DefaultFeedTheme = Record<layoutVariant, DefaultFeed>;
