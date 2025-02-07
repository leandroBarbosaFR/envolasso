import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.justifyContent};
  justify-self: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.justifySelf};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.widescreen.padding};
  }
`;

export default StyledCtaNavWrap;
