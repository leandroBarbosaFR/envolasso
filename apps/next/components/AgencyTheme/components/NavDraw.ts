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
      background: `rgba(0,0,0,0.95)`,

      NavList: {
        layoutVariant: `navDrawNavList`
      }
    }
  }
};

export { NavDraw };
