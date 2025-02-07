import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImgCaptionWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.position};
  z-index: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.zIndex};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobile.top};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobile.right};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobile.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobileLarge.right};
    left: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobileLarge.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.tablet.top};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.tablet.right};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.tablet.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.desktop.top};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.desktop.right};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.desktop.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.widescreen.right};
    left: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.widescreen.bottom};
    margin: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgCaptionWrap.widescreen.padding};
  }
`;

export default StyledImgCaptionWrap;
