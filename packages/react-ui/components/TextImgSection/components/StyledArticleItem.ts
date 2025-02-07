import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledArticleItem = styled(Article)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledArticleItem.color};
  a {
    color: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledArticleItem.colorLink};
    text-decoration: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.textDecoration};
    text-transform: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.textTransform};
    &:hover {
      color: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledArticleItem.colorLinkHover};
    }
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobile.textAlign};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledArticleItem.widescreen.textAlign};
  }
`;

export default StyledArticleItem;
