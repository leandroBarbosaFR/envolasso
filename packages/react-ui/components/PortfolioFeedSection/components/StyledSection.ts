import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedSection[layoutVariant!].StyledSection.background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.mobile.padding};
    border-radius: 8px;
    overflow: hidden;
    margin: 6px;
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.desktop.padding};
    border-radius: 8px;
    overflow: hidden;
    margin: 26px;
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledSection.widescreen.padding};
  }
`;

export default StyledSection;
