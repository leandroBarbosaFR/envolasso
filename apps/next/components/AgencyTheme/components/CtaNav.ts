const CtaNav = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledCtaNav
    // ==========================================================================
    StyledCtaNav: {
      display: `flex`,
      flexWrap: ``,
      mobile: {
        flexDirection: ``,
        justifyContent: ``,
        gap: ``,
        padding: ``,
        flexWrap: ``,
        width: ``,
        columnGap: ``
      },
      mobileLarge: {
        flexDirection: ``,
        gap: ``,
        padding: ``,
        flexWrap: ``,
        width: ``,
        columnGap: ``
      },
      tablet: {
        flexDirection: ``,
        gap: ``,
        padding: ``,
        flexWrap: ``,
        justifyContent: ``,
        width: ``,
        columnGap: ``
      },
      desktop: {
        flexDirection: ``,
        flexWrap: ``
      },
      widescreen: {
        flexDirection: ``,
        flexWrap: ``
      }
    },

    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `secondary`,
      color: ``,
      display: ``,
      width: `100%`,
      mobile: {
        margin: `0;`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // Button
    // ==========================================================================
    Button: {
      buttonVariant: `buttonWhiteBorder`,
      withIcon: true,
      withText: true,
      iconName: `arrowRightNew`,
      iconPosition: `right`
    },
    StyledButtonLink: {
      mobile: { gridColumn: `span 5` },
      mobileLarge: { gridColumn: `span 5` },
      tablet: { gridColumn: `span 5` },
      desktop: { gridColumn: `1/13` },
      widescreen: { gridColumn: `1/13` }
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  alternative: {
    // ==========================================================================
    // StyledCtaNav
    // ==========================================================================
    StyledCtaNav: {
      display: `flex`,
      flexWrap: ``,
      mobile: {
        flexDirection: ``,
        justifyContent: ``,
        gap: ``,
        padding: ``,
        flexWrap: ``,
        width: ``,
        columnGap: ``
      },
      mobileLarge: {
        flexDirection: ``,
        gap: ``,
        padding: ``,
        flexWrap: ``,
        width: ``,
        columnGap: ``
      },
      tablet: {
        flexDirection: ``,
        gap: ``,
        padding: ``,
        flexWrap: ``,
        justifyContent: ``,
        width: ``,
        columnGap: ``
      },
      desktop: {
        flexDirection: ``,
        flexWrap: ``
      },
      widescreen: {
        flexDirection: ``,
        flexWrap: ``
      }
    },

    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `secondary`,
      color: ``,
      display: ``,
      width: `100%`,
      mobile: {
        margin: `0;`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // Button
    // ==========================================================================
    Button: {
      buttonVariant: `buttonPrimary`,
      withIcon: false,
      withText: true,
      iconName: ``,
      iconPosition: `left`
    },
    StyledButtonLink: {
      mobile: { gridColumn: `span 5` },
      mobileLarge: { gridColumn: `span 5` },
      tablet: { gridColumn: `span 5` },
      desktop: { gridColumn: `1/13` },
      widescreen: { gridColumn: `1/13` }
    }
  }
};

export { CtaNav };
