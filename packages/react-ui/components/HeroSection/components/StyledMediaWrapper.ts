import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledMediaWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background-image: ${({ heroFirstFrameImage }) => `url(${heroFirstFrameImage})`};
  position: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.position};
  z-index: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.zIndex};
  width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.width};
  height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.height};
  top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.top};
  left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.left};
  bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.bottom};
  right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.right};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledMediaWrapper.pointerEvents};
  overflow: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledMediaWrapper.overflow};
  background-repeat: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledMediaWrapper.backgroundRepeat};
  background-attachment: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledMediaWrapper.backgroundAttachment};
  background-position: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledMediaWrapper.backgroundPosition};
  background-size: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledMediaWrapper.backgroundSize};

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
export default StyledMediaWrapper;
