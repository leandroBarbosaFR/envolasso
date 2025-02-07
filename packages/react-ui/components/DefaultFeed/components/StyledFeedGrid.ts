import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledFeedGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.DefaultFeed[layoutVariant!].StyledFeedGrid.pointerEvents};
  user-select: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -webkit-user-select: ${({ layoutVariant, theme }) =>
    theme.DefaultFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -khtml-user-select: ${({ layoutVariant, theme }) =>
    theme.DefaultFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -moz-user-select: ${({ layoutVariant, theme }) =>
    theme.DefaultFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -o-user-select: ${({ layoutVariant, theme }) =>
    theme.DefaultFeed[layoutVariant!].StyledFeedGrid.userSelect};
  display: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.display};
  align-items: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.alignItems};
  z-index: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.zIndex};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.DefaultFeed[layoutVariant!].StyledFeedGrid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobile.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobileLarge.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.tablet.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.desktop.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.DefaultFeed[layoutVariant!].StyledFeedGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.widescreen.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.DefaultFeed[layoutVariant!].StyledFeedGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DefaultFeed[layoutVariant!].StyledFeedGrid.widescreen.padding};
  }
`;

export default StyledFeedGrid;
