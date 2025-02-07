import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainer from '../../Container/components/StyledContainer';

const StyledNavContainer = styled(StyledContainer)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.color};

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
            .marginLeft};
          margin-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
            .marginRight};
          width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.width};
          max-width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.marginLeft};
          margin-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile.width};
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
              .mobileLarge.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
              .mobileLarge.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobileLarge
              .width};
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.tablet.width};
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
              .desktop.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.desktop.width};
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
              .widescreen.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.fluidContainer
              .widescreen.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.widescreen
              .width};
            padding-left: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.container.mobile
              .paddingRight};
          `};
  }
`;

export default StyledNavContainer;
