import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledArticle = styled(Article)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledArticle.color};
  a {
    color: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledArticle.colorLink};
    text-decoration: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.textDecoration};
    text-transform: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.textTransform};
    &:hover {
      color: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledArticle.colorLinkHover};
    }
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledArticle.mobile.margin};
    column-count: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobile.columnCount};
    column-gap: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobile.columnGap};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobile.textAlign};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobileLarge.margin};
    column-count: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobileLarge.columnCount};
    column-gap: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobileLarge.columnGap};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledArticle.tablet.margin};
    column-count: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.tablet.columnCount};
    column-gap: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.tablet.columnGap};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.desktop.margin};
    column-count: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.desktop.columnCount};
    column-gap: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.desktop.columnGap};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.widescreen.margin};
    column-count: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.widescreen.columnCount};
    column-gap: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.widescreen.columnGap};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticle.widescreen.textAlign};
  }
`;

export default StyledArticle;
