import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainerBase from '../../Container/components/StyledContainer';

const StyledContainer = styled(StyledContainerBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledContainer.position};
  z-index: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledContainer.zIndex};

  :after {
    content: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledContainer.after.content};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledContainer.after.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledContainer.after.zIndex};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledContainer.after.background};
  }

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.marginLeft};
          margin-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.marginRight};
          width: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.width};
          max-width: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.marginLeft};
          margin-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.mobile.height};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobile.height};
            max-width: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobile.width};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};

    :after {
      inset: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobile.inset};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobile.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobile.left};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobile.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobile.bottom};
      margin: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobile.margin};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.mobileLarge.height};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingRight};
          `
        : css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobileLarge.height};
            max-width: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobileLarge.width};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobileLarge
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.mobileLarge
              .paddingRight};
          `};

    :after {
      inset: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobileLarge.inset};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobileLarge.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobileLarge.left};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobileLarge.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobileLarge.bottom};
      margin: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.mobileLarge.margin};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.tablet.height};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.tablet.height};
            max-width: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.tablet.width};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.tablet
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.tablet
              .paddingRight};
          `};

    :after {
      inset: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.tablet.inset};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.tablet.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.tablet.left};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.tablet.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.tablet.bottom};
      margin: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.tablet.margin};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.desktop.height};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.desktop.height};
            max-width: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.desktop.width};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.desktop
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.desktop
              .paddingRight};
          `};

    :after {
      inset: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.desktop.inset};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.desktop.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.desktop.left};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.desktop.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.desktop.bottom};
      margin: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.desktop.margin};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.widescreen.height};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingRight};
          `
        : css`
            height: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.widescreen.height};
            max-width: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.widescreen.width};
            padding-left: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.widescreen
              .paddingLeft};
            padding-right: ${theme.TextImgSection[layoutVariant!].StyledContainer.container.widescreen
              .paddingRight};
          `};

    :after {
      inset: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.widescreen.inset};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.widescreen.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.widescreen.left};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.widescreen.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.widescreen.bottom};
      margin: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledContainer.after.widescreen.margin};
    }
  }
`;
export default StyledContainer;
