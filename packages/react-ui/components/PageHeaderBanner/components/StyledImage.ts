import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.position};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.zIndex};
  overflow: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.overflow};

  //:before for overlay colour
  // ==========================================================================
  &::after {
    content: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.after.content};
    position: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.after.position};
    z-index: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.after.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.after.top};
    left: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.after.left};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.after.bottom};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.after.right};
    mix-blend-mode: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.after.mixBlendMode};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.after.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    left: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.top};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobile.borderBottomRightRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    left: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.mobileLarge.borderBottomRightRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    left: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.top};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.tablet.borderBottomRightRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    left: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.top};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.desktop.borderBottomRightRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    left: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledImage.widescreen.borderBottomRightRadius};
  }
`;
export default StyledImage;
