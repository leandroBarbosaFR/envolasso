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
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobile.gridColumn};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.mobileLarge.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.tablet.gridColumn};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsWrap.widescreen.gridColumn};
  }
`;

export default StyledNavThumbsWrap;
