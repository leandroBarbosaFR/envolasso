import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledArticle = styled(Article)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.GoogleReview[layoutVariant!].StyledArticle.color};
  text-align: ${({ layoutVariant, theme }) => theme.GoogleReview[layoutVariant!].StyledArticle.textAlign};
  height: 250px;
  overflow: scroll;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.GoogleReview[layoutVariant!].StyledArticle.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.GoogleReview[layoutVariant!].StyledArticle.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.GoogleReview[layoutVariant!].StyledArticle.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledArticle.widescreen.margin};
  }
`;

export default StyledArticle;
