import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledVimeo = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.position};
  padding: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.padding};
  width: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.width};
  height: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.height};
  overflow: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.overflow};
  div,
  figure,
  iframe,
  object,
  embed {
    position: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.embed.position};
    top: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.embed.top};
    left: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.embed.left};
    width: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.embed.width};
    height: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.embed.height};
    border: ${({ layoutVariant, theme }) => theme.Embed[layoutVariant!].StyledVimeo.embed.border};
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

export default StyledVimeo;
