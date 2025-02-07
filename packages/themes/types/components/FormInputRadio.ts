// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// FormInputRadio:
// ==========================================================================
export type FormInputRadio = {
    // ==========================================================================
    // StyledRadio
    // ==========================================================================
    StyledRadio: {
      display: string
      justifyContent: string
      alignItems: string
      gap: string
      width: string
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledLabel: {
      position: string
      fontColor: string
      fontFamily: string
      fontWeight: number
      textTransform: string
      textAlign: string
      background: string
      display: string
      width: string
      cursor: string
      userSelect: string
      mobile: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
      },
      mobileLarge: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
      },
      tablet: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
      },
      desktop: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
      },
      widescreen: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
      }
    },

    // ==========================================================================
    // StyledRadio
    // ==========================================================================
    radio: {
      height: string
      width: string
      border: string
      borderRadius: string
      background: string
      /* Create the checkmark/indicator (hidden when not checked) */
      Span: {
        width: string
        height: string
        display: string
        border: string
        borderRadius: string
        margin: string
      },
      /* When the radio add color */
      SpanActive: {
        background: string
      }
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledInput: {
      position: string
      opacity: string
      cursor: string
      height: string
      width: string
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledErrorMessage: {
      position: string
      fontColor: string
      fontFamily: string
      fontWeight: number
      textTransform: string
      textAlign: string
      background: string
      display: string
      width: string
      transition: string
      mobile: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
        top: string
        bottom: string
        left: string
        right: string
      },
      mobileLarge: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
        top: string
        bottom: string
        left: string
        right: string
      },
      tablet: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
        top: string
        bottom: string
        left: string
        right: string
      },
      desktop: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
        top: string
        bottom: string
        left: string
        right: string
      },
      widescreen: {
        fontSize: string
        lineHeight: string
        letterSpacing: string
        margin: string
        padding: string
        borderRadius: string
        border: string
        borderTop: string
        borderRight: string
        borderBottom: string
        borderLeft: string
        top: string
        bottom: string
        left: string
        right: string
      }
    }
  }

export type FormInputRadioTheme = Record<layoutVariant, FormInputRadio>;
