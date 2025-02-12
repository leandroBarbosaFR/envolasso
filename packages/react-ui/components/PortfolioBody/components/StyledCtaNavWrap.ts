import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.justifyContent};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.widescreen.padding};
  }
`;

export default StyledCtaNavWrap;
