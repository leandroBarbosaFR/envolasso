import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSpotify = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledSpotify.display};
  justify-content: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledSpotify.justifyContent};

  div,
  figure,
  iframe,
  object,
  embed {
    width: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledSpotify.embedWidth};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledSpotify;
