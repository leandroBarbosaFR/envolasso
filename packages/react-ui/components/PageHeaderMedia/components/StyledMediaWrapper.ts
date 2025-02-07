import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledMediaWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background-image: ${({ heroFirstFrameImage }) => `url(${heroFirstFrameImage})`};
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.position};
  top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.top};
  left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.left};
  width: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.width};
  height: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.height};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.zIndex};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.pointerEvents};
  overflow: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.overflow};
  background-repeat: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.backgroundRepeat};
  background-attachment: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.backgroundAttachment};
  background-size: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.backgroundSize};
  -webkit-background-size: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.backgroundSize};
  -moz-background-size: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.backgroundSize};
  -o-background-size: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.backgroundSize};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobile.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobile.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobile.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobile.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobileLarge.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobileLarge.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobileLarge.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobileLarge.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.tablet.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.tablet.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.tablet.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.tablet.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.desktop.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.desktop.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.desktop.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.desktop.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.widescreen.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.widescreen.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.widescreen.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.widescreen.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledMediaWrapper.widescreen.padding};
  }
`;
export default StyledMediaWrapper;
