import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSubTitleWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.height};
    width: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.width};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.zIndex};
    top: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.background};
    border: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.width};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.background};
    border: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.height};
    width: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.width};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.zIndex};
    top: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.background};
    border: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.width};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.zIndex};
    top: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.background};
    border: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.width};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.background};
    border: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.widescreen.borderRadius};
  }
`;
export default StyledSubTitleWrap;
