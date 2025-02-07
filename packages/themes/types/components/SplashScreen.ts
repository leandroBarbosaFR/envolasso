// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Button:
// ==========================================================================
export type SplashScreen = {
  logo: {
    LogoName: string;
  };
};

export type SplashScreenTheme = Record<layoutVariant, SplashScreen>;
