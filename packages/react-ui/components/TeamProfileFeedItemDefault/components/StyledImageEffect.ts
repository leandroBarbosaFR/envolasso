import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImageEffect = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  /* height: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.height};
  overflow: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.overflow};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.borderRadius}; */

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    /* grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobile.padding}; */
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    /* grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.mobileLarge.padding}; */
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    /* grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.tablet.padding}; */
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    /* grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.desktop.padding}; */
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    /* grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledImage.widescreen.padding}; */
  }
`;
export default StyledImageEffect;
