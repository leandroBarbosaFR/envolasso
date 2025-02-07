// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Article:
// ==========================================================================
export type Article = {
  familyHeading?: string;
  weightHeading?: number;
  colorHeading?: string;
  family: string;
  weight: number;
  familyBold: string;
  weightBold: number;
  fontColorBlockquote?: string;
  familyBlockquote: string;
  weightBlockquote: number;
  ulLi: {
    listStyle?: string;
    listStylePosition?: string;
    display?: string;
    gap?: string;
    flexDirection?: string;
    position?: string;
    before: {
      familyHeading?: string;
      counterIncrement?: string;
      content?: string;
      flex?: string;
      borderRadius?: string;
      color?: string;
      display?: string;
      justifyContent?: string;
      alignItems?: string;
      background?: string;
      backgroundImage?: string;
      border?: string;
    };
  };
  olLi: {
    listStyle?: string;
    listStylePosition?: string;
    display?: string;
    gap?: string;
    flexDirection?: string;
    position?: string;
    before: {
      familyHeading?: string;
      counterIncrement?: string;
      content?: string;
      flex?: string;
      borderRadius?: string;
      color?: string;
      display?: string;
      justifyContent?: string;
      alignItems?: string;
      background?: string;
      backgroundImage?: string;
      border?: string;
    };
  };

  mobile: {
    size: string;
    lineHeight: string;
    letterSpacing: string;
    // UL OL
    ulOlLi: {
      marginLeft: string;
    };
    ulLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    olLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    blockquote: {
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
  };

  mobileLarge: {
    size: string;
    lineHeight: string;
    letterSpacing: string;
    // UL OL
    ulOlLi: {
      marginLeft: string;
    };
    ulLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    olLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    blockquote: {
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
  };

  tablet: {
    size: string;
    lineHeight: string;
    letterSpacing: string;
    // UL OL
    ulOlLi: {
      marginLeft: string;
    };
    ulLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    olLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    blockquote: {
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
  };

  desktop: {
    size: string;
    lineHeight: string;
    letterSpacing: string;
    // UL OL
    ulOlLi: {
      marginLeft: string;
    };
    ulLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    olLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    blockquote: {
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
  };

  widescreen: {
    size: string;
    lineHeight: string;
    letterSpacing: string;
    // UL OL
    ulOlLi: {
      marginLeft: string;
    };
    ulLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    olLi: {
      before: {
        size: string;
        weight: string;
        width: string;
        height: string;
        margin: string;
        padding: string;
      };
    };
    blockquote: {
      padding: string;
      border: string;
      borderTop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
    };
  };
  // multiples
  h1Multiple: string;
  h2Multiple: string;
  h3Multiple: string;
  h4Multiple: string;
  h5Multiple: string;
  h6Multiple: string;
  blockquoteMultiple: string;
};

export type ArticleTheme = Record<layoutVariant, Article>;
