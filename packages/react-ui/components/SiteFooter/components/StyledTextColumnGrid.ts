import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledTextColumnGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobile.gridRow};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobile.rowGap : '0'};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobileLarge.gridRow};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.tablet.gridRow};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.desktop.gridRow};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.widescreen.gridRow};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.widescreen.rowGap : '0'};
  }
`;
export default StyledTextColumnGrid;
