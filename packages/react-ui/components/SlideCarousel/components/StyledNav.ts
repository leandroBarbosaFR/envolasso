import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.position};
  z-index: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobile.top};
    right: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobile.right};
    left: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobile.left};
    bottom: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobile.bottom};
    margin: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobileLarge.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobileLarge.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.tablet.top};
    right: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.tablet.right};
    left: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.tablet.left};
    bottom: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.tablet.bottom};
    margin: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.desktop.top};
    right: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.desktop.right};
    left: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.desktop.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.widescreen.right};
    left: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNav.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.widescreen.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNav.widescreen.padding};
  }
`;

export default StyledNav;
