import { gridColGap } from '../variables/index';
const HorizontalFeed = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledFeedGrid
    // ==========================================================================
    StyledFeedGrid: {
      scrollBehaviour: `smooth`,
      overflowStyle: `none`,
      scrollbarWidth: `none`,
      overflowYStyle: `scroll`,
      scrollbarDisplay: `none`,
      display: `grid`,
      justifyContent: `start`,
      gridTemplateColumns: `auto auto`,
      gridAutoFlow: `column`,
      overflowX: `auto`,
      overflowY: `auto`,
      overscrollBehaviorX: `contain`,
      scrollSnapType: `x mandatory`,
      mobile: {
        gap: gridColGap.mobile,
        margin: `0 auto`,
        padding: ``
      },
      mobileLarge: {
        gap: gridColGap.mobileLarge,
        margin: `0 auto`,
        padding: ``
      },
      tablet: {
        gap: gridColGap.tablet,
        margin: ``,
        padding: ``
      },
      desktop: {
        gap: gridColGap.desktop,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gap: gridColGap.widescreen,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // HorizontalScrollBtn
    // ==========================================================================
    HorizontalScrollBtn: {
      StyledBtnWrap: {
        display: `flex`,
        justifyContent: `flex-end`,
        mobile: {
          gap: ``,
          margin: '',
          padding: '10px 0'
        },
        mobileLarge: {
          gap: ``,
          margin: '',
          padding: ''
        },
        tablet: {
          gap: `10px`,
          margin: '',
          padding: ''
        },
        desktop: {
          gap: ``,
          margin: '',
          padding: ''
        },
        widescreen: {
          gap: `15px`,
          margin: '',
          padding: ''
        },
        // Buttons pointers event needed for click
        arrowButton: {
          pointerEvents: `all`
        },
        // Buttons Variants Left
        arrowLeftButton: {
          variant: `HorizontalScrollBtn`,
          iconName: `arrowLeft`,
          withIcon: true,
          withText: false
        },
        // Buttons Variants Right
        arrowRightButton: {
          variant: `HorizontalScrollBtn`,
          iconName: `arrowRight`,
          withIcon: true,
          withText: false
        }
      }
    },
    // ==========================================================================
    // StyledFeedWrap
    // ==========================================================================
    StyledFeedWrap: {
      gridColumn: `1/13`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // StyledButtonPrevious
    // ==========================================================================
    PlaylistFeedItem: {
      layoutVariant: `default`
    }
  }
};
export { HorizontalFeed };
