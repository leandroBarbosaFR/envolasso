import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledVideo = styled.iframe<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  width: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledVideo.width};
  height: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledVideo
      .height}; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledVideo.minHeight};
  min-width: ${({ layoutVariant, theme }) =>
    theme.HomeCarouselItem[layoutVariant!].StyledVideo
      .minWidth}; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledVideo.position};
  top: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledVideo.top};
  left: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledVideo.left};
  transform: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledVideo.transform};

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
