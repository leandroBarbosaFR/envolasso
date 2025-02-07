import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div<StyledComponentProps>`
  ${({ isFluid, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.fluidContainer.marginLeft};
          margin-right: ${theme.fluidContainer.marginRight};
          width: ${theme.fluidContainer.width};
          max-width: ${theme.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.container.marginLeft};
          margin-right: ${theme.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.fluidContainer.mobile.height};
            padding-left: ${theme.fluidContainer.mobile.paddingLeft};
            padding-right: ${theme.fluidContainer.mobile.paddingRight};
          `
        : css`
            height: ${theme.container.mobile.height};
            max-width: ${theme.container.mobile.width};
            padding-left: ${theme.container.mobile.paddingLeft};
            padding-right: ${theme.container.mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.fluidContainer.mobileLarge.height};
            padding-left: ${theme.fluidContainer.mobileLarge.paddingLeft};
            padding-right: ${theme.fluidContainer.mobileLarge.paddingRight};
          `
        : css`
            height: ${theme.container.mobileLarge.height};
            max-width: ${theme.container.mobileLarge.width};
            padding-left: ${theme.container.mobileLarge.paddingLeft};
            padding-right: ${theme.container.mobileLarge.paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.fluidContainer.tablet.height};
            padding-left: ${theme.fluidContainer.tablet.paddingLeft};
            padding-right: ${theme.fluidContainer.tablet.paddingRight};
          `
        : css`
            height: ${theme.container.tablet.height};
            max-width: ${theme.container.tablet.width};
            padding-left: ${theme.container.tablet.paddingLeft};
            padding-right: ${theme.container.tablet.paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.fluidContainer.desktop.height};
            padding-left: ${theme.fluidContainer.desktop.paddingLeft};
            padding-right: ${theme.fluidContainer.desktop.paddingRight};
          `
        : css`
            height: ${theme.container.desktop.height};
            max-width: ${theme.container.desktop.width};
            padding-left: ${theme.container.desktop.paddingLeft};
            padding-right: ${theme.container.desktop.paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.fluidContainer.widescreen.height};
            padding-left: ${theme.fluidContainer.widescreen.paddingLeft};
            padding-right: ${theme.fluidContainer.widescreen.paddingRight};
          `
        : css`
            height: ${theme.container.widescreen.height};
            max-width: ${theme.container.widescreen.width};
            padding-left: ${theme.container.widescreen.paddingLeft};
            padding-right: ${theme.container.widescreen.paddingRight};
          `};
  }
`;
export default StyledContainer;
