import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImgWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.display};
  z-index: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.zIndex};
  position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.position};
  top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.top};
  left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.left};
  bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.bottom};
  right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.right};
  filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.filter};
  background: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.background};
  border-radius: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.borderRadius};
  overflow: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.overflow};

  &::after {
    content: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.content};
    position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.position};
    z-index: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.zIndex};
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.top};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.left};
    bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.bottom};
    height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.height};
    width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.After.width};
    mix-blend-mode: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgWrap.After.mixBlendMode};
    background: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgWrap.After.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobile.padding};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobile.margin};
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobile.top};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobile.left};
    bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobile.bottom};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobile.right};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImgWrap.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobileLarge.margin};
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobileLarge.top};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobileLarge.bottom};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.mobileLarge.right};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.tablet.padding};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.tablet.margin};
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.tablet.top};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.tablet.left};
    bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.tablet.bottom};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.tablet.right};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.desktop.padding};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.desktop.margin};
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.desktop.top};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.desktop.left};
    bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.desktop.bottom};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.desktop.right};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.widescreen.padding};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.widescreen.margin};
    top: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.widescreen.top};
    left: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.widescreen.left};
    bottom: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.widescreen.bottom};
    right: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImgWrap.widescreen.right};
  }
`;

export default StyledImgWrap;
