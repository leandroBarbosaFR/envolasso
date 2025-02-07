import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledBackButton = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.zIndex};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.pointerEvents};
  top: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.top};
  left: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.left};
  right: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.right};
  bottom: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.bottom};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobile.bottom};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.mobileLarge.bottom};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.tablet.bottom};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.desktop.bottom};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.widescreen.bottom};
  }
`;
export default StyledBackButton;
