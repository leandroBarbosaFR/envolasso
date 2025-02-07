import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainer from '../../Container/components/StyledContainer';

const StyledNavThumbsContainer = styled(StyledContainer)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.color};

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
            .marginLeft};
          margin-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
            .marginRight};
          width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer.width};
          max-width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
            .maxWidth};
        `
      : css`
          margin-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
            .marginLeft};
          margin-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
            .marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .mobile.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .mobile.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.mobile
              .width};
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .mobileLarge.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .mobileLarge.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .mobileLarge.width};
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .tablet.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .tablet.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.tablet
              .width};
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .desktop.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .desktop.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.desktop
              .width};
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .widescreen.paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.fluidContainer
              .widescreen.paddingRight};
          `
        : css`
            max-width: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .widescreen.width};
            padding-left: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.container
              .mobile.paddingRight};
          `};
  }
`;

export default StyledNavThumbsContainer;
