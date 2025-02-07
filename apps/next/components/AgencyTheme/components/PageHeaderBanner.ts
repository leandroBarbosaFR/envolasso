import { colors } from '../variables/';
// ==========================================================================
// PageHeaderBanner Styles
// ==========================================================================
const PageHeaderBanner = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    OptsSharePage: {
      layoutVariant: 'default'
    },
    // ==========================================================================
    // StyledPageHeaderBanner (Section)
    // ==========================================================================
    StyledPageHeaderSection: {
      position: `relative`,
      background: `${colors.white}`,
      mobile: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: `0`
      },
      mobileLarge: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledPageHeaderContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // Props settings
      isFluid: true,
      // fluidContainer
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},
      // After
      // ==========================================================================
      after: {
        content: `''`,
        position: `absolute`,
        zIndex: `1`,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        mixBlendMode: `multiply`,
        background: colors.white
      },
      ImageTag: {
        layoutVariant: `fullScreen`,
        fill: true,
        priority: true,
        placeholder: `blur`
      }
    },
    // ==========================================================================
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      position: `relative`,
      display: `grid`,
      gridTemplateColumns: ``,
      withRowGap: true,
      withColGapp: true,
      mobile: {
        height: `200px`,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        height: `250px`,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        height: `350px`,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        height: `400px`,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        height: `450px`,
        colGap: ``,
        rowGap: ``
      },
      StyledIconNav: {
        position: `absolute`,
        zIndex: `3`,
        right: `0`,
        display: `flex`,
        flexWrap: `wrap`,
        gap: `10px`,
        mobile: {
          bottom: `10px`
        },
        mobileLarge: {
          bottom: `20px`
        },
        tablet: {
          bottom: `20px`
        },
        desktop: {
          bottom: `30px`,
          gap: `15px`
        },
        widescreen: {
          bottom: ``,
          gap: ``
        },
        heartButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `heart`
        },
        surpriseMeButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `share`
        },
        cameraButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `camera`
        }
      }
    }
  },
  // ==========================================================================
  // layoutVariant: artistProfile
  // ==========================================================================
  artistProfile: {
    OptsSharePage: {
      layoutVariant: 'default'
    },
    // ==========================================================================
    // StyledPageHeaderBanner (Section)
    // ==========================================================================
    StyledPageHeaderSection: {
      position: `relative`,
      background: `${colors.white}`,
      mobile: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: `0`
      },
      mobileLarge: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledPageHeaderContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // Props settings
      isFluid: true,
      // fluidContainer
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      mobileLarge: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      tablet: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      desktop: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      widescreen: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      // After
      // ==========================================================================
      after: {
        content: ``,
        position: ``,
        zIndex: ``,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        mixBlendMode: ``,
        background: ``
      },
      ImageTag: {
        layoutVariant: `fullScreen`,
        fill: true,
        priority: true,
        placeholder: `blur`
      }
    },
    // ==========================================================================
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      position: `relative`,
      display: `grid`,
      gridTemplateColumns: ``,
      mobile: {
        height: `100px`
      },
      mobileLarge: {
        height: `150px`
      },
      tablet: {
        height: `250px`
      },
      desktop: {
        height: `300`
      },
      widescreen: {
        height: `350px`
      },
      StyledIconNav: {
        position: `absolute`,
        zIndex: `3`,
        display: `flex`,
        flexWrap: `wrap`,
        mobile: {
          bottom: `10px`
        },
        mobileLarge: {
          right: `0`,
          bottom: `20px`,
          gap: `10px`
        },
        tablet: {
          bottom: `20px`
        },
        desktop: {
          bottom: `30px`,
          gap: `15px`
        },
        widescreen: {
          bottom: ``,
          gap: ``
        },
        heartButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `heart`
        },
        surpriseMeButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `share`
        },
        cameraButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `camera`
        }
      }
    }
  },
  // ==========================================================================
  // layoutVariant: composerProfile
  // ==========================================================================
  composerProfile: {
    OptsSharePage: {
      layoutVariant: 'default'
    },
    // ==========================================================================
    // StyledPageHeaderBanner (Section)
    // ==========================================================================
    StyledPageHeaderSection: {
      position: `relative`,
      background: `${colors.white}`,
      mobile: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: `0`
      },
      mobileLarge: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledPageHeaderContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // Props settings
      isFluid: true,
      // fluidContainer
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},
      // After
      // ==========================================================================
      after: {
        content: ``,
        position: ``,
        zIndex: ``,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        mixBlendMode: ``,
        background: ``
      },
      ImageTag: {
        layoutVariant: `fullScreen`,
        fill: true,
        priority: true,
        placeholder: `blur`
      }
    },
    // ==========================================================================
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      position: `relative`,
      display: `grid`,
      gridTemplateColumns: ``,
      mobile: {
        height: `100px`
      },
      mobileLarge: {
        height: `150px`
      },
      tablet: {
        height: `250px`
      },
      desktop: {
        height: `300`
      },
      widescreen: {
        height: `350px`
      },
      StyledIconNav: {
        position: `absolute`,
        zIndex: `3`,
        right: `0`,
        display: `flex`,
        flexWrap: `wrap`,
        gap: `10px`,
        mobile: {
          bottom: `10px`
        },
        mobileLarge: {
          bottom: `20px`
        },
        tablet: {
          bottom: `20px`
        },
        desktop: {
          bottom: `30px`,
          gap: `15px`
        },
        widescreen: {
          bottom: ``,
          gap: ``
        },
        heartButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `heart`
        },
        surpriseMeButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `share`
        },
        cameraButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `camera`
        }
      }
    }
  },
  // ==========================================================================
  // layoutVariant: mentorProfile
  // ==========================================================================
  mentorProfile: {
    OptsSharePage: {
      layoutVariant: 'default'
    },
    // ==========================================================================
    // StyledPageHeaderBanner (Section)
    // ==========================================================================
    StyledPageHeaderSection: {
      position: `relative`,
      background: `${colors.white}`,
      mobile: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: `0`
      },
      mobileLarge: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        minHeight: ``,
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledPageHeaderContainer
    // ==========================================================================
    StyledPageHeaderContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // Props settings
      isFluid: true,
      // fluidContainer
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      position: `absolute`,
      zIndex: `1`,
      mobile: {
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},
      // After
      // ==========================================================================
      after: {
        content: ``,
        position: ``,
        zIndex: ``,
        top: `0`,
        bottom: `0`,
        right: `0`,
        left: `0`,
        mixBlendMode: ``,
        background: ``
      },
      ImageTag: {
        layoutVariant: `fullScreen`,
        fill: true,
        priority: true,
        placeholder: `blur`
      }
    },
    // ==========================================================================
    // StyledPageHeaderGrid
    // ==========================================================================
    StyledPageHeaderGrid: {
      gridTemplateColumns: ``,
      position: `relative`,
      display: `grid`,
      mobile: {
        height: `100px`
      },
      mobileLarge: {
        height: `150px`
      },
      tablet: {
        height: `250px`
      },
      desktop: {
        height: `300`
      },
      widescreen: {
        height: `350px`
      },
      StyledIconNav: {
        position: `absolute`,
        zIndex: `3`,
        right: `0`,
        display: `flex`,
        flexWrap: `wrap`,
        gap: `10px`,
        mobile: {
          bottom: `10px`
        },
        mobileLarge: {
          bottom: `20px`
        },
        tablet: {
          bottom: `20px`
        },
        desktop: {
          bottom: `30px`,
          gap: `15px`
        },
        widescreen: {
          bottom: ``,
          gap: ``
        },
        heartButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `heartFill`
        },
        surpriseMeButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `share`
        },
        cameraButton: {
          variant: `buttonIconSecondary`,
          withIcon: true,
          withText: false,
          iconName: `camera`
        }
      }
    }
  }
};
export { PageHeaderBanner };
