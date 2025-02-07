import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledHeadingWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.zIndex};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.alignSelf};

    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.left};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.background};
    border: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.alignSelf};

    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.left};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.background};
    border: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.height};
    width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.left};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.alignSelf};

    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.bottom};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledHeadingWrap.widescreen.borderRadius};
  }
`;
export default StyledHeadingWrap;
