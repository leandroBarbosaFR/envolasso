import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledHeadingWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.pointerEvents};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.zIndex};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobile.alignSelf};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.mobileLarge.alignSelf};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.tablet.alignSelf};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.desktop.alignSelf};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.widescreen.alignSelf};
  }
`;
export default StyledHeadingWrap;
