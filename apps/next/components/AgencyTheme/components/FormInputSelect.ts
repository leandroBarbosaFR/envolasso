import { colors, fonts } from '../variables';

const FormInputSelect = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    AgencyIcons: {
      layoutVariant: `default`,
      name: `arrowRightTrigger`
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledLabel: {
      position: `relative`,
      fontColor: `${colors.white}`,
      fontFamily: `${fonts.SwitzerRegular}`,
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
    // StyledSelectWrap
    // ==========================================================================
    StyledSelectWrap: {
      position: `relative`,
      display: `flex`,
      alignitems: `center`,
      width: `100%`,
      margin: `0`,
      padding: `0`,
      background: `${colors.transparent}`,
      border: `none`,
      svg: {
        fill: `${colors.white}`,
        pointerEvents: `none`,
        position: `absolute`,
        display: `block`
      },
      mobile: {
        svg: {
          right: `15px`,
          left: ``,
          top: `19px`,
          bottom: ``,
          height: `16px`,
          width: `16px`
        }
      },
      mobileLarge: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      },
      tablet: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      },
      desktop: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      },
      widescreen: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      }
    },
    // ==========================================================================
    // StyledSelect
    // ==========================================================================
    StyledSelect: {
      // Remove default styling
      appearance: `none`,
      displayExpand: `none`,
      outlineFocus: `none`,
      fontWeightOption: `300`,

      cursor: `pointer`,
      whiteSpace: `nowrap`,
      textAlign: `left`,
      textDecoration: `none`,
      textTransform: `none`,
      width: `100%`,
      display: `block`,
      gap: ``,
      justifyContent: ``,
      alignItems: `center`,
      fontColor: `${colors.white}`,
      background: `${colors.transparent}`,
      fontFamily: `${fonts.SwitzerRegular}`,
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
      // placeholder
      placeholder: {
        color: `${colors.white}`,
        background: `${colors.transparent}`
      },
      //autofill
      autofill: {
        textFillColor: `${colors.white}`,
        boxShadow: `rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset`,
        transition: `background-color 5000s ease-in-out 0s`
      },
      // Mobile
      mobile: {
        fontSize: `16px`,
        lineHeight: `16px`,
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
      // Large Mobile
      mobileLarge: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // Tabet
      tablet: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // Desktop
      desktop: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // widescreen
      widescreen: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // disabled
      // ==========================================================================
      disabled: {
        fontColor: `${colors.white}`,
        background: `${colors.black}`,
        border: ``,
        icon: {
          fill: `${colors.grey}`
        }
      }
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledErrorMessage: {
      position: `absolute`,
      fontColor: `${colors.red}`,
      fontFamily: `${fonts.SwitzerRegular}`,
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
  }, // ==========================================================================
  // layoutVariant
  // ==========================================================================
  defaultInverted: {
    AgencyIcons: {
      layoutVariant: `default`,
      name: `arrowRightTrigger`
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledLabel: {
      position: `relative`,
      fontColor: `${colors.white}`,
      fontFamily: `${fonts.SwitzerRegular}`,
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
    // StyledSelectWrap
    // ==========================================================================
    StyledSelectWrap: {
      position: `relative`,
      display: `flex`,
      alignitems: `center`,
      width: `100%`,
      margin: `0`,
      padding: `0`,
      background: `${colors.transparent}`,
      border: `none`,
      svg: {
        fill: `${colors.grey}`,
        pointerEvents: `pointer`,
        position: `absolute`,
        display: `block`,
        fillHover: `white`,
      },
      mobile: {
        svg: {
          right: `15px`,
          left: ``,
          top: `19px`,
          bottom: ``,
          height: `16px`,
          width: `16px`
        }
      },
      mobileLarge: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      },
      tablet: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      },
      desktop: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      },
      widescreen: {
        svg: {
          right: ``,
          left: ``,
          top: ``,
          bottom: ``,
          height: ``,
          width: ``
        }
      }
    },
    // ==========================================================================
    // StyledSelect
    // ==========================================================================
    StyledSelect: {
      // Remove default styling
      appearance: `none`,
      displayExpand: `none`,
      outlineFocus: `none`,
      fontWeightOption: `300`,
      cursor: `pointer`,
      whiteSpace: `nowrap`,
      textAlign: `left`,
      textDecoration: `none`,
      textTransform: `none`,
      width: `100%`,
      display: `block`,
      gap: ``,
      justifyContent: ``,
      alignItems: `center`,
      fontColor: `${colors.grey}`,
      background: `${colors.transparent}`,
      fontFamily: `${fonts.SwitzerRegular}`,
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
      // placeholder
      placeholder: {
        color: `${colors.white}`,
        background: `${colors.transparent}`
      },
      //autofill
      autofill: {
        textFillColor: `${colors.white}`,
        boxShadow: `rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset`,
        transition: `background-color 5000s ease-in-out 0s`
      },
      // Mobile
      mobile: {
        fontSize: `16px`,
        lineHeight: `16px`,
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
      // Large Mobile
      mobileLarge: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // Tabet
      tablet: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // Desktop
      desktop: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // widescreen
      widescreen: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        margin: ``,
        padding: ``,
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
      // disabled
      // ==========================================================================
      disabled: {
        fontColor: `${colors.white}`,
        background: `${colors.black}`,
        border: ``,
        icon: {
          fill: `${colors.grey}`
        }
      }
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledErrorMessage: {
      position: `absolute`,
      fontColor: `${colors.red}`,
      fontFamily: `${fonts.SwitzerRegular}`,
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

export { FormInputSelect };
