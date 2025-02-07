// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// BlockQuote:
// ==========================================================================
export type BlockQuote = {
  fontColor: string;
  fontFamily: string;
  fontWeight: number;
  mobile: {
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
    margin: string;
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
    border: string;
    borderTop: string;
    borderRight: string;
    borderBottom: string;
    borderLeft: string;
  };
};

export type BlockQuoteTheme = Record<layoutVariant, BlockQuote>;
