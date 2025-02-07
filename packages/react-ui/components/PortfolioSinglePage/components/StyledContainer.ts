import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainerBase from '../../Container/components/StyledContainer';

const StyledContainer = styled(StyledContainerBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.PortfolioSinglePage[layoutVariant!].StyledContainer.color};

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.marginLeft};
          margin-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer
            .marginRight};
          width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.width};
          max-width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.marginLeft};
          margin-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            max-width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile.width};
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
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
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer
              .mobileLarge.paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer
              .mobileLarge.paddingRight};
          `
        : css`
            max-width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobileLarge
              .width};
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
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
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            max-width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.tablet.width};
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
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
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            max-width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.desktop.width};
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
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
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer
              .widescreen.paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.fluidContainer
              .widescreen.paddingRight};
          `
        : css`
            max-width: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.widescreen
              .width};
            padding-left: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.PortfolioSinglePage[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }
`;

export default StyledContainer;
