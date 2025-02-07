import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledBtnWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.justifyContent};
  align-items: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.alignItems};
  z-index: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.zIndex};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.pointerEvents};
  button {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowButton.pointerEvents};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    position: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.top};
    left: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.right};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.justifyContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    position: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.top};
    left: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.right};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.justifyContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    position: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.top};
    left: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.right};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.justifyContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    position: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.top};
    left: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.right};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.justifyContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    position: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.top};
    left: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.right};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.justifyContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.widescreen.padding};
  }
`;

export default StyledBtnWrap;
