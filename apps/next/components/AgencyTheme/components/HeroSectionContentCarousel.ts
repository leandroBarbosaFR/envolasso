import { colors } from '../variables/';

const HeroSectionContentCarousel = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      display: ``,
      alignItems: ``,
      position: `relative`,
      overflow: `hidden`,
      background: `${colors.grey}`,
      mobile: {
        height: `100vh`,
        margin: ``,
        padding: `0`,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: ``,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: ``,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``,
        Before: {
          height: ``,
          width: ``
        },
        After: {
          height: ``,
          width: ``
        }
      },
      // Before
      // ==========================================================================
      Before: {
        // zIndex: `0`,
        // content: ``,
        // height: `0`,
        // width: `0`,
        // position: ``,
        // top: `0`,
        // left: `0`,
        // pointerEvents: `none`,
        // background: ``
      },
      After: {
        // zIndex: `1`,
        // content: `""`,
        // height: `100%`,
        // width: `200px`,
        // position: `absolute`,
        // top: `0`,
        // right: `0`,
        // pointerEvents: `none`,
        // background: `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%)`
      }
    },
    // ==========================================================================
    // StyledHeroSection
    // ==========================================================================
    StyledHeroSection: {
      position: `relative`,
      height: `100vh`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // Carousel: SlideCarousel
    // ==========================================================================
    SlideCarousel: {
      layoutVariant: `default`,
      withLoop: true,
      withArrowButton: false,
      withThumbnails: true,
      autoSlide: true
    },
    // ==========================================================================
    // Carousel: FadeCarousel
    // ==========================================================================
    FadeCarousel: {
      layoutVariant: `default`,
      withLoop: true,
      withArrowButton: false,
      withThumbnails: true,
      autoSlide: true
    }
  }
};

export { HeroSectionContentCarousel };
