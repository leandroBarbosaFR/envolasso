import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledGrid.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledGrid.gridTemplateColumns};
  align-items: stretch;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostFeedItemDefault[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
  }
`;
export default StyledGrid;
