import { colors } from '../variables';

const Pagination = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // AgencyIcons
    // ==========================================================================
    AgencyIcons: {
      layoutVariant: `default`
    },
    // ==========================================================================
    // StyledNav
    // ==========================================================================
    StyledNav: {
      mobile: {
        padding: `0`,
        margin: `0 0 30px`
      },
      mobileLarge: {
        padding: ``,
        margin: `0 0 30px`
      },
      tablet: {
        padding: ``,
        margin: `0 0 40px`
      },
      desktop: {
        padding: ``,
        margin: `0 0 45px`
      },
      widescreen: {
        padding: ``,
        margin: `0 0 70px`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      color: `inherit`,
      isFluid: true,
      // Fluid Container
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // Container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledPagination
    // ==========================================================================
    StyledPagination: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      mobile: {
        gap: `10px`
      },
      mobileLarge: {
        gap: ``
      },
      tablet: {
        gap: ``
      },
      desktop: {
        gap: ``
      },
      widescreen: {
        gap: ``
      }
    },
    // ==========================================================================
    // StyledPaginationItem
    // ==========================================================================
    StyledPaginationItem: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      mobile: {
        gap: `3px`,
        height: `25px`,
        width: `25px`
      },
      mobileLarge: {
        gap: ``,
        height: ``,
        width: ``
      },
      tablet: {
        gap: ``,
        height: `30px`,
        width: `30px`
      },
      desktop: {
        gap: ``,
        height: `35px`,
        width: `35px`
      },
      widescreen: {
        gap: ``,
        height: `40px`,
        width: `40px`
      }
    },
    // ==========================================================================
    // StyledIconButton
    // ==========================================================================
    StyledIconButton: {
      all: `unset`,
      cursor: `pointer`,
      display: `block`,
      padding: `0`,
      margin: `0`,
      border: `none`,
      borderRadius: `0`,
      background: `none`,
      svg: {
        transition: `0.3s ease-in-out`,
        fill: `${colors.white}`
      },
      hover: {
        svg: {
          opacity: `0.8`,
          fill: `${colors.white}`
        }
      },
      disabled: {
        pointerEvents: `none`,
        svg: {
          opacity: `0.2`,
          Ffill: `${colors.white}`
        }
      },
      // Responsive
      mobile: {
        height: `13px`,
        width: `13px`,
        svg: {
          height: `13px`,
          width: `13px`
        }
      },
      mobileLarge: {
        height: `14px`,
        width: `14px`,
        svg: {
          height: `14px`,
          width: `14px`
        }
      },
      tablet: {
        height: `14px`,
        width: `14px`,
        svg: {
          height: `14px`,
          width: `14px`
        }
      },
      desktop: {
        height: `15px`,
        width: `15px`,
        svg: {
          height: `15px`,
          width: `15px`
        }
      },
      widescreen: {
        height: `16px`,
        width: `16px`,
        svg: {
          height: `16px`,
          width: `16px`
        }
      }
    },
    // ==========================================================================
    // StyledPaginationBtn
    // ==========================================================================
    StyledPaginationBtn: {
      all: `unset`,
      cursor: `pointer`,
      textAlign: `center`,
      display: ``,
      padding: `0`,
      margin: `0`,
      border: `none`,
      borderRadius: ``,
      color: `${colors.white}`,
      background: colors.transparent,
      transition: `0.3s ease-in-out`,
      active: {
        color: `${colors.white}`,
        background: `${colors.transparent}`
      },
      hover: {
        color: `${colors.white}`,
        background: `${colors.transparent}`
      },
      disabled: {
        pointerEvents: `none`,
        color: `${colors.white}`,
        background: `${colors.transparent}`
      },
      // Responsive
      mobile: {
        height: ``,
        width: ``,
        fontSize: `12px`,
        lineHeight: `12px`
      },
      mobileLarge: {
        height: ``,
        width: ``,
        fontSize: `12px`,
        lineHeight: `12px`
      },
      tablet: {
        height: ``,
        width: ``,
        fontSize: `14px`,
        lineHeight: `14px`
      },
      desktop: {
        height: ``,
        width: ``,
        fontSize: `15px`,
        lineHeight: `15px`
      },
      widescreen: {
        height: ``,
        width: ``,
        fontSize: `16px`,
        lineHeight: `16px`
      }
    },
    // ==========================================================================
    // StyledDots
    // ==========================================================================
    StyledDots: {
      background: `${colors.white}`,
      borderRadius: `50%`,
      // Responsive
      mobile: {
        height: `5px`,
        width: `5px`
      },
      mobileLarge: {
        height: ``,
        width: ``
      },
      tablet: {
        height: ``,
        width: ``
      },
      desktop: {
        height: ``,
        width: ``
      },
      widescreen: {
        height: ``,
        width: ``
      }
    }
  }
};

export { Pagination };
