import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.position};
  z-index: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.zIndex};
  overflow: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.overflow};
  border: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.border};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.mxWidth};
    margin: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.margin};

    left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.top};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobile.borderBottomRightRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.mxWidth};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.margin};

    left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.mobileLarge.borderBottomRightRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.mxWidth};
    margin: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.margin};

    left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.top};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.tablet.borderBottomRightRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.mxWidth};
    margin: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.margin};

    left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.top};
    right: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.top};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.desktop.borderBottomRightRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.mxWidth};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.margin};

    left: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.right};
    top: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.bottom};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledImage.widescreen.borderBottomRightRadius};
  }
`;
export default StyledImage;
