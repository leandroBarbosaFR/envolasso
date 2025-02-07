import { colors } from '../variables';
// ==========================================================================
// HomeCarouselItem Styles
// ==========================================================================
const HomeCarouselItem = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledCarouselItem
    // ==========================================================================
    StyledCarouselItem: {
      width: `100%`,
      height: `100%`,
      objectFit: `cover`
    },
    // ==========================================================================
    // StyledMediaWrapper
    // ==========================================================================
    StyledMediaWrapper: {
      position: `absolute`,
      // zIndex: `0`,
      height: `100%`,
      width: `100%`,
      top: `0`,
      bottom: `0`,
      right: `0`,
      left: `0`,
      pointerEvents: `none`,
      overflow: `hidden`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `initial`,
      backgroundPosition: `center`,
      backgroundSize: `cover`
    },
    // ==========================================================================
    // StyledVideo
    // ==========================================================================
    StyledVideo: {
      width: `100vw`,
      height: `66.7vw`,
      minHeight: `100vh`,
      minWidth: `150vh`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  fullScreen: {
    // ==========================================================================
    // StyledCarouselItem
    // ==========================================================================
    StyledCarouselItem: {
      width: `100%`,
      height: `100%`,
      objectFit: `cover`
    },
    // ==========================================================================
    // StyledMediaWrapper
    // ==========================================================================
    StyledMediaWrapper: {
      // zIndex: `0`,
      position: `absolute`,
      height: `100%`,
      width: `100%`,
      top: `0`,
      bottom: `0`,
      right: `0`,
      left: `0`,
      pointerEvents: `none`,
      overflow: `hidden`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `initial`,
      backgroundPosition: `center`,
      backgroundSize: `cover`
    },
    // ==========================================================================
    // StyledVideo
    // ==========================================================================
    StyledVideo: {
      width: `100vw`,
      height: `66.7vw`,
      minHeight: `100vh`,
      minWidth: `150vh`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  heroCarousel: {
    // ==========================================================================
    // StyledCarouselItem
    // ==========================================================================
    StyledCarouselItem: {
      width: `100%`,
      height: `100%`,
      objectFit: `cover`,
      boxShadow: `inset 0 -65px 65px -75px ${colors.black}`
    },
    // ==========================================================================
    // StyledMediaWrapper
    // ==========================================================================
    StyledMediaWrapper: {
      position: `absolute`,
      // zIndex: `0`,
      height: `100%`,
      width: `100%`,
      top: `0`,
      bottom: `0`,
      right: `0`,
      left: `0`,
      pointerEvents: `none`,
      overflow: `hidden`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `initial`,
      backgroundPosition: `center`,
      backgroundSize: `cover`
    },
    // ==========================================================================
    // StyledVideo
    // ==========================================================================
    StyledVideo: {
      width: `100vw`,
      height: `66.7vw`,
      minHeight: `100vh`,
      minWidth: `150vh`,
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    }
  }
};

export { HomeCarouselItem };
