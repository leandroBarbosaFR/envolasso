import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledContentInner = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  border-radius: ${({ layoutVariant, theme }) =>
    theme.Dialog[layoutVariant!].StyledContentInner.borderRadius};
  background: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.background};
  box-shadow: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.boxShadow};
  position: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.position};
  top: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.top};
  left: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.left};
  transform: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.transform};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    /* display: flex; */
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobile.minWidth};
    max-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobile.maxWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.mobile.width};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobile.maxHeight};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.mobile.height};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobileLarge.minWidth};
    max-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobileLarge.maxWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.mobileLarge.width};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobileLarge.maxHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobileLarge.height};
    padding: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.tablet.minWidth};
    max-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.tablet.maxWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.tablet.width};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.tablet.height};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.tablet.maxHeight};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.desktop.minWidth};
    max-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.desktop.maxWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.desktop.width};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.desktop.maxHeight};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.desktop.height};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.widescreen.minWidth};
    max-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.widescreen.maxWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContentInner.widescreen.width};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.widescreen.maxHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.widescreen.height};
    padding: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContentInner.widescreen.padding};
  }
`;

export default StyledContentInner;
