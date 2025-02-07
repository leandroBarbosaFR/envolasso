import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledMediaWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.position};
  top: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.top};
  left: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.left};
  width: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.width};
  height: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.height};
  z-index: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.zIndex};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.pointerEvents};
  overflow: ${({ layoutVariant, theme }) => theme.EmbedSection[layoutVariant!].StyledMediaWrapper.overflow};
  background-repeat: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.backgroundRepeat};
  background-attachment: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.backgroundAttachment};
  background-size: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.backgroundSize};
  -webkit-background-size: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.backgroundSize};
  -moz-background-size: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.backgroundSize};
  -o-background-size: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledMediaWrapper.backgroundSize};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobile.padding};
    min-height: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobile.minHeight};
    min-width: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobile.minWidth};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobileLarge.padding};
    min-height: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobileLarge.minHeight};
    min-width: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.mobileLarge.minWidth};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.tablet.padding};
    min-height: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.tablet.minHeight};
    min-width: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.tablet.minWidth};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.desktop.padding};
    min-height: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.desktop.minHeight};
    min-width: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.desktop.minWidth};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.widescreen.padding};
    min-height: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.widescreen.minHeight};
    min-width: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledMediaWrapper.widescreen.minWidth};
  }
`;
export default StyledMediaWrapper;
