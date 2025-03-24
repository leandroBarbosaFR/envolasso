import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticle from '../../Article/components/StyledArticle';

const StyledExcerpt = styled(StyledArticle)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  white-space: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.whiteSpace};
  color: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.color};
  text-align: center;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobileLarge.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobileLarge.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.widescreen.margin};
  }
`;
export default StyledExcerpt;
