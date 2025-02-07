import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledFeedGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.pointerEvents};
  user-select: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.userSelect};
  -webkit-user-select: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.userSelect};
  -khtml-user-select: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.userSelect};
  -moz-user-select: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.userSelect};
  -o-user-select: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.userSelect};
  position: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.position};
  display: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.display};
  align-items: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.alignItems};
  grid-template-columns: ${({ variant, theme }) =>
    theme.TeamProfileFeedSection[variant!].StyledFeedGrid.gridTemplateColumns};
  z-index: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.mobile.gridRow};

    grid-column-gap: ${({ withColGapp, variant, theme }) =>
      withColGapp ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, variant, theme }) =>
      withRowGap ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobile.rowGap : '0'};
    margin: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobile.margin};
    padding: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.mobileLarge.gridRow};

    grid-column-gap: ${({ withColGapp, variant, theme }) =>
      withColGapp ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, variant, theme }) =>
      withRowGap ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobileLarge.rowGap : '0'};
    margin: ${({ variant, theme }) =>
      theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobileLarge.margin};
    padding: ${({ variant, theme }) =>
      theme.TeamProfileFeedSection[variant!].StyledFeedGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.tablet.gridRow};

    grid-column-gap: ${({ withColGapp, variant, theme }) =>
      withColGapp ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, variant, theme }) =>
      withRowGap ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.tablet.rowGap : '0'};
    margin: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.tablet.margin};
    padding: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.desktop.gridRow};

    grid-column-gap: ${({ withColGapp, variant, theme }) =>
      withColGapp ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, variant, theme }) =>
      withRowGap ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.desktop.rowGap : '0'};
    margin: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.desktop.margin};
    padding: ${({ variant, theme }) => theme.TeamProfileFeedSection[variant!].StyledFeedGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.widescreen.gridRow};

    grid-column-gap: ${({ withColGapp, variant, theme }) =>
      withColGapp ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, variant, theme }) =>
      withRowGap ? theme.TeamProfileFeedSection[variant!].StyledFeedGrid.widescreen.rowGap : '0'};
    margin: ${({ variant, theme }) =>
      theme.TeamProfileFeedSection[variant!].StyledFeedGrid.widescreen.margin};
    padding: ${({ variant, theme }) =>
      theme.TeamProfileFeedSection[variant!].StyledFeedGrid.widescreen.padding};
  }
`;

export default StyledFeedGrid;
