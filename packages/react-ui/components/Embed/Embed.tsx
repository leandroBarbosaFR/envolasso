import React from 'react';
import { EmbedServices } from '@agency-platform/shared-types';
import { EmbedSectionTheme } from '@agency-platform/themes';
import Vimeo from '@u-wave/react-vimeo';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Spotify from 'react-spotify-embed';
// Components
// Styles
import StyledSpotify from './components/StyledSpotify';
import StyledVimeo from './components/StyledVimeo';
import StyledYouTube from './components/StyledYouTube';

export interface EmbedProps {
  layoutVariant: keyof EmbedSectionTheme;
  embedServices: EmbedServices;
}

const Embed = ({ layoutVariant, embedServices }: EmbedProps) => {
  if (!embedServices) return null;
  const { emdedType, youTubeVideUrl, vimeoVideUrl, spotfiyPlayerUrl } = embedServices;

  const renderEmbed = () => {
    switch (emdedType) {
      case 'youtube':
        const id = getYouTubeId(youTubeVideUrl) || '';
        return (
          <StyledYouTube layoutVariant={layoutVariant}>
            <LiteYouTubeEmbed id={id} title={'YouTube Embed'} poster={'maxresdefault'} />
          </StyledYouTube>
        );
      case 'vimeo':
        return (
          <StyledVimeo layoutVariant={layoutVariant}>
            <Vimeo video={vimeoVideUrl} />
          </StyledVimeo>
        );
      case 'spotify':
        return (
          <StyledSpotify layoutVariant={layoutVariant}>
            <Spotify link={spotfiyPlayerUrl} />
          </StyledSpotify>
        );
      default:
        return null;
    }
  };
  return renderEmbed();
};

export default Embed;
