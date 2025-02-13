import { colors, fonts } from '../variables';

const FormInputRadio = {
  // ==========================================================================
  // default
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledRadio
    // ==========================================================================
    StyledRadio: {
      display: `flex`,
      justifyContent: `flex-start`,
      alignItems: `center`,
      gap: `15px`,
      width: '100%'
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledLabel: {
      position: `relative`,
      fontColor: `${colors.white}`,
      fontFamily: `${fonts.PoppinsRegular}`,
      fontWeight: 300,
      textTransform: ``,
      textAlign: `left`,
      background: `${colors.transparent}`,
      display: `block`,
      width: 'fit-content',
      cursor: `pointer`,
      userSelect: `none`,
      mobile: {
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      mobileLarge: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      tablet: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      desktop: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      widescreen: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      }
    },

    // ==========================================================================
    // StyledRadio
    // ==========================================================================
    radio: {
      height: `18px`,
      width: `18px`,
      border: `2px solid ${colors.black}`,
      borderRadius: `30px`,
      background: `${colors.grey}`,
      /* Create the checkmark/indicator (hidden when not checked) */
      Span: {
        width: `10px`,
        height: `10px`,
        display: `block`,
        border: ``,
        borderRadius: `30px`,
        margin: `2px`
      },
      /* When the radio add color */
      SpanActive: {
        background: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledInput: {
      position: `absolute`,
      opacity: `0`,
      cursor: `pointer`,
      height: `0`,
      width: `0`
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledErrorMessage: {
      position: `absolute`,
      fontColor: `${colors.red}`,
      fontFamily: `${fonts.PoppinsRegular}`,
      fontWeight: 300,
      textTransform: ``,
      textAlign: `left`,
      background: `${colors.transparent}`,
      display: `block`,
      width: '100%',
      transition: `0.3s ease-in-out`,
      mobile: {
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '0',
        margin: `5px 0 0 0`,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: `-16px`,
        left: `33px`,
        right: `0`
      },
      mobileLarge: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      },
      tablet: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      },
      desktop: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      },
      widescreen: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      }
    }
  },
  defaultInverted: {
    // ==========================================================================
    // StyledRadio
    // ==========================================================================
    StyledRadio: {
      display: `flex`,
      justifyContent: `flex-start`,
      alignItems: `center`,
      gap: `15px`,
      width: '100%'
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledLabel: {
      position: `relative`,
      fontColor: `${colors.black}`,
      fontFamily: `${fonts.PoppinsRegular}`,
      fontWeight: 300,
      textTransform: ``,
      textAlign: `left`,
      background: `${colors.transparent}`,
      display: `block`,
      width: 'fit-content',
      cursor: `pointer`,
      userSelect: `none`,
      mobile: {
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      mobileLarge: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      tablet: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      desktop: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      },
      widescreen: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``
      }
    },

    // ==========================================================================
    // StyledRadio
    // ==========================================================================
    radio: {
      height: `18px`,
      width: `18px`,
      border: `2px solid ${colors.black}`,
      borderRadius: `30px`,
      background: `${colors.grey}`,
      /* Create the checkmark/indicator (hidden when not checked) */
      Span: {
        width: `10px`,
        height: `10px`,
        display: `block`,
        border: ``,
        borderRadius: `30px`,
        margin: `2px`
      },
      /* When the radio add color */
      SpanActive: {
        background: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledInput: {
      position: `absolute`,
      opacity: `0`,
      cursor: `pointer`,
      height: `0`,
      width: `0`
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledErrorMessage: {
      position: `absolute`,
      fontColor: `${colors.red}`,
      fontFamily: `${fonts.PoppinsRegular}`,
      fontWeight: 300,
      textTransform: ``,
      textAlign: `left`,
      background: `${colors.transparent}`,
      display: `block`,
      width: '100%',
      transition: `0.3s ease-in-out`,
      mobile: {
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '0',
        margin: `5px 0 0 0`,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: `-16px`,
        left: `33px`,
        right: `0`
      },
      mobileLarge: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      },
      tablet: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      },
      desktop: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      },
      widescreen: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        margin: ``,
        padding: ``,
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        top: ``,
        bottom: ``,
        left: ``,
        right: ``
      }
    }
  }
};

export { FormInputRadio };
