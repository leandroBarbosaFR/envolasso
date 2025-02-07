import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledPageHeaderGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.pointerEvents};
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.position};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.zIndex};
  display: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.rowGap : '0'};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.right};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.rowGap : '0'};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.right};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.rowGap : '0'};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.right};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.rowGap : '0'};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.right};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.rowGap : '0'};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.right};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.widescreen.padding};
  }
`;
export default StyledPageHeaderGrid;
