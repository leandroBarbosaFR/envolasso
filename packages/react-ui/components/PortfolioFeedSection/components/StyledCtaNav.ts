import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import CtaNav from '../../CtaNav';

const StyledCtaNav = styled(CtaNav)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.color};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.widescreen.margin};
  }
`;

export default StyledCtaNav;
