import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledIconNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.zIndex};
  display: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.display};
  flex-wrap: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.flexWrap};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.pointerEvents};
  top: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.top};
  left: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.left};
  right: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.right};
  bottom: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.bottom};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.gap};
  }
`;
export default StyledIconNav;
