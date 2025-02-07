import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.display};
  align-items: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.alignItems};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.IndexPageHeader[layoutVariant!].StyledGrid.gridTemplateColumns};
  z-index: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.IndexPageHeader[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.IndexPageHeader[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.IndexPageHeader[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.IndexPageHeader[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.IndexPageHeader[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.IndexPageHeader[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.IndexPageHeader[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.IndexPageHeader[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.IndexPageHeader[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.IndexPageHeader[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledGrid.widescreen.padding};
    grid-template-columns: repeat(15, 1fr);
  }
`;

export default StyledGrid;
