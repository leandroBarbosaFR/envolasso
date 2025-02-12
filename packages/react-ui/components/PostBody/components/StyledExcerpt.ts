import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledExcerpt = styled(Article)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.color};
  blockquote {
    color: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.blockquote.color};
  }
  // Remove margin/padding
  /* p:last-of-type {
    margin: 0;
    padding: 0;
  } */
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledExcerpt.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledExcerpt.widescreen.margin};
  }
`;

export default StyledExcerpt;
