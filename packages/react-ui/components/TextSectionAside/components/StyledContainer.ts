import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';
import StyledContainerBase from '../../Container/components/StyledContainer';

const StyledContainer = styled(StyledContainerBase)<StyledComponentProps>`
  position: ${({ layoutVariant, theme }) => theme.TextSectionAside[layoutVariant!].StyledContainer.position};
  z-index: ${({ layoutVariant, theme }) => theme.TextSectionAside[layoutVariant!].StyledContainer.zIndex};
  color: ${({ layoutVariant, theme }) => theme.TextSectionAside[layoutVariant!].StyledContainer.color};

  ${({ layoutVariant, isFluid, theme }) =>
    isFluid
      ? css`
          margin-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.marginLeft};
          margin-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.marginRight};
          width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.width};
          max-width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.maxWidth};
        `
      : css`
          margin-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.marginLeft};
          margin-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.marginRight};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.mobile.height};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.mobile
              .paddingRight};
          `
        : css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile.height};
            max-width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile.width};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .height};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.mobileLarge
              .paddingRight};
          `
        : css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile.height};
            max-width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile.width};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.mobile
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
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.tablet.height};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.tablet
              .paddingRight};
          `
        : css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.tablet.height};
            max-width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.tablet.width};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.tablet
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.tablet
              .paddingRight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.desktop.height};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.desktop
              .paddingRight};
          `
        : css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.desktop.height};
            max-width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.desktop.width};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.desktop
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.desktop
              .paddingRight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ layoutVariant, isFluid, theme }) =>
      isFluid
        ? css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .height};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.fluidContainer.widescreen
              .paddingRight};
          `
        : css`
            height: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.widescreen.height};
            max-width: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.widescreen.width};
            padding-left: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.widescreen
              .paddingLeft};
            padding-right: ${theme.TextSectionAside[layoutVariant!].StyledContainer.container.widescreen
              .paddingRight};
          `};
  }
`;

export default StyledContainer;
