// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Heading:
// ==========================================================================
export type Heading = {
  fontColor: string;
  fontFamily: string;
  fontWeight: number;
  textTransform?: string;
  background?: string;

  mobile: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;

    textAlign?: string;
    display?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
  };
  mobileLarge: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;

    textAlign?: string;
    display?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
  };
  tablet: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;

    textAlign?: string;
    display?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
  };
  desktop: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;

    textAlign?: string;
    display?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
  };
  widescreen: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;

    textAlign?: string;
    display?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRadius?: string;
  };
};

export type HeadingTheme = Record<layoutVariant, Heading>;
