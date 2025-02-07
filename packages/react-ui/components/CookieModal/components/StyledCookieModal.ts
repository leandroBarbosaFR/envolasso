import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCookieModal = styled.div<StyledComponentProps>`
  position: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.position};
  z-index: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.zIndex};
  background: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.background};
  border: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.CookieModal[layoutVariant!].StyledCookieModal.borderRadius};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.margin};
    top: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.top};
    right: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.bottom};
    left: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.transform};
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.padding};
    width: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.mobile.width};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.margin};
    top: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.transform};
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.padding};
    width: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.mobileLarge.width};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.margin};
    top: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.top};
    right: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.bottom};
    left: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.transform};
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.padding};
    width: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.tablet.width};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.margin};
    top: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.top};
    right: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.bottom};
    left: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.transform};
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.padding};
    width: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.desktop.width};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.margin};
    top: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.right};
    bottom: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.transform};
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.padding};
    width: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledCookieModal.widescreen.width};
  }
`;

export default StyledCookieModal;
