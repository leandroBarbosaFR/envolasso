import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledRegionSelectWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.zIndex};
  width: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.width};
  display: ${({ layoutVariant, theme }) =>
    theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.justifyContent};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobile.top};
    left: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobile.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobile.right};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobileLarge.top};
    left: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobileLarge.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.mobileLarge.right};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.tablet.top};
    left: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.tablet.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.tablet.right};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    display: none;
    top: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.desktop.top};
    left: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.desktop.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.desktop.right};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.widescreen.top};
    left: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.widescreen.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.NavDraw[layoutVariant!].Region.StyledRegionSelectWrap.widescreen.right};
  }
`;
export default StyledRegionSelectWrap;
