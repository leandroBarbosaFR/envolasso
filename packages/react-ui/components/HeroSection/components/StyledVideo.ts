import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledVideo = styled.iframe<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.width};
  height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.height};
  min-height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.minHeight};
  min-width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.minWidth};
  position: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.position};
  top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.top};
  left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.left};
  transform: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledVideo.transform};

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
export default StyledVideo;
