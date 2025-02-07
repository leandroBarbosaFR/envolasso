import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNewsletterFormWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledNewsletterFormWrap.widescreen.padding};
  }
`;

export default StyledNewsletterFormWrap;
