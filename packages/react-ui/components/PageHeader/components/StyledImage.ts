import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.overflow};
  display: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.display};
  position: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.position};
  opacity: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.opacity};
  background: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.background};

  //:before for overlay colour
  // ==========================================================================
  &::after {
    content: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.content};
    position: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.position};
    z-index: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.top};
    left: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.left};
    bottom: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.bottom};
    right: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.after.right};
    mix-blend-mode: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.after.mixBlendMode};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.after.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.mobile.gridRow};
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.mobile.height};
    max-width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.mobile.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobile.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobile.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobile.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobile.borderBottomRightRadius};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.mobile.padding};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobile.background};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.gridRow};
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.height};
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.borderBottomRightRadius};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.padding};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.mobileLarge.background};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.tablet.gridRow};
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.tablet.height};
    max-width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.tablet.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.tablet.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.tablet.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.tablet.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.tablet.borderBottomRightRadius};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.tablet.padding};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.tablet.background};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.desktop.gridRow};
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.desktop.height};
    max-width: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.desktop.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.desktop.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.desktop.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.desktop.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.desktop.borderBottomRightRadius};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.desktop.padding};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.desktop.background};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.gridRow};
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.widescreen.height};
    max-width: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.borderBottomRightRadius};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledImage.widescreen.padding};
    background: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledImage.widescreen.background};
  }
`;
export default StyledImage;
