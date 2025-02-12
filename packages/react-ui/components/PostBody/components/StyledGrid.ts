import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.display};
  position: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.position};
  overflow: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.overflow};
  align-items: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.alignItems};

  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.PostBody[layoutVariant!].StyledGrid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostBody[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostBody[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostBody[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostBody[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostBody[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostBody[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostBody[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostBody[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PostBody[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PostBody[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
  }
`;
export default StyledGrid;
