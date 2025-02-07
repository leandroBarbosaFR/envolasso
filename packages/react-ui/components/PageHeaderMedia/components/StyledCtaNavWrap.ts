import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.pointerEvents};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.zIndex};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.justifyContent};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobile.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobile.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobile.alignSelf};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobileLarge.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.mobileLarge.alignSelf};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.tablet.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.tablet.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.tablet.alignSelf};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.desktop.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.desktop.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.desktop.alignSelf};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.widescreen.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.widescreen.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.widescreen.alignSelf};
  }
`;

export default StyledCtaNavWrap;
