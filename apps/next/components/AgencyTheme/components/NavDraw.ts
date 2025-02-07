import { colors } from '../variables';

const NavDraw = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledNavDraw
    // ==========================================================================
    StyledNavDraw: {
      height: `100vh`,
      position: `fixed`,
      zIndex: `9`,
      top: `0`,
      left: `0`,
      bottom: `0`,
      right: `0`,
      background: colors.black,
      NavList: {
        layoutVariant: `navDrawNavList`
      }
    }
  }
};

export { NavDraw };
