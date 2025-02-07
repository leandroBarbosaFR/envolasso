// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Nav:
// ==========================================================================
export type Nav = {
  // ==========================================================================
  // Nav Styles
  // ==========================================================================
  display: string;
  background: string;

  mobile: {
    width: string;
    justifyContent: string;
    flexWrap: string;
    gap: string;
    margin: string;
    padding: string;
    flexDirection?: string;
  };
  mobileLarge: {
    width: string;
    justifyContent: string;
    flexWrap: string;
    gap: string;
    margin: string;
    padding: string;
    flexDirection?: string;
  };
  tablet: {
    width: string;
    justifyContent: string;
    flexWrap: string;
    gap: string;
    margin: string;
    padding: string;
    flexDirection?: string;
  };
  desktop: {
    width: string;
    justifyContent: string;
    flexWrap: string;
    gap: string;
    margin: string;
    padding: string;
    flexDirection?: string;
  };
  widescreen: {
    width: string;
    justifyContent: string;
    flexWrap: string;
    gap: string;
    margin: string;
    padding: string;
    flexDirection?: string;
  };
  // ==========================================================================
  // StyledHeading
  // ==========================================================================
  StyledHeading: {
    as: string;
    variant: string;
    color: string;
    mobile: {
      margin: string;
    };
    mobileLarge: {
      margin: string;
    };
    tablet: {
      margin: string;
    };
    desktop: {
      margin: string;
    };
    widescreen: {
      margin: string;
    };
  };
  // ==========================================================================
  // siteNavButton
  // ==========================================================================
  button: {
    variant: string;
  };
  DropdownMenuList: {
    layoutVariant: string;
  };
  // ==========================================================================
  // Button - internalLinkButton
  // ==========================================================================
  internalLinkButton: {
    variant: string;
    withText: boolean;
    iconPosition: string;
    withIcon: boolean;
    iconName: string;
  };
  // ==========================================================================
  // Button - internalAccountLink
  // ==========================================================================
  internalAccountLink: {
    variant: string;
    withText: boolean;
    iconPosition: string;
    withIcon: boolean;
    iconName: string;
  };
  // ==========================================================================
  // Button - externalLink
  // ==========================================================================
  externalLink: {
    variant: string;
    withText: boolean;
    iconPosition: string;
    withIcon: boolean;
    iconName: string;
  };
  // ==========================================================================
  // Button - navigationDropdown
  // ==========================================================================
  navigationDropdown: {
    variant: string;
    withText: boolean;
    withIcon: boolean;
    iconName: string;
    iconNameActive: string;
    iconPosition: string;
  };
};

export type NavTheme = Record<layoutVariant, Nav>;
