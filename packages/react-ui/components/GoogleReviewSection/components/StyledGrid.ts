import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBAse from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBAse)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.GoogleReviewSection[layoutVariant!].StyledGrid.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.GoogleReviewSection[layoutVariant!].StyledGrid.gridTemplateColumns};
  position: ${({ layoutVariant, theme }) => theme.GoogleReviewSection[layoutVariant!].StyledGrid.position};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.GoogleReviewSection[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
  }
`;
export default StyledGrid;
