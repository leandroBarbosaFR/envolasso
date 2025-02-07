import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFooterLinks = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.display};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.alignItems};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.gap};
    // After
    position: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.position};
    &:after {
      content: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.content};
      width: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.width};
      height: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.height};
      background: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.background};
      position: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.position};
      bottom: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.top};
      left: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.left};
      right: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobile.after.right};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.display};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.gap};
    // After
    position: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.position};
    &:after {
      content: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.content};
      width: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.width};
      height: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.height};
      background: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.background};
      position: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.position};
      bottom: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.top};
      left: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.left};
      right: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.mobileLarge.after.right};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.display};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.alignItems};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.gap};
    // After
    position: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.position};
    &:after {
      content: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.content};
      width: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.width};
      height: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.height};
      background: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.background};
      position: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.position};
      bottom: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.top};
      left: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.left};
      right: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.tablet.after.right};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.display};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.gap};
    // After
    position: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.position};
    &:after {
      content: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.content};
      width: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.width};
      height: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.height};
      background: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.background};
      position: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.position};
      bottom: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.top};
      left: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.left};
      right: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.desktop.after.right};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.display};
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.alignItems};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.padding};
    gap: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.gap};
    // After
    position: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.position};
    &:after {
      content: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.content};
      width: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.width};
      height: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.height};
      background: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.background};
      position: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.position};
      bottom: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.top};
      left: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.left};
      right: ${({ layoutVariant, theme }) =>
        theme.SiteFooter[layoutVariant!].StyledFooterLinks.widescreen.after.right};
    }
  }
`;

export default StyledFooterLinks;
