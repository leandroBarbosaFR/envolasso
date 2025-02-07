import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledVideo = styled.iframe<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  width: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.width};
  height: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledVideo
      .height}; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.minHeight};
  min-width: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledVideo
      .minWidth}; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.position};
  top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.top};
  left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.left};
  transform: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.transform};
  margin: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledVideo.margin};

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
