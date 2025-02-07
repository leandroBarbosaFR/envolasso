import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.PortfolioSinglePage[layoutVariant!].StyledSection.background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledSection.widescreen.padding};
  }
`;
export default StyledSection;
