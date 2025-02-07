// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Embed:
// ==========================================================================
export type Embed = {
  // ==========================================================================
  // StyledYouTube
  // ==========================================================================
  StyledYouTube: {
    width: string;
    height: string;
    minHeight: string;
    minWidth: string;
    position: string;
    top: string;
    left: string;
    transform: string;
    margin: string;
  };
  // ==========================================================================
  // StyledVimeo
  // ==========================================================================
  StyledVimeo: {
    padding: string;
    overflow: string;

    width: string;
    height: string;
    minHeight: string;
    minWidth: string;
    position: string;
    top: string;
    left: string;
    transform: string;

    margin: string;
    embed: {
      position: string;
      top: string;
      left: string;
      width: string;
      height: string;
      border: string;
    };
  };
  // ==========================================================================
  // StyledSpotify
  // ==========================================================================
  StyledSpotify: {
    display: string;
    justifyContent: string;
    embedWidth: string;

    width: string;
    height: string;
    minHeight: string;
    minWidth: string;
    position: string;
    top: string;
    left: string;
    transform: string;
    margin: string;
  };
};

export type EmbedTheme = Record<layoutVariant, Embed>;
