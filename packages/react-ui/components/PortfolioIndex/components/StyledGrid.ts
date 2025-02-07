import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.display};
  align-items: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.alignItems};
  z-index: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.mobile.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.PortfolioIndex[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.PortfolioIndex[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.mobileLarge.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.PortfolioIndex[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.PortfolioIndex[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.tablet.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.PortfolioIndex[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.PortfolioIndex[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.desktop.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.PortfolioIndex[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.PortfolioIndex[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.PortfolioIndex[layoutVariant!].StyledGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.widescreen.gridTemplateColumns};
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.PortfolioIndex[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.PortfolioIndex[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledGrid.widescreen.padding};
  }
`;

export default StyledGrid;
