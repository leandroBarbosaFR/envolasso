import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFooterSocialNav = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.display};
  align-items: ${({ layoutVariant, theme }) =>
    theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.alignItems};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.mobile.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.mobile.gridRow};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.mobileLarge.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.mobileLarge.gridRow};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.tablet.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.tablet.gridRow};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.desktop.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.desktop.gridRow};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.widescreen.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.widescreen.gridRow};
  }
`;
export default StyledFooterSocialNav;
