// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// BlockContent:
// ==========================================================================
export type BlockContent = {
  // ==========================================================================
  // Accordion
  // ==========================================================================
  Accordion: {
    layoutVariant: string;
  };
  // ==========================================================================
  // BlockQuote
  // ==========================================================================
  BlockQuote: {
    layoutVariant: string;
  };
  // ==========================================================================
  // HorizontalFeed
  // ==========================================================================
  HorizontalFeed: {
    layoutVariant: string;
  };
  // ==========================================================================
  // CtaNav
  // ==========================================================================
  CtaNav: {
    layoutVariant: string;
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    overflow?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
      maxWidth?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
      maxWidth?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
      maxWidth?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
      maxWidth?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
      maxWidth?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    // ImageTag
    // ==========================================================================
    ImageTag: {
      layoutVariant: string;
      width: number;
      height: number;
      cropWidth?: number;
      cropHeight?: number;
      fit?: string;
      fill: boolean;
      priority: boolean;
    };
  };
  // ==========================================================================
  // internalFile
  // ==========================================================================
  internalFile: {
    variant: string;
    withIcon: boolean;
    withText: boolean;
    iconName: string;
    iconPosition: string;
    withIconSecondary: boolean;
    iconNameSecondary: string;
  };
  // ==========================================================================
  // StyledImageGrid
  // ==========================================================================
  StyledImageGrid: {
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    display?: string;
    mobile: {
      height?: string;
      margin?: string;
      padding?: string;
      right?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      height?: string;
      margin?: string;
      padding?: string;
      right?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      height?: string;
      margin?: string;
      padding?: string;
      right?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      height?: string;
      margin?: string;
      padding?: string;
      right?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      height?: string;
      margin?: string;
      padding?: string;
      right?: string;
      colGap?: string;
      rowGap?: string;
    };
  };
};

export type BlockContentTheme = Record<layoutVariant, BlockContent>;
