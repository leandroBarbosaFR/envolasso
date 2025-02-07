import { colors, fonts } from '../variables/index';

// ==========================================================================
// Paragraph
// ==========================================================================
const Paragraph = {
  // ==========================================================================
  // Credits
  // ==========================================================================
  credits: {
    fontColor: colors.white,
    fontFamily: fonts.SwitzerRegular,
    fontWeight: 300,
    fontFamilyStrong: fonts.SwitzerRegular,
    fontWeightStrong: 300,
    // Link styles
    a: {
      link: `white`,
      visited: `white`,
      hover: `gray`,
      active: `white`,
      textDecoration: `none`
    },
    mobile: {
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '0',
      margin: ``,
      padding: ``
    },
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``
    },
    tablet: {
      fontSize: '13px',
      lineHeight: '13px',
      letterSpacing: '',
      margin: ``,
      padding: ``
    },
    desktop: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``
    },
    widescreen: {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '',
      margin: ``,
      padding: ``
    }
  },

  // ==========================================================================
  // Caption
  // ==========================================================================
  caption: {
    fontColor: colors.white,
    fontFamily: fonts.SwitzerRegular,
    fontWeight: 300,
    fontFamilyStrong: fonts.SwitzerRegular,
    fontWeightStrong: 300,
    // Link styles
    a: {
      link: `white`,
      visited: `white`,
      hover: `gray`,
      active: `white`,
      textDecoration: `none`
    },
    mobile: {
      fontSize: `10px`,
      lineHeight: `12px`,
      letterSpacing: '',
      margin: ``,
      padding: ``
    },
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``
    },
    tablet: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: '',
      margin: ``,
      padding: ``
    },
    desktop: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``
    },
    widescreen: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: '',
      margin: ``,
      padding: ``
    }
  }
};

export { Paragraph };
