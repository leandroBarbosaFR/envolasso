// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Paragraph:
// ==========================================================================
export type Paragraph = {
  fontColor: string;
  fontFamily: string;
  fontWeight: number;
  fontFamilyStrong: string;
  fontWeightStrong: number;

  mobile: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    margin: string;
    padding: string;
  };
  mobileLarge: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    margin: string;
    padding: string;
  };
  tablet: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    margin: string;
    padding: string;
  };
  desktop: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    margin: string;
    padding: string;
  };
  widescreen: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    margin: string;
    padding: string;
  };

  a: {
    link: string;
    visited: string;
    hover: string;
    active: string;
    textDecoration: string;
  };
};

export type ParagraphTheme = Record<layoutVariant, Paragraph>;
