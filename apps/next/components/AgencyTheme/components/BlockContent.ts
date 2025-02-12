const BlockContent = {
  // ==========================================================================
  // variant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Accordion
    // ==========================================================================
    Accordion: {
      layoutVariant: 'default'
    },
    // ==========================================================================
    // BlockQuote
    // ==========================================================================
    BlockQuote: {
      layoutVariant: 'quote'
    },
    // ==========================================================================
    // HorizontalFeed
    // ==========================================================================
    HorizontalFeed: {
      layoutVariant: 'defaultBlockContent'
    },
    // ==========================================================================
    // CtaNav
    // ==========================================================================
    CtaNav: {
      layoutVariant: 'default'
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      overflow: 'hidden',
      mobile: {
        gridColumn: `span 6`,
        gridRow: ``,
        margin: `0 0 20px`,
        padding: ``,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      mobileLarge: {
        margin: `0 0 22px`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      tablet: {
        margin: `0 0 24px`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      desktop: {
        margin: `0 0 26px`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      widescreen: {
        margin: `0 0 28px`,
        borderTopLeftRadius: ``,
        borderTopRightRadius: ``,
        borderBottomLeftRadius: ``,
        borderBottomRightRadius: ``
      },
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsive`,
        fit: ``,
        width: 300,
        height: 300,
        cropWidth: 300,
        cropHeight: 300,
        fill: false,
        priority: true
      }
    },
    // ==========================================================================
    // internalFile
    // ==========================================================================
    internalFile: {
      variant: `ButtonLinkPrimary`,
      withIcon: true,
      withIconSecondary: true,
      withText: true,
      iconName: `fileDownload`,
      iconNameSecondary: `arrowDown2`,
      iconPosition: `left`
    },
    // ==========================================================================
    // StyledImageGrid
    // ==========================================================================
    StyledImageGrid: {
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: `repeat(12,1fr)`,
      display: `grid`,
      mobile: {
        height: ``,
        colGap: ``,
        rowGap: `10px`,
        margin: ``
      },
      mobileLarge: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``
      },
      tablet: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``
      },
      desktop: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``
      },
      widescreen: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``
      }
    }
  }
};

export { BlockContent };
