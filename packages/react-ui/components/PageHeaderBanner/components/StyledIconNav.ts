import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledIconNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.zIndex};
  display: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.display};
  flex-wrap: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.flexWrap};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.bottom};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.widescreen.gap};
  }
`;
export default StyledIconNav;
