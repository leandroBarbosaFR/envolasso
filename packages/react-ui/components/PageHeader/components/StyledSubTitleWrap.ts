import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSubTitleWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.zIndex};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.left};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.left};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.height};
    width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.left};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSubTitleWrap.widescreen.borderRadius};
  }
`;
export default StyledSubTitleWrap;
