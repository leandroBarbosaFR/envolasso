import { breakpoints, gridColGap, gridRowGap, colors } from '../variables/index';

// ==========================================================================
// Media queries (breakpoints)
// ==========================================================================
const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile}px)`,
  mobileLarge: `@media (min-width: ${breakpoints.mobileLarge}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  widescreen: `@media (min-width: ${breakpoints.widescreen}px)`
};

// ==========================================================================
// Main default settings
// ==========================================================================
const main = {
  // ==========================================================================
  // StyledMain
  // ==========================================================================
  default: {
    background: `${colors.transparent}`,
    overflow: `unset`,
    mobile: {
      height: ``,
      minHeight: 'calc(100vh - 200px)',
      margin: `0`,
      padding: `75px 0 0 0`
    },
    mobileLarge: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: ``
    },
    tablet: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: `150px 0 0 0`
    },
    desktop: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: `110px 0 0 0`
    },
    widescreen: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: `111px 0 0 0`
    }
  },
  removeSpacing: {
    background: `${colors.transparent}`,
    mobile: {
      height: ``,
      minHeight: 'calc(100vh - 60px)',
      margin: `0`,
      padding: `0`
    },
    mobileLarge: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: ``
    },
    tablet: {
      height: ``,
      minHeight: 'calc(100vh - 200px)',
      margin: ``,
      padding: ``
    },
    desktop: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: ``
    },
    widescreen: {
      height: ``,
      minHeight: '',
      margin: ``,
      padding: ``
    }
  }
};
const body = {
  mobile: {
    overflow: `hidden`
  },
  mobileLarge: {
    overflow: `hidden`
  },
  tablet: {
    overflow: `hidden`
  },
  desktop: {
    overflow: `hidden`
  },
  widescreen: {
    overflow: `hidden`
  }
};
// ==========================================================================
// Section default settings
// ==========================================================================
const section = {
  // ==========================================================================
  // StyledSection
  // ==========================================================================
  background: `${colors.transparent}`,
  overflow: `hidden`,
  mobile: {
    height: `auto`,
    margin: `0`,
    padding: `15px 0 15px`
  },
  mobileLarge: {
    height: ``,
    margin: ``,
    padding: `20px 0 20px`
  },
  tablet: {
    height: ``,
    margin: ``,
    padding: `25px 0 25px`
  },
  desktop: {
    height: ``,
    margin: ``,
    padding: `30px 0 30px`
  },
  widescreen: {
    height: ``,
    margin: ``,
    padding: `60px 0 60px`
  }
};

// ==========================================================================
// Container default settings
// ==========================================================================
const container = {
  marginLeft: `auto`,
  marginRight: `auto`,
  mobile: {
    height: ``,
    width: `258px`,
    paddingLeft: `0`,
    paddingRight: `0`
  },
  mobileLarge: {
    height: ``,
    width: `480px`,
    paddingLeft: `0`,
    paddingRight: `0`
  },
  tablet: {
    height: ``,
    width: `720px`,
    paddingLeft: `0`,
    paddingRight: `0`
  },
  desktop: {
    height: ``,
    width: `1000px`,
    paddingLeft: `0`,
    paddingRight: `0`
  },
  widescreen: {
    height: ``,
    width: `1440px`,
    paddingLeft: `0`,
    paddingRight: `0`
  }
};

// ==========================================================================
// Flid container default settings
// ==========================================================================
const fluidContainer = {
  marginLeft: `auto`,
  marginRight: `auto`,
  width: `100%`,
  maxWidth: `2000px`,
  mobile: {
    height: ``,
    paddingLeft: `6px`,
    paddingRight: `6px`
  },
  mobileLarge: {
    height: ``,
    paddingLeft: `16px`,
    paddingRight: `16px`
  },
  tablet: {
    height: ``,
    paddingLeft: `16px`,
    paddingRight: `16px`
  },
  desktop: {
    height: ``,
    paddingLeft: `25px`,
    paddingRight: `25px`
  },
  widescreen: {
    height: ``,
    paddingLeft: `25px`,
    paddingRight: `25px`
  }
};

// ==========================================================================
// Grid default settings
// ==========================================================================
const grid = {
  display: `grid`,
  gridTemplateColumns: `repeat(12, 1fr)`,
  mobile: {
    height: ``,
    alignSelf: `start`,
    colGap: gridColGap.mobile,
    rowGap: gridRowGap.mobile
  },
  mobileLarge: {
    height: ``,
    alignSelf: ``,
    colGap: gridColGap.mobileLarge,
    rowGap: gridRowGap.mobileLarge
  },
  tablet: {
    height: ``,
    alignSelf: ``,
    colGap: gridColGap.tablet,
    rowGap: gridRowGap.tablet
  },
  desktop: {
    height: ``,
    alignSelf: ``,
    colGap: gridColGap.desktop,
    rowGap: gridRowGap.desktop
  },
  widescreen: {
    height: ``,
    alignSelf: ``,
    colGap: gridColGap.widescreen,
    rowGap: gridRowGap.widescreen
  }
};

export { mediaQueries, main, section, fluidContainer, container, grid, body };
