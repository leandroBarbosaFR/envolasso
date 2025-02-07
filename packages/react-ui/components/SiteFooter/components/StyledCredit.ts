import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCredit = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledCredit.display};
  align-items: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledCredit.alignItems};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobile.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledCredit.mobile.gridRow};
    text-align: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobile.textAlign};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobile.justifyContent};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobileLarge.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobileLarge.gridRow};
    text-align: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobileLarge.textAlign};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.mobileLarge.justifyContent};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.tablet.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledCredit.tablet.gridRow};
    text-align: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.tablet.textAlign};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.tablet.justifyContent};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.desktop.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledCredit.desktop.gridRow};
    text-align: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.desktop.textAlign};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.desktop.justifyContent};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    border-top: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.widescreen.borderTop};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.widescreen.gridRow};
    text-align: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.widescreen.textAlign};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledCredit.widescreen.justifyContent};
  }
`;

export default StyledCredit;
