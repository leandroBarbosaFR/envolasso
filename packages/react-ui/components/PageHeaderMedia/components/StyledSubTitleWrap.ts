import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSubTitleWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.pointerEvents};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.zIndex};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobile.alignSelf};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.mobileLarge.alignSelf};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.tablet.alignSelf};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.desktop.alignSelf};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.widescreen.alignSelf};
  }
`;
export default StyledSubTitleWrap;
