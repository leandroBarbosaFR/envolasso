// ==========================================================================
// Media queries (mediaQueries)
// ==========================================================================
export type MediaQueries = {
  mobile: string;
  mobileLarge: string;
  tablet: string;
  desktop: string;
  widescreen: string;
};

// ==========================================================================
// Container default settings
// ==========================================================================
export type Container = {
  marginLeft: string;
  marginRight: string;
  mobile: {
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
  };
  mobileLarge: {
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
  };
  tablet: {
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
  };
  desktop: {
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
  };
  widescreen: {
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
  };
};

// ==========================================================================
// Flid container default settings
// ==========================================================================
export type FluidContainer = {
  marginLeft: string;
  marginRight: string;
  width: string;
  maxWidth: string;
  mobile: {
    height: string;
    paddingLeft: string;
    paddingRight: string;
  };
  mobileLarge: {
    height: string;
    paddingLeft: string;
    paddingRight: string;
  };
  tablet: {
    height: string;
    paddingLeft: string;
    paddingRight: string;
  };
  desktop: {
    height: string;
    paddingLeft: string;
    paddingRight: string;
  };
  widescreen: {
    height: string;
    paddingLeft: string;
    paddingRight: string;
  };
};

// ==========================================================================
// Grid default settings
// ==========================================================================
export type Grid = {
  display: string;
  gridTemplateColumns: string;

  mobile: {
    height: string;
    alignSelf: string;
    colGap: string;
    rowGap: string;
  };
  mobileLarge: {
    height: string;
    alignSelf: string;
    colGap: string;
    rowGap: string;
  };
  tablet: {
    height: string;
    alignSelf: string;
    colGap: string;
    rowGap: string;
  };
  desktop: {
    height: string;
    alignSelf: string;
    colGap: string;
    rowGap: string;
  };
  widescreen: {
    height: string;
    alignSelf: string;
    colGap: string;
    rowGap: string;
  };
};

// ==========================================================================
// Main default settings
// ==========================================================================
export type layoutVariant = 'default' | string;

export type Main = {
  background: string;
  overflow?: string;
  mobile: {
    height: string;
    minHeight: string;
    margin: string;
    padding: string;
  };
  mobileLarge: {
    height: string;
    minHeight: string;
    margin: string;
    padding: string;
  };
  tablet: {
    height: string;
    minHeight: string;
    margin: string;
    padding: string;
  };
  desktop: {
    height: string;
    minHeight: string;
    margin: string;
    padding: string;
  };
  widescreen: {
    height: string;
    minHeight: string;
    margin: string;
    padding: string;
  };
};
// ==========================================================================
// Body
// ==========================================================================
export type Body = {
  mobile: {
    overflow?: string;
  };
  mobileLarge: {
    overflow?: string;
  };
  tablet: {
    overflow?: string;
  };
  desktop: {
    overflow?: string;
  };
  widescreen: {
    overflow?: string;
  };
};
export type Section = {
  // ==========================================================================
  // StyledSection
  // ==========================================================================
  background: string;
  overflow: string;
  mobile: {
    height: string;
    margin: string;
    padding: string;
  };
  mobileLarge: {
    height: string;
    margin: string;
    padding: string;
  };
  tablet: {
    height: string;
    margin: string;
    padding: string;
  };
  desktop: {
    height: string;
    margin: string;
    padding: string;
  };
  widescreen: {
    height: string;
    margin: string;
    padding: string;
  };
};

export type MainTheme = Record<layoutVariant, Main>;
