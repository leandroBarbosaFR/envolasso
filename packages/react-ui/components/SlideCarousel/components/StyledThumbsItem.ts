import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledThumbsItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.cursor};
  background: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.background};
  border: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.border};
  &:hover {
    background: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.backgroundHover};
    border: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.borderHover};
  }
  /* Active state */
  background: ${({ isActive, layoutVariant, theme }) =>
    isActive && theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.backgroundActive};
  border: ${({ isActive, layoutVariant, theme }) =>
    isActive && theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.borderActive};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobile.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobile.width};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobileLarge.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobileLarge.width};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.tablet.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.tablet.width};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.desktop.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.desktop.height};
    width: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.desktop.width};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.widescreen.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.widescreen.width};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.ThumbsItem.widescreen.borderRadius};
  }
`;

export default StyledThumbsItem;
