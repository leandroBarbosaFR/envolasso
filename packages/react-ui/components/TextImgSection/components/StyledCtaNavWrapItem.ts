import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrapItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.justifyContent};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.widescreen.padding};
  }
`;

export default StyledCtaNavWrapItem;
