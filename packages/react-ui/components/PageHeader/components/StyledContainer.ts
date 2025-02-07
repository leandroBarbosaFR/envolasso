import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContaineBase from '../../Container/components/StyledContainer';

const StyledContainer = styled(StyledContaineBase)<StyledComponentProps>`
  position: ${({ theme, layoutVariant }) => theme.PageHeader[layoutVariant!].StyledContainer.position};
  z-index: ${({ theme, layoutVariant }) => theme.PageHeader[layoutVariant!].StyledContainer.zIndex};
  color: ${({ theme, layoutVariant }) => theme.PageHeader[layoutVariant!].StyledContainer.color};

  ${({ layoutVariant, isFluid, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.marginLeft};
          margin-right: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.marginRight};
          width: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.width};
          max-width: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.PageHeader[layoutVariant!].StyledContainer.container.marginLeft};
          margin-right: ${theme.PageHeader[layoutVariant!].StyledContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.mobile.height};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobile.height};
            max-width: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobile.width};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobile.paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.mobileLarge.height};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingRight};
          `
        : css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobileLarge.height};
            max-width: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobileLarge.width};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobileLarge
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.container.mobileLarge
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.tablet.height};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.container.tablet.height};
            max-width: ${theme.PageHeader[layoutVariant!].StyledContainer.container.tablet.width};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.container.tablet.paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.container.tablet.paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.desktop.height};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.container.desktop.height};
            max-width: ${theme.PageHeader[layoutVariant!].StyledContainer.container.desktop.width};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.container.desktop.paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.container.desktop.paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.widescreen.height};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingRight};
          `
        : css`
            height: ${theme.PageHeader[layoutVariant!].StyledContainer.container.widescreen.height};
            max-width: ${theme.PageHeader[layoutVariant!].StyledContainer.container.widescreen.width};
            padding-left: ${theme.PageHeader[layoutVariant!].StyledContainer.container.widescreen
              .paddingLeft};
            padding-right: ${theme.PageHeader[layoutVariant!].StyledContainer.container.widescreen
              .paddingRight};
          `};
  }
`;

export default StyledContainer;
