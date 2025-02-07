// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// FormInputMixed:
// ==========================================================================
export type FormInputPassword = {
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledShowPassword: {
    position: string;
    top: string;
    right: string;
    paddingRight?: string;
    Button: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
    };
  };
};

export type FormInputPasswordTheme = Record<layoutVariant, FormInputPassword>;
