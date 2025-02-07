import { transform } from 'next/dist/build/swc';
import { colors, fonts } from '../variables';

// ==========================================================================
// Buttons/Links/Icons
// ==========================================================================
const button = {
  // ==========================================================================
  // BUTTONS
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonPrimary: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.black,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.white,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.blackOpacity,
    backgroundHover: colors.whiteOpacity,
    // Focus
    fontColorFocus: colors.blackOpacity,
    backgroundFocus: colors.whiteOpacity,
    // Active
    fontColorActive: colors.blackOpacity,
    backgroundActive: colors.whiteOpacity,
    // activated
    fontColorActivated: colors.blackOpacity,
    backgroundaActivated: colors.whiteOpacity,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.blackOpacity,
      fillFocus: colors.blackOpacity,
      fillActive: colors.blackOpacity,
      fillActivated: colors.blackOpacity
    },
    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `10px 10px`,
      borderRadius: `6px`,
      // Border
      border: `1px solid ${colors.white}`,
      // Border Hover
      borderHover: `1px solid ${colors.whiteOpacity}`,
      // Border Focus
      borderFocus: `1px solid ${colors.whiteOpacity}`,
      // Border Active
      borderActive: `1px solid ${colors.whiteOpacity}`,
      // Border Activated
      borderActivated: `1px solid ${colors.whiteOpacity}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonPrimaryNavDraw: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `100%`,
    alignItems: `center`,
    justifyContent: `center`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.black,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.white,

    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.blackOpacity,
    backgroundHover: colors.whiteOpacity,
    // Focus
    fontColorFocus: colors.blackOpacity,
    backgroundFocus: colors.whiteOpacity,
    // Active
    fontColorActive: colors.blackOpacity,
    backgroundActive: colors.whiteOpacity,
    // activated
    fontColorActivated: colors.blackOpacity,
    backgroundaActivated: colors.whiteOpacity,

    // Icon
    icon: {
      fill: colors.transparent,
      fillHover: colors.transparent,
      fillFocus: colors.transparent,
      fillActive: colors.transparent,
      fillActivated: colors.transparent
    },

    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `10px 10px`,
      borderRadius: `6px`,
      // Border
      border: `1px solid ${colors.white}`,
      // Border Hover
      borderHover: `1px solid ${colors.whiteOpacity}`,
      // Border Focus
      borderFocus: `1px solid ${colors.whiteOpacity}`,
      // Border Active
      borderActive: `1px solid ${colors.whiteOpacity}`,
      // Border Activated
      borderActivated: `1px solid ${colors.whiteOpacity}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonBluePrimary: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.black,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.blueLight,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.black,
    backgroundHover: colors.blueLightOpacity,
    // Focus
    fontColorFocus: colors.black,
    backgroundFocus: colors.blueLightOpacity,
    // Active
    fontColorActive: colors.black,
    backgroundActive: colors.blueLightOpacity,
    // activated
    fontColorActivated: colors.black,
    backgroundaActivated: colors.blueLightOpacity,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.black,
      fillFocus: colors.black,
      fillActive: colors.black,
      fillActivated: colors.black
    },
    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `12px 20px`,
      borderRadius: `4px`,
      // Border
      border: `1px solid ${colors.white}`,
      // Border Hover
      borderHover: `1px solid ${colors.greyLighter}`,
      // Border Focus
      borderFocus: `1px solid ${colors.greyLighter}`,
      // Border Active
      borderActive: `1px solid ${colors.greyLighter}`,
      // Border Activated
      borderActivated: `1px solid ${colors.greyLighter}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: `12px 40px`,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `12px`,
        width: `12px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonWhitePrimary: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.black,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.white,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.black,
    backgroundHover: colors.white,
    // Focus
    fontColorFocus: colors.black,
    backgroundFocus: colors.white,
    // Active
    fontColorActive: colors.black,
    backgroundActive: colors.white,
    // activated
    fontColorActivated: colors.black,
    backgroundaActivated: colors.white,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.black,
      fillFocus: colors.black,
      fillActive: colors.black,
      fillActivated: colors.black
    },
    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `12px 20px`,
      borderRadius: `4px`,
      // Border
      border: `1px solid ${colors.white}`,
      // Border Hover
      borderHover: `1px solid ${colors.greyLighter}`,
      // Border Focus
      borderFocus: `1px solid ${colors.greyLighter}`,
      // Border Active
      borderActive: `1px solid ${colors.greyLighter}`,
      // Border Activated
      borderActivated: `1px solid ${colors.greyLighter}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: `12px 40px`,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `12px`,
        width: `12px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonBlackBorder: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `100%`,
    alignItems: `center`,
    justifyContent: `center`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.blackMid,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.blackMid,
    backgroundHover: colors.transparent,
    // Focus
    fontColorFocus: colors.blackMid,
    backgroundFocus: colors.transparent,
    // Active
    fontColorActive: colors.blackMid,
    backgroundActive: colors.transparent,
    // activated
    fontColorActivated: colors.blackMid,
    backgroundaActivated: colors.transparent,
    // Icon
    icon: {
      fill: colors.transparent,
      fillHover: colors.transparent,
      fillFocus: colors.transparent,
      fillActive: colors.transparent,
      fillActivated: colors.transparent
    },
    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `12px 40px`,
      borderRadius: `4px`,
      // Border
      border: `1px solid ${colors.blackMid}`,
      // Border Hover
      borderHover: `1px solid ${colors.blackMid}`,
      // Border Focus
      borderFocus: `1px solid ${colors.blackMid}`,
      // Border Active
      borderActive: `1px solid ${colors.blackMid}`,
      // Border Activated
      borderActivated: `1px solid ${colors.blackMid}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `12px`,
        width: `12px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonBlackBorderTeam: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `center`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.blackMid,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.blackMid,
    backgroundHover: colors.transparent,
    // Focus
    fontColorFocus: colors.blackMid,
    backgroundFocus: colors.transparent,
    // Active
    fontColorActive: colors.blackMid,
    backgroundActive: colors.transparent,
    // activated
    fontColorActivated: colors.blackMid,
    backgroundaActivated: colors.transparent,
    // Icon
    icon: {
      fill: colors.blackMid,
      fillHover: colors.blackMid,
      fillFocus: colors.blackMid,
      fillActive: colors.blackMid,
      fillActivated: colors.blackMid
    },
    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `12px 40px`,
      borderRadius: `4px`,
      // Border
      border: `1px solid ${colors.blackMid}`,
      // Border Hover
      borderHover: `1px solid ${colors.blackMid}`,
      // Border Focus
      borderFocus: `1px solid ${colors.blackMid}`,
      // Border Active
      borderActive: `1px solid ${colors.blackMid}`,
      // Border Activated
      borderActivated: `1px solid ${colors.blackMid}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `12px`,
        width: `12px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonPrimaryBlack: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.blackMid,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.white,
    backgroundHover: colors.blackMid,
    // Focus
    fontColorFocus: colors.white,
    backgroundFocus: colors.blackMid,
    // Active
    fontColorActive: colors.white,
    backgroundActive: colors.blackMid,
    // activated
    fontColorActivated: colors.white,
    backgroundaActivated: colors.blackMid,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.blackOpacity,
      fillFocus: colors.blackOpacity,
      fillActive: colors.blackOpacity,
      fillActivated: colors.blackOpacity
    },
    // Mobile
    mobile: {
      fontSize: `12px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `10px 10px`,
      borderRadius: `6px`,
      // Border
      border: `1px solid ${colors.blackMid}`,
      // Border Hover
      borderHover: `1px solid ${colors.blackMid}`,
      // Border Focus
      borderFocus: `1px solid ${colors.blackMid}`,
      // Border Active
      borderActive: `1px solid ${colors.blackMid}`,
      // Border Activated
      borderActivated: `1px solid ${colors.blackMid}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonPrimaryGrey: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.lightGrey,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.blackOpacity,
    backgroundHover: colors.whiteOpacity,
    // Focus
    fontColorFocus: colors.blackOpacity,
    backgroundFocus: colors.whiteOpacity,
    // Active
    fontColorActive: colors.blackOpacity,
    backgroundActive: colors.whiteOpacity,
    // activated
    fontColorActivated: colors.blackOpacity,
    backgroundaActivated: colors.whiteOpacity,
    // Icon
    icon: {
      fill: colors.lightGrey,
      fillHover: colors.blackOpacity,
      fillFocus: colors.blackOpacity,
      fillActive: colors.blackOpacity,
      fillActivated: colors.blackOpacity
    },
    // Mobile
    mobile: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `10px 10px`,
      borderRadius: `6px`,
      // Border
      border: `1px solid ${colors.greyMid}`,
      // Border Hover
      borderHover: `1px solid ${colors.whiteOpacity}`,
      // Border Focus
      borderFocus: `1px solid ${colors.whiteOpacity}`,
      // Border Active
      borderActive: `1px solid ${colors.whiteOpacity}`,
      // Border Activated
      borderActivated: `1px solid ${colors.whiteOpacity}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `20px`,
        width: `20px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonPrimary
  // ==========================================================================
  buttonPrimaryInverted: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.black,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.whiteOpacity,
    backgroundHover: colors.blackOpacity,
    // Focus
    fontColorFocus: colors.whiteOpacity,
    backgroundFocus: colors.blackOpacity,
    // Active
    fontColorActive: colors.whiteOpacity,
    backgroundActive: colors.blackOpacity,
    // activated
    fontColorActivated: colors.whiteOpacity,
    backgroundaActivated: colors.blackOpacity,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.whiteOpacity,
      fillFocus: colors.whiteOpacity,
      fillActive: colors.whiteOpacity,
      fillActivated: colors.whiteOpacity
    },
    // Mobile
    mobile: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `10px 10px`,
      borderRadius: `6px`,
      // Border
      border: `1px solid ${colors.black}`,
      // Border Hover
      borderHover: `1px solid ${colors.blackOpacity}`,
      // Border Focus
      borderFocus: `1px solid ${colors.blackOpacity}`,
      // Border Active
      borderActive: `1px solid ${colors.blackOpacity}`,
      // Border Activated
      borderActivated: `1px solid ${colors.blackOpacity}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `20px`,
        width: `20px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonOutLine
  // ==========================================================================
  buttonOutLine: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.black,
    backgroundHover: colors.white,
    boxShadowHover: ` rgb(0, 0, 0) 10px -10px 0px -3px,
      rgb(255, 255, 255) 10px -10px`,
    // Focus
    fontColorFocus: colors.black,
    backgroundFocus: colors.white,
    // Active
    fontColorActive: colors.black,
    backgroundActive: colors.white,
    // activated
    fontColorActivated: colors.black,
    backgroundaActivated: colors.white,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.black,
      fillFocus: colors.black,
      fillActive: colors.black,
      fillActivated: colors.black
    },
    // Mobile
    mobile: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: `0`,
      margin: `0px`,
      padding: `10px 10px`,
      borderRadius: `4px`,
      // Border
      border: `1px solid ${colors.white}`,
      // Border Hover
      borderHover: `1px solid ${colors.white}`,
      // Border Focus
      borderFocus: `1px solid ${colors.white}`,
      // Border Active
      borderActive: `1px solid ${colors.white}`,
      // Border Activated
      borderActivated: `1px solid ${colors.white}`,
      // Icon
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `20px`,
        width: `20px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.white,
      background: colors.black,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // ICON BUTTONS
  // ==========================================================================
  // buttonIconPrimary
  // ==========================================================================
  buttonIconPrimary: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `900`,
    textTransform: ``,
    background: colors.transparent,
    zIndex: '1',
    pointerEvents: ``,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.whiteOpacity,
    backgroundHover: colors.transparent,
    borderRadiusHover: ``,
    // Focus
    fontColorFocus: colors.whiteOpacity,
    backgroundFocus: colors.transparent,
    borderRadiusFocus: ``,
    // Active
    fontColorActive: colors.whiteOpacity,
    backgroundActive: colors.transparent,
    borderRadiusActive: ``,
    // Activated
    fontColorActivated: colors.whiteOpacity,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `900`,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.black,
      fillFocus: colors.black,
      fillActive: colors.black,
      fillActivated: colors.black
    },
    // Mobile
    mobile: {
      fontSize: `21px`,
      lineHeight: `21px`,
      letterSpacing: ``,
      margin: `0`,
      border: `none`,
      icon: {
        height: `21px`,
        width: `21px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `25px`,
      lineHeight: `25px`,
      letterSpacing: ``,
      icon: {
        height: `25px`,
        width: `25px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.grey,
      background: colors.transparent,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonIconPrimary
  // ==========================================================================
  buttonNavIconsFooter: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.lightGrey,
    fontWeight: `900`,
    textTransform: ``,
    background: colors.transparent,
    zIndex: '1',
    pointerEvents: ``,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.whiteOpacity,
    backgroundHover: colors.transparent,
    borderRadiusHover: ``,
    // Focus
    fontColorFocus: colors.whiteOpacity,
    backgroundFocus: colors.transparent,
    borderRadiusFocus: ``,
    // Active
    fontColorActive: colors.whiteOpacity,
    backgroundActive: colors.transparent,
    borderRadiusActive: ``,
    // Activated
    fontColorActivated: colors.whiteOpacity,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `900`,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.midBlack,
      fillFocus: colors.midBlack,
      fillActive: colors.midBlack,
      fillActivated: colors.midBlack
    },
    // Mobile
    mobile: {
      fontSize: `21px`,
      lineHeight: `21px`,
      letterSpacing: ``,
      margin: `0`,
      border: `none`,
      icon: {
        height: `30px`,
        width: `30px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `25px`,
      lineHeight: `25px`,
      letterSpacing: ``,
      icon: {
        height: `35px`,
        width: `35px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.grey,
      background: colors.transparent,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonIconPrimary white
  // ==========================================================================
  buttonIconPrimaryWhite: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `900`,
    textTransform: ``,
    background: colors.transparent,
    zIndex: '1',
    pointerEvents: ``,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.yellow,
    backgroundHover: colors.transparent,
    borderRadiusHover: ``,
    // transformHover: `rotate(360deg)`,
    // Focus
    fontColorFocus: colors.yellow,
    backgroundFocus: colors.transparent,
    borderRadiusFocus: ``,
    // Active
    fontColorActive: colors.yellow,
    backgroundActive: colors.transparent,
    borderRadiusActive: ``,
    // Activated
    fontColorActivated: colors.yellow,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `900`,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.yellow,
      fillFocus: colors.yellow,
      fillActive: colors.yellow,
      fillActivated: colors.yellow
    },
    // Mobile
    mobile: {
      fontSize: `21px`,
      lineHeight: `21px`,
      letterSpacing: ``,
      margin: `0`,
      border: `none`,
      icon: {
        height: `30px`,
        width: `30px`,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: `30px`,
        width: `30px`,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `25px`,
      lineHeight: `25px`,
      letterSpacing: ``,
      icon: {
        height: `30px`,
        width: `30px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: colors.grey,
      background: colors.transparent,
      border: ``,
      icon: {
        fill: colors.grey
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // LINK BUTTONS
  // ==========================================================================
  // buttonLinkPrimary
  // ==========================================================================
  buttonLinkPrimary: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `8px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.midBlack,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.black,
    backgroundHover: colors.transparent,
    fontWeightHover: `300`,
    // Focus
    fontColorFocus: colors.black,
    backgroundFocus: colors.transparent,
    fontWeightFocus: `300`,
    // Active
    fontColorActive: colors.black,
    backgroundActive: colors.transparent,
    fontWeightActive: `300`,
    // activated
    fontColorActivated: colors.black,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `300`,
    // Icon
    icon: {
      fill: colors.midBlack,
      fillHover: colors.black,
      fillFocus: colors.black,
      fillActive: colors.black
    },
    // Mobile
    mobile: {
      fontSize: `13px`,
      lineHeight: `13px`,
      letterSpacing: `0`,
      margin: `0`,
      padding: ``,
      border: `none`,
      icon: {
        height: `13px`,
        width: `13px`,
        margin: `0`
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `15px`,
      lineHeight: `15px`,
      letterSpacing: `0`,
      margin: ``,
      padding: ``,
      border: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonLinkPrimary
  // ==========================================================================
  buttonLinkNav: {
    position: 'relative',
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `8px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.white,
    backgroundHover: colors.transparent,
    fontWeightHover: `300`,
    // Focus
    fontColorFocus: colors.white,
    backgroundFocus: colors.transparent,
    fontWeightFocus: `300`,
    // Active
    fontColorActive: colors.white,
    backgroundActive: colors.transparent,
    fontWeightActive: `300`,
    // activated
    fontColorActivated: colors.white,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `300`,
    widthAfterHover: `100%`,
    //after bottom
    contentAfter: `''`,
    positionAfter: `absolute`,
    widthAfter: `0`,
    heightAfter: `1px`,
    backgroundAfter: `white`,
    bottomAfter: `0`,
    leftAfter: `0`,
    transitionAfter: `width 0.5s ease-in-out`,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.white,
      fillFocus: colors.white,
      fillActive: colors.white
    },
    // Mobile
    mobile: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: `0`,
      margin: `0`,
      padding: `0 0 5px 0`,
      border: `none`,
      borderBottom: `none`,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: `0`
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `18px`,
      lineHeight: `18px`,
      letterSpacing: `0`,
      margin: ``,
      padding: ``,
      border: ``,
      icon: {
        height: `18px`,
        width: `18px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `20px`,
      lineHeight: `20px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `20px`,
        width: `20px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // buttonLinkPrimary white
  // ==========================================================================
  buttonLinkPrimaryWhite: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `8px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.greyLighter,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.whiteOpacity,
    backgroundHover: colors.transparent,
    fontWeightHover: `300`,
    // Focus
    fontColorFocus: colors.whiteOpacity,
    backgroundFocus: colors.transparent,
    fontWeightFocus: `300`,
    // Active
    fontColorActive: colors.whiteOpacity,
    backgroundActive: colors.transparent,
    fontWeightActive: `300`,
    // activated
    fontColorActivated: colors.whiteOpacity,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `300`,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.whiteOpacity,
      fillFocus: colors.whiteOpacity,
      fillActive: colors.whiteOpacity
    },
    // Mobile
    mobile: {
      fontSize: `13px`,
      lineHeight: `13px`,
      letterSpacing: `0`,
      margin: `0`,
      padding: ``,
      border: `none`,
      icon: {
        height: `13px`,
        width: `13px`,
        margin: `0`
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `15px`,
      lineHeight: `15px`,
      letterSpacing: `0`,
      margin: ``,
      padding: ``,
      border: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // Dropdown Button as link
  // ==========================================================================
  DropdownButtonLink: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,

    // Hover
    fontColorHover: colors.grey,
    backgroundHover: colors.transparent,
    fontWeightHover: `300`,
    // Focus
    fontColorFocus: colors.white,
    backgroundFocus: colors.transparent,
    fontWeightFocus: `300`,
    // Active
    fontColorActive: colors.black,
    backgroundActive: colors.transparent,
    fontWeightActive: `300`,
    // activated
    fontColorActivated: colors.black,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `300`,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.white,
      fillFocus: colors.white,
      fillActive: colors.white
    },
    // Mobile
    mobile: {
      fontSize: `13px`,
      lineHeight: `13px`,
      letterSpacing: `0`,
      margin: `0`,
      padding: ``,
      border: `none`,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: `13px`,
      lineHeight: `13px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `15px`,
      lineHeight: `15px`,
      letterSpacing: `0`,
      margin: ``,
      padding: ``,
      border: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // CarouselNavBtn
  // ==========================================================================
  CarouselNavBtn: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `8px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.black,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.grey,
    backgroundHover: colors.transparent,
    fontWeightHover: `300`,
    // Focus
    fontColorFocus: colors.darkGrey,
    backgroundFocus: colors.transparent,
    fontWeightFocus: `300`,
    // Active
    fontColorActive: colors.grey,
    backgroundActive: colors.transparent,
    fontWeightActive: `300`,
    // activated
    fontColorActivated: colors.darkGrey,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `300`,
    // Icon
    icon: {
      fill: colors.black,
      fillHover: colors.grey,
      fillFocus: colors.darkGrey,
      fillActive: colors.grey
    },
    // Mobile
    mobile: {
      fontSize: `13px`,
      lineHeight: `13px`,
      letterSpacing: `0`,
      margin: `0`,
      padding: ``,
      border: `none`,
      icon: {
        height: `13px`,
        width: `13px`,
        margin: `0`
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `15px`,
      lineHeight: `15px`,
      letterSpacing: `0`,
      margin: ``,
      padding: ``,
      border: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `16px`,
        width: `16px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // HorizontalScrollBtn
  // ==========================================================================
  HorizontalScrollBtn: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    width: `fit-content`,
    alignItems: `center`,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `8px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.black,
    fontWeight: `300`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.grey,
    backgroundHover: colors.transparent,
    fontWeightHover: `300`,
    // Focus
    fontColorFocus: colors.darkGrey,
    backgroundFocus: colors.transparent,
    fontWeightFocus: `300`,
    // Active
    fontColorActive: colors.grey,
    backgroundActive: colors.transparent,
    fontWeightActive: `300`,
    // activated
    fontColorActivated: colors.darkGrey,
    backgroundaActivated: colors.transparent,
    fontWeightActivated: `300`,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.grey,
      fillFocus: colors.darkGrey,
      fillActive: colors.grey
    },
    // Mobile
    mobile: {
      fontSize: `13px`,
      lineHeight: `13px`,
      letterSpacing: `0`,
      margin: `0`,
      padding: ``,
      border: `none`,
      icon: {
        height: `13px`,
        width: `13px`,
        margin: `0`
      }
    },
    // Large Mobile
    mobileLarge: {
      fontSize: ``,
      lineHeight: ``,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: ``,
        width: ``,
        margin: ``
      }
    },
    // Tabet
    tablet: {
      fontSize: `14px`,
      lineHeight: `14px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `14px`,
        width: `14px`,
        margin: ``
      }
    },
    // Desktop
    desktop: {
      fontSize: `15px`,
      lineHeight: `15px`,
      letterSpacing: `0`,
      margin: ``,
      padding: ``,
      border: ``,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: ``
      }
    },
    // widescreen
    widescreen: {
      fontSize: `16px`,
      lineHeight: `16px`,
      letterSpacing: ``,
      margin: ``,
      padding: ``,
      icon: {
        height: `25px`,
        width: `25px`,
        margin: ``
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  },
  // ==========================================================================
  // accordionTrigger
  // ==========================================================================
  accordionTrigger: {
    cursor: `pointer`,
    textAlign: `left`,
    whiteSpace: ``,
    textDecoration: `none`,
    width: `100%`,
    alignItems: ``,
    justifyContent: `space-between`,
    display: `flex`,
    gap: `10px`,
    transition: `0.3s ease-in-out`,
    fontFamily: fonts.SwitzerRegular,
    fontColor: colors.white,
    fontWeight: `400`,
    textTransform: ``,
    background: colors.transparent,
    //as
    asCursor: `auto`,
    asPointerEvents: `none`,
    // Hover
    fontColorHover: colors.white,
    backgroundHover: ``,
    borderRadiusHover: `20px`,
    // Focus
    fontColorFocus: ``,
    backgroundFocus: ``,
    borderRadiusFocus: `20px`,
    // Active
    fontColorActive: colors.white,
    backgroundActive: ``,
    borderRadiusActive: `20px`,
    // activated
    fontColorActivated: ``,
    backgroundaActivated: ``,
    borderRadiusActivated: `20px`,
    transform: `rotate(135deg)`,
    // Icon
    icon: {
      fill: colors.white,
      fillHover: colors.white,
      fillFocus: colors.white,
      fillActive: colors.white
    },
    // Mobile
    mobile: {
      fontSize: `inherit`,
      lineHeight: `inherit`,
      letterSpacing: `inherit`,
      border: `none`,
      icon: {
        height: `15px`,
        width: `15px`,
        margin: `10px`
      }
    },
    // Large Mobile
    mobileLarge: {
      icon: {
        height: `15px`,
        width: `15px`,
        margin: `10px`
      }
    },
    // Tabet
    tablet: {
      icon: {
        height: `18px`,
        width: `18px`,
        margin: `10px`
      }
    },
    // Desktop
    desktop: {
      icon: {
        height: `20`,
        width: `20`,
        margin: `10px`
      }
    },
    // widescreen
    widescreen: {
      icon: {
        height: `25px`,
        width: `25px`,
        margin: `10px`
      }
    },
    // disabled
    // ==========================================================================
    disabled: {
      fontColor: ``,
      background: ``,
      border: ``,
      icon: {
        fill: ``
      }
    },
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `10px 15px`,
      fontSize: `15px`,
      color: `${colors.white}`,
      backgroundColor: `${colors.white}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`
    },
    StyledToolTipArrow: {
      fill: `white`
    }
  }
};

export { button };
