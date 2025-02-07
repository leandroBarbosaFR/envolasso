import { colors } from '../variables';

const Dialog = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledContent
    // ==========================================================================
    StyledContent: {
      justifyContent: `center`,
      alignItems: `center`,
      zIndex: `1000`,
      borderRadius: `6px`,
      background: colors.grey,
      boxShadow: ``,
      animationDuration: `400ms`,
      position: `fixed`,
      top: `50%`,
      left: `50%`,
      bottom: ``,
      right: ``,
      transform: `translate(-50%, -50%)`,
      overflow: ``,
      mobile: {
        width: ``,
        minWidth: `100%`,
        height: `auto`,
        maxHeight: `93vh`,
        padding: `20px`,
        margin: ``,
        display: `flex`
      },
      mobileLarge: {
        width: ``,
        minWidth: `100%`,
        height: ``,
        maxHeight: ``,
        padding: `30px`,
        margin: ``,
        display: `flex`
      },
      tablet: {
        width: ``,
        minWidth: `400px`,
        height: `auto`,
        maxHeight: ``,
        padding: ``,
        margin: ``
      },
      desktop: {
        width: ``,
        minWidth: ``,
        height: ``,
        maxHeight: ``,
        padding: ``,
        margin: ``
      },
      widescreen: {
        width: ``,
        minWidth: ``,
        height: ``,
        maxHeight: ``,
        padding: ``,
        margin: ``
      },
      // Cloase button styles
      StyledClose: {
        position: `absolute`,
        zIndex: 1,
        mobile: {
          top: `5px`,
          right: `5px`,
          left: ``,
          bottom: ``
        },
        mobileLarge: {
          top: ``,
          right: ``,
          left: ``,
          bottom: ``
        },
        tablet: {
          top: `10px`,
          right: `10px`,
          left: ``,
          bottom: ``
        },
        desktop: {
          top: ``,
          right: ``,
          left: ``,
          bottom: ``
        },
        widescreen: {
          top: ``,
          right: ``,
          left: ``,
          bottom: ``
        },
        // Close button Variant
        Button: {
          variant: `buttonIconPrimary`,
          withIcon: true,
          withText: false,
          iconName: `close`
        }
      }
    },
    // ==========================================================================
    // StyledContentInner
    // ==========================================================================
    StyledContentInner: {
      borderRadius: `6px`,
      background: colors.transparent,
      boxShadow: ``,
      position: `relative`,
      top: ``,
      right: ``,
      bottom: ``,
      left: ``,
      transform: ``,

      mobile: {
        width: `auto`,
        minWidth: `100%`,
        maxWidth: `auto`,
        height: `auto`,
        maxHeight: `100vh`,
        padding: `25px`
      },
      mobileLarge: {
        width: ``,
        minWidth: `100%`,
        maxWidth: ``,
        height: ``,
        maxHeight: ``,
        padding: ``
      },
      tablet: {
        width: ``,
        minWidth: `400px`,
        maxWidth: ``,
        height: ``,
        maxHeight: ``,
        padding: ``
      },
      desktop: {
        width: ``,
        minWidth: ``,
        maxWidth: ``,
        height: ``,
        maxHeight: ``,
        padding: ``
      },
      widescreen: {
        width: ``,
        minWidth: ``,
        maxWidth: ``,
        height: ``,
        maxHeight: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledOverlay
    // ==========================================================================
    StyledOverlay: {
      zIndex: 999,
      background: `rgba(0, 0, 0, .6)`,
      backdropFilter: ``,
      position: `fixed`,
      top: `0`,
      bottom: `0`,
      left: `0`,
      right: `0`
    },
    // ==========================================================================
    // StyledVerticalScroll
    // ==========================================================================
    StyledVerticalScroll: {
      width: `100%`,
      maxHeight: `75vh`,
      height: 'auto',
      padding: '5px 0',
      // Custom Scroll
      // ==========================================================================
      overflowX: `hidden`,
      overflowY: `visible`,
      // pointerEvents: `none`,
      //scrollbar
      scrollbarWidth: `thin`,
      scrollbarColor: `rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
      webkitScrollbarWidth: `5px`,
      webkitScrollbarHeight: `5px`,
      //scrollbar Track
      scrollbarTrackBgColor: `rgba(0, 0, 0, 0)`,
      webkitScrollbarTrackWidth: `5px`,
      webkitScrollbarTrackHeight: `5px`,
      webkitScrollbarTrackBorderRadius: `0`,
      //scrollbar thumb
      webkitScrollbarThumbBgColor: `rgba(0, 0, 0, 0)`,
      webkitScrollbarThumbBorderRadius: `0`,
      webkitScrollbarThumbBorder: `none`,
      //scrollbar Hover
      // ==========================================================================
      hover: {
        pointerEvents: `all`,
        //scrollbar
        scrollbarColor: `rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.3)`,
        //scrollbar thumb
        webkitScrollbarThumbBgColor: `rgba(0, 0, 0, 0.3)`
      }
    }
  }
};
export { Dialog };
