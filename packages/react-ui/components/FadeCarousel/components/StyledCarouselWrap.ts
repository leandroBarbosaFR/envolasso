import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCarouselWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.position};
  z-index: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.zIndex};
  top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.top};
  right: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.right};
  left: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.left};
  bottom: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.bottom};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.mobile.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobile.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobile.maxHeight};
    overflow: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobile.overflow};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobileLarge.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobileLarge.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobileLarge.maxHeight};
    overflow: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.mobileLarge.overflow};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.tablet.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.tablet.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.tablet.maxHeight};
    overflow: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.tablet.overflow};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].StyledCarouselWrap.desktop.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.desktop.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.desktop.maxHeight};
    overflow: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.desktop.overflow};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.widescreen.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.widescreen.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.widescreen.maxHeight};
    overflow: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledCarouselWrap.widescreen.overflow};
  }
`;

export default StyledCarouselWrap;
