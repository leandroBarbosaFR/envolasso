import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainer from '../../Container/components/StyledContainer';

const StyledPageHeaderContainer = styled(StyledContainer)<StyledComponentProps>`
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.zIndex};
  color: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.color};

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
            .marginLeft};
          margin-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
            .marginRight};
          width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer.width};
          max-width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
            .maxWidth};
        `
      : css`
          margin-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
            .marginLeft};
          margin-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
            .marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer.mobile
              .height};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .mobile.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .mobile.paddingRight};
          `
        : css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.mobile
              .height};
            max-width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.mobile
              .width};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.mobile
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
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .mobileLarge.height};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .mobileLarge.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .mobileLarge.paddingRight};
          `
        : css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.mobileLarge
              .height};
            max-width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
              .mobileLarge.width};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
              .mobileLarge.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
              .mobileLarge.paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer.tablet
              .height};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .tablet.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .tablet.paddingRight};
          `
        : css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.tablet
              .height};
            max-width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.tablet
              .width};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.tablet
              .paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.tablet
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
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer.desktop
              .height};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .desktop.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .desktop.paddingRight};
          `
        : css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.desktop
              .height};
            max-width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.desktop
              .width};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.desktop
              .paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
              .desktop.paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .widescreen.height};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .widescreen.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.fluidContainer
              .widescreen.paddingRight};
          `
        : css`
            height: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.widescreen
              .height};
            max-width: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container.widescreen
              .width};
            padding-left: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
              .widescreen.paddingLeft};
            padding-right: ${theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.container
              .widescreen.paddingRight};
          `};
  }
`;

export default StyledPageHeaderContainer;
