// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// NavDraw
// ======================================================================
export type NavDraw = {
  // ==========================================================================
  // StyledNavDraw
  // ==========================================================================
  StyledNavDraw: {
    height: string;
    position: string;
    zIndex: string;
    top: string;
    left: string;
    bottom: string;
    right: string;
    background: string;
    NavList: {
      layoutVariant: string;
    };
  };
};

export type NavDrawTheme = Record<layoutVariant, NavDraw>;
