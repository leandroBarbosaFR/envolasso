import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLogoWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledLogoWrap.display};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobile.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobile.gridRow};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobileLarge.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobileLarge.gridRow};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.tablet.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledLogoWrap.tablet.gridRow};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.desktop.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.desktop.gridRow};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.widescreen.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.widescreen.gridRow};
  }
`;
export default StyledLogoWrap;
