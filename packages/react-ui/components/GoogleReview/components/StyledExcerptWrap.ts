import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledExcerptWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledExcerptWrap.widescreen.padding};
  }
`;
export default StyledExcerptWrap;
