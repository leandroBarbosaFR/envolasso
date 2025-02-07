import { colors } from '../variables';

const burgerNavToggle = {
  default: {
    cursor: `pointer`,
    transition: '0.3s ease-in-out',
    background: 'transparent',
    backgroundHover: 'transparent',
    backgroundDisabled: 'transparent',
    position: `relative`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,

    isActive: {
      alignItems: `center`,
      justifyContent: `center`
    },
    span: {
      display: `block`,
      pointerEvents: `none`,
      width: `100%`,
      opacity: `1`,
      position: `absolute`,
      fill: colors.white,
      fillHover: colors.white,
      fillActive: colors.white,
      height: '10%',
      transition: ' 0.25s ease-in-out',

      spanFirstChild: {
        display: `none`
      },
      spanSecondChild: {
        transform: `rotate(45deg)`
      },
      spanThirdChild: {
        transform: `rotate(-45deg)`
      }
    },

    // Mobile
    mobile: {
      height: '19px',
      width: '21px',
      margin: '0',
      padding: '0',
      border: `none`,
      // borderTop: ``,
      // borderRight: ``,
      // borderBottom: ``,
      // borderLeft: ``,
      // borderHover: ``,
      // borderTopHover: ``,
      // borderRightHover: ``,
      // borderBottomHover: ``,
      // borderLeftHover: ``,
      // borderRadius: ''
      active: {
        height: '',
        width: ''
      }
    },
    // Large Mobile
    mobileLarge: {
      height: '',
      width: '',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    },
    // Tabet
    tablet: {
      height: '',
      width: '',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    },
    // Desktop
    desktop: {
      height: '30px',
      width: '30px',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    },
    // widescreen
    widescreen: {
      height: '',
      width: '',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    }
  },

  alternative: {
    cursor: `pointer`,
    textAlign: `center`,
    whiteSpace: `nowrap`,
    textDecoration: `none`,
    transition: '0.3s ease-in-out',
    background: 'transparent',
    backgroundHover: 'transparent',
    backgroundDisabled: 'transparent',
    backgroundInverted: `${colors.white}`,
    PointerEventDisabled: `none`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,

    isActive: {
      alignItems: `center`,
      justifyContent: `center`
    },
    span: {
      display: `block`,
      pointerEvents: `none`,
      width: `100%`,
      opacity: `1`,
      opacityDisabled: `0.5`,
      fill: colors.white,
      fillCollapsed: colors.white,
      fillHover: colors.white,
      fillActive: colors.white,
      height: '10%',
      transition: ' 0.25s ease-in-out',

      spanFirstChild: {
        display: `none`
      },
      spanSecondChild: {
        transform: `rotate(45deg)`
      },
      spanThirdChild: {
        transform: `rotate(-45deg)`
      }
    },
    // Mobile
    mobile: {
      height: '19px',
      width: '21px',
      margin: '0',
      padding: '0',
      border: `none`,
      // borderTop: ``,
      // borderRight: ``,
      // borderBottom: ``,
      // borderLeft: ``,
      // borderHover: ``,
      // borderTopHover: ``,
      // borderRightHover: ``,
      // borderBottomHover: ``,
      // borderLeftHover: ``,
      // borderRadius: ''
      active: {
        height: '',
        width: ''
      }
    },
    // Large Mobile
    mobileLarge: {
      height: '',
      width: '',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    },
    // Tabet
    tablet: {
      height: '',
      width: '',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    },
    // Desktop
    desktop: {
      height: '30px',
      width: '30px',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    },
    // widescreen
    widescreen: {
      height: '',
      width: '',
      margin: '',
      padding: '',
      border: ``,
      active: {
        height: '',
        width: ''
      }
    }
  }
};

export { burgerNavToggle };
