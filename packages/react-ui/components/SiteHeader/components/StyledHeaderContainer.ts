import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainer from '../../Container/components/StyledContainer';

const StyledHeaderContainer = styled(StyledContainer)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyledHeaderContainer.display};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.mobile.alignItems};
    gap: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyledHeaderContainer.mobile.gap};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.mobile.height};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobile.height};
            max-width: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobile.width};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobile
              .paddingRight};
          `};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.mobileLarge.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.mobileLarge.gap};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.mobileLarge
              .height};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.mobileLarge
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.mobileLarge
              .paddingRight};
          `
        : css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobileLarge.height};
            max-width: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobileLarge.width};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobileLarge
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.mobileLarge
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.tablet.alignItems};
    gap: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyledHeaderContainer.tablet.gap};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.tablet.height};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.tablet.height};
            max-width: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.tablet.width};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.tablet
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.tablet
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.desktop.alignItems};
    gap: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyledHeaderContainer.desktop.gap};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.desktop.height};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.desktop.height};
            max-width: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.desktop.width};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.desktop
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.desktop
              .paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    align-items: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.widescreen.alignItems};
    gap: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyledHeaderContainer.widescreen.gap};

    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.widescreen
              .height};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.widescreen
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.fluidContainer.widescreen
              .paddingRight};
          `
        : css`
            height: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.widescreen.height};
            max-width: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.widescreen.width};
            padding-left: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.widescreen
              .paddingLeft};
            padding-right: ${theme.SiteHeader[layoutVariant!].StyledHeaderContainer.container.widescreen
              .paddingRight};
          `};
  }
`;

export default StyledHeaderContainer;
