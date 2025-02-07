import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  display: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.display};
  position: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.position};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.PageHeader[layoutVariant!].StyledGrid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeader[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeader[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeader[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeader[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeader[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeader[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeader[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeader[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeader[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeader[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledGrid.widescreen.margin};
  }
`;
export default StyledGrid;
