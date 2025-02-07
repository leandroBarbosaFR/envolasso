import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledExcerpt = styled(Article)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.color};
  blockquote {
    color: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.blockquote.color};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.widescreen.margin};
  }
`;

export default StyledExcerpt;
