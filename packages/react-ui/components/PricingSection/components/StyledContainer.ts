import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainerBase from '../../Container/components/StyledContainer';

const StyledContainer = styled(StyledContainerBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  position: ${({ layoutVariant, theme }) => theme.PricingSection[layoutVariant!].StyledContainer.position};
  color: ${({ layoutVariant, theme }) => theme.PricingSection[layoutVariant!].StyledContainer.color};

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.marginLeft};
          margin-right: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.marginRight};
          width: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.width};
          max-width: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.PricingSection[layoutVariant!].StyledContainer.container.marginLeft};
          margin-right: ${theme.PricingSection[layoutVariant!].StyledContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.mobile.height};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobile.height};
            max-width: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobile.width};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobile
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
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.mobileLarge.height};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingRight};
          `
        : css`
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobileLarge.height};
            max-width: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobileLarge.width};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobileLarge
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.container.mobileLarge
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
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.tablet.height};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.container.tablet.height};
            max-width: ${theme.PricingSection[layoutVariant!].StyledContainer.container.tablet.width};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.container.tablet
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.container.tablet
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
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.desktop.height};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.container.desktop.height};
            max-width: ${theme.PricingSection[layoutVariant!].StyledContainer.container.desktop.width};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.container.desktop
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.container.desktop
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
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.widescreen.height};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingRight};
          `
        : css`
            height: ${theme.PricingSection[layoutVariant!].StyledContainer.container.widescreen.height};
            max-width: ${theme.PricingSection[layoutVariant!].StyledContainer.container.widescreen.width};
            padding-left: ${theme.PricingSection[layoutVariant!].StyledContainer.container.widescreen
              .paddingLeft};
            padding-right: ${theme.PricingSection[layoutVariant!].StyledContainer.container.widescreen
              .paddingRight};
          `};
  }
`;

export default StyledContainer;
