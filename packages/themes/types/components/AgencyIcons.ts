// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// AgencyIcons:
// ==========================================================================
export type AgencyIcons = {
  // ==========================================================================
  // StyledIcons
  // ==========================================================================
  StyledIcon: {
    all: string;
    display: string;
    height: string;
    width: string;
  };
};

export type AgencyIconsTheme = Record<layoutVariant, AgencyIcons>;
