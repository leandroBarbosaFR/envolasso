import { colors, fonts } from '../variables';

const FormInputTextarea = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledLabel
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
      width: '100%',

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
    // StyledTextarea
    // ==========================================================================
    StyledTextarea: {
      width: `100%`,
      resize: `none`,
      cursor: `text`,
      height: `80px`,

      fontColor: `${colors.white}`,
      background: `${colors.transparent}`,
      fontFamily: `${fonts.PoppinsRegular}`,
      fontWeight: 300,

      transition: `0.3s ease-in-out`,

      // Hover
      fontColorHover: `${colors.white}`,
      backgroundHover: `${colors.transparent}`,
      // Focus
      fontColorFocus: `${colors.white}`,
      backgroundFocus: `${colors.transparent}`,
      // Active
      fontColorActive: `${colors.white}`,
      backgroundActive: `${colors.transparent}`,
      // activated
      fontColorActivated: `${colors.white}`,
      backgroundaActivated: `${colors.transparent}`,

      mobile: {
        fontSize: `16px`,
        lineHeight: `17px`,
        letterSpacing: `0`,
        margin: `5px 0 0 0`,
        padding: `13px 20px`,
        // Border
        borderRadius: ``,
        border: `1px solid ${colors.white}`,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: `1px solid ${colors.white}`,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: `1px solid ${colors.white}`,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: `1px solid ${colors.white}`,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: `1px solid ${colors.white}`
      },
      mobileLarge: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      tablet: {
        fontSize: `15px`,
        lineHeight: `21px`,
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      desktop: {
        fontSize: `16px`,
        lineHeight: `22px`,
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      widescreen: {
        fontSize: `17px`,
        lineHeight: `23px`,
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      // Custom Scroll
      // ==========================================================================
      overflowX: `hidden`,
      overflowY: `visible`,
      // pointerEvents: `none`,
      //scrollbar
      scrollbarWidth: `thin`,
      scrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0)`,
      webkitScrollbarWidth: `5px`,
      webkitScrollbarHeight: `5px`,
      //scrollbar Track
      scrollbarTrackBgColor: `rgba(26, 26, 26, 0)`,
      webkitScrollbarTrackWidth: `5px`,
      webkitScrollbarTrackHeight: `5px`,
      webkitScrollbarTrackBorderRadius: `0`,
      //scrollbar thumb
      webkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0)`,
      webkitScrollbarThumbBorderRadius: `0`,
      webkitScrollbarThumbBorder: `none`,
      //scrollbar Hover
      // ==========================================================================
      hover: {
        pointerEvents: `all`,
        //scrollbar
        scrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0.1)`,
        //scrollbar thumb
        webkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0.1)`
      }
    },
    // ==========================================================================
    // StyledErrorMessage
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
        left: `0`,
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
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  defaultInverted: {
    // ==========================================================================
    // StyledLabel
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
      width: '100%',
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
    // StyledTextarea
    // ==========================================================================
    StyledTextarea: {
      width: `100%`,
      resize: `none`,
      cursor: `text`,
      height: `120px`,
      borderRadius: `8px`,
      fontColor: `${colors.black}`,
      background: `${colors.transparent}`,
      fontFamily: `${fonts.PoppinsRegular}`,
      fontWeight: 300,

      transition: `0.3s ease-in-out`,

      // Hover
      fontColorHover: `${colors.black}`,
      backgroundHover: `${colors.transparent}`,
      // Focus
      fontColorFocus: `${colors.black}`,
      backgroundFocus: `${colors.transparent}`,
      // Active
      fontColorActive: `${colors.black}`,
      backgroundActive: `${colors.transparent}`,
      // activated
      fontColorActivated: `${colors.black}`,
      backgroundaActivated: `${colors.transparent}`,

      mobile: {
        fontSize: `16px`,
        lineHeight: `17px`,
        letterSpacing: `0`,
        margin: `5px 0 0 0`,
        padding: `13px 20px`,
        // Border
        borderRadius: `8px`,
        border: `1px solid ${colors.black}`,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: `8px`,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: `1px solid ${colors.black}`,
        // Border Focus
        borderRadiusFocus: `8px`,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: `1px solid ${colors.black}`,
        // Border Active
        borderRadiusActive: `8px`,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: `1px solid ${colors.black}`,
        // Border Activated
        borderRadiusActivated: `8px`,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: `1px solid ${colors.black}`
      },
      mobileLarge: {
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      tablet: {
        fontSize: `15px`,
        lineHeight: `21px`,
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      desktop: {
        fontSize: `16px`,
        lineHeight: `22px`,
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      widescreen: {
        fontSize: `17px`,
        lineHeight: `23px`,
        letterSpacing: '',
        // Border
        borderRadius: ``,
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        // Border Hover
        borderRadiusHover: ``,
        borderHover: ``,
        borderTopHover: ``,
        borderRightHover: ``,
        borderBottomHover: ``,
        borderLeftHover: ``,
        // Border Focus
        borderRadiusFocus: ``,
        borderFocus: ``,
        borderTopFocus: ``,
        borderRightFocus: ``,
        borderBottomFocus: ``,
        borderLeftFocus: ``,
        // Border Active
        borderRadiusActive: ``,
        borderActive: ``,
        borderTopActive: ``,
        borderRightActive: ``,
        borderBottomActive: ``,
        borderLeftActive: ``,
        // Border Activated
        borderRadiusActivated: ``,
        borderActivated: ``,
        borderTopActivated: ``,
        borderRightActivated: ``,
        borderBottomActivated: ``,
        borderLeftActivated: ``
      },
      // Custom Scroll
      // ==========================================================================
      overflowX: `hidden`,
      overflowY: `visible`,
      // pointerEvents: `none`,
      //scrollbar
      scrollbarWidth: `thin`,
      scrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0)`,
      webkitScrollbarWidth: `5px`,
      webkitScrollbarHeight: `5px`,
      //scrollbar Track
      scrollbarTrackBgColor: `rgba(26, 26, 26, 0)`,
      webkitScrollbarTrackWidth: `5px`,
      webkitScrollbarTrackHeight: `5px`,
      webkitScrollbarTrackBorderRadius: `0`,
      //scrollbar thumb
      webkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0)`,
      webkitScrollbarThumbBorderRadius: `0`,
      webkitScrollbarThumbBorder: `none`,
      //scrollbar Hover
      // ==========================================================================
      hover: {
        pointerEvents: `all`,
        //scrollbar
        scrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0.1)`,
        //scrollbar thumb
        webkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0.1)`
      }
    },
    // ==========================================================================
    // StyledErrorMessage
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
        left: `0`,
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

export { FormInputTextarea };
