import { StyledComponentProps } from "@agency-platform/shared-types";
import styled, { css } from "styled-components";
import StyledContainer from "../../Container/components/StyledContainer";

const StyledHeroContainer = styled(StyledContainer)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledContainer.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledContainer.zIndex};
  color: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledContainer.color};
  top: 50%;
  /* right: unset;
  bottom: unset; */
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.HeroSection[layoutVariant!].StyledContainer
            .fluidContainer.marginLeft};
          margin-right: ${theme.HeroSection[layoutVariant!].StyledContainer
            .fluidContainer.marginRight};
          width: ${theme.HeroSection[layoutVariant!].StyledContainer
            .fluidContainer.width};
          max-width: ${theme.HeroSection[layoutVariant!].StyledContainer
            .fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.HeroSection[layoutVariant!].StyledContainer
            .container.marginLeft};
          margin-right: ${theme.HeroSection[layoutVariant!].StyledContainer
            .container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.mobile.height};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.mobile.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.mobile.paddingRight};
          `
        : css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobile.height};
            max-width: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobile.width};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobile.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobile.paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.mobileLarge.height};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.mobileLarge.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.mobileLarge.paddingRight};
          `
        : css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobileLarge.height};
            max-width: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobileLarge.width};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobileLarge.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.mobileLarge.paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.tablet.height};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.tablet.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.tablet.paddingRight};
          `
        : css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.tablet.height};
            max-width: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.tablet.width};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.tablet.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.tablet.paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.desktop.height};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.desktop.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.desktop.paddingRight};
          `
        : css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.desktop.height};
            max-width: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.desktop.width};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.desktop.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.desktop.paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.widescreen.height};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.widescreen.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .fluidContainer.widescreen.paddingRight};
          `
        : css`
            height: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.widescreen.height};
            max-width: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.widescreen.width};
            padding-left: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.widescreen.paddingLeft};
            padding-right: ${theme.HeroSection[layoutVariant!].StyledContainer
              .container.widescreen.paddingRight};
          `};
  }
`;

export default StyledHeroContainer;
