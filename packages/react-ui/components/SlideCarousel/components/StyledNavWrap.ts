import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.display};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.gridColumn};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.justifyContent};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobile.flexDirection};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.gridColumn};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.justifyContent};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.mobileLarge.flexDirection};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.gridColumn};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.justifyContent};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.tablet.flexDirection};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.gridColumn};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.justifyContent};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.desktop.flexDirection};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.gridColumn};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.justifyContent};
    align-content: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.alignContent};
    align-items: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.alignItems};
    flex-wrap: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.flexWrap};
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.widescreen.flexDirection};
  }
`;

export default StyledNavWrap;
