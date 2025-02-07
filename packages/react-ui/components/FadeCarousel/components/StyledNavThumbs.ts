import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNavThumbs = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.display};
  position: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.position};
  z-index: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobile.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobile.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobile.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobileLarge.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobileLarge.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.tablet.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.tablet.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.tablet.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.desktop.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.desktop.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.desktop.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.widescreen.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.widescreen.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbs.widescreen.padding};
  }
`;

export default StyledNavThumbs;
