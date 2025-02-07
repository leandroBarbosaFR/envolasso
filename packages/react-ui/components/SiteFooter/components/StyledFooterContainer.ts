import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainer from '../../Container/components/StyledContainer';

const StyledFooterContainer = styled(StyledContainer)<StyledComponentProps>`
  ${({ isFluid, layoutVariant, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.marginLeft};
          margin-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.marginRight};
          width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.width};
          max-width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.marginLeft};
          margin-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isFluid, layoutVariant, theme }) =>
      isFluid
        ? css`
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.mobile.height};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobile.height};
            max-width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobile.width};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobile
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
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.mobileLarge
              .height};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.mobileLarge
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.mobileLarge
              .paddingRight};
          `
        : css`
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobileLarge.height};
            max-width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobileLarge.width};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobileLarge
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.mobileLarge
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
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.tablet.height};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.tablet.height};
            max-width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.tablet.width};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.tablet
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.tablet
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
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.desktop.height};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.desktop.height};
            max-width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.desktop.width};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.desktop
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.desktop
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
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.widescreen
              .height};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.widescreen
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.fluidContainer.widescreen
              .paddingRight};
          `
        : css`
            height: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.widescreen.height};
            max-width: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.widescreen.width};
            padding-left: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.widescreen
              .paddingLeft};
            padding-right: ${theme.SiteFooter[layoutVariant!].StyledFooterContainer.container.widescreen
              .paddingRight};
          `};
  }
`;
export default StyledFooterContainer;
