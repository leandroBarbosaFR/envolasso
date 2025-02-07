import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledMediaWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background-image: ${({ heroFirstFrameImage }) => `url(${heroFirstFrameImage})`};
  position: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.position};
  top: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.top};
  left: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.left};
  width: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.width};
  height: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.height};
  z-index: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.zIndex};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.pointerEvents};
  overflow: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.overflow};
  background-repeat: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.backgroundRepeat};
  background-attachment: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.backgroundAttachment};
  background-size: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledMediaWrapper.backgroundSize};

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
