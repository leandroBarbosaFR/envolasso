import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFooterLinksLogos = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.display};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.flexWrap};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.display};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.flexWrap};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.padding};
    gap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.display};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.flexWrap};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.display};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.flexWrap};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.justifyContent};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.display};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.flexWrap};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.padding};
    gap: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinksLogos.widescreen.gap};
  }
`;

export default StyledFooterLinksLogos;
