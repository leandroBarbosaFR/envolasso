import { colors } from '../variables';

const GlobalLoadingMessage = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledLoadingMessageWrapper
    // ==========================================================================
    StyledLoadingMessageWrapper: {
      position: 'relative',
      padding: `16px 36px`,
      border: `1px solid ${colors.grey}`,
      borderRadius: `6.5px`,
      margin: `0 0 0 4px`,

      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},

      button: {
        position: `absolute`,
        top: `0`,
        left: `0`,
        transform: `translate(-25%, -25%)`,
        margin: `0`,
        zIndex: `100`,
        backdropFilter: `blur(10px)`,

        mobile: {},
        mobileLarge: {},
        tablet: {},
        desktop: {},
        widescreen: {}
      }
    },
    // ==========================================================================
    // StyledLoadingMessage
    // ==========================================================================
    StyledLoadingMessage: {
      color: colors.grey,
      letterSpacing: `0.06px`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},

      Button: {
        variant: 'buttonIconGrey',
        withIcon: true,
        withText: false,
        iconName: 'info'
      }
    }
  }
};
export { GlobalLoadingMessage };
