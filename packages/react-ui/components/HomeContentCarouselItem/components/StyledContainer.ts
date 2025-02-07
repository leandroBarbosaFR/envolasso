import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainerBase from '../../Container/components/StyledContainer';

const StyledContainer = styled(StyledContainerBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.zIndex};
  display: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.display};
  align-content: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.alignContent};
  height: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.height};
  flex-wrap: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.flexWrap};

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
            .marginLeft};
          margin-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
            .marginRight};
          width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer.width};
          max-width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.marginLeft};
          margin-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container
            .marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobile.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobile.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobile.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobile.padding};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .mobile.paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .mobile.paddingRight};
          `
        : css`
            max-width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .width};
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobileLarge.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobileLarge.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.mobileLarge.padding};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .mobileLarge.paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .mobileLarge.paddingRight};
          `
        : css`
            max-width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobileLarge
              .width};
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.tablet.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.tablet.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.tablet.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.tablet.padding};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .tablet.paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .tablet.paddingRight};
          `
        : css`
            max-width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.tablet
              .width};
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.desktop.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.desktop.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.desktop.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.desktop.padding};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .desktop.paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .desktop.paddingRight};
          `
        : css`
            max-width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.desktop
              .width};
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.widescreen.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.widescreen.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.widescreen.padding};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .widescreen.paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.fluidContainer
              .widescreen.paddingRight};
          `
        : css`
            max-width: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.widescreen
              .width};
            padding-left: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }
`;

export default StyledContainer;
