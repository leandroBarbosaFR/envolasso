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
      background: `linear-gradient(0deg, #96DDFF 25%, #d0edfb 100%)`,

      NavList: {
        layoutVariant: `navDrawNavList`
      }
    }
  }
};

export { NavDraw };
