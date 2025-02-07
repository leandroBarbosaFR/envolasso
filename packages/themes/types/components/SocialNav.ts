// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// SocialNav:
// ==========================================================================
export type SocialNav = {
  display: string;
  mobile: {
    flexDirection: string;
    justifyContent: string;
    gap: string;
    margin: string;
    padding: string;
  };
  mobileLarge: {
    flexDirection: string;
    justifyContent: string;
    gap: string;
    margin: string;
    padding: string;
  };
  tablet: {
    flexDirection: string;
    justifyContent: string;
    gap: string;
    margin: string;
    padding: string;
  };
  desktop: {
    flexDirection: string;
    justifyContent: string;
    gap: string;
    margin: string;
    padding: string;
  };
  widescreen: {
    flexDirection: string;
    justifyContent: string;
    gap: string;
    margin: string;
    padding: string;
  };
};

export type SocialNavTheme = Record<layoutVariant, SocialNav>;
