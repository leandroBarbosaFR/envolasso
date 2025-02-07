import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNavThumbsWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.display};
  width: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.width};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.gridColumn};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.flexDirection};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.gridColumn};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.flexDirection};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.gridColumn};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.flexDirection};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.gridColumn};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.flexDirection};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.gridColumn};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.flexDirection};
  }
`;

export default StyledNavThumbsWrap;
