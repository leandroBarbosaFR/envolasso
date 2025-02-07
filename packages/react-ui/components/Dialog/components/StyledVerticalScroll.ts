import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledVerticalScroll = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  /* display: inline-table; */
  width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledVerticalScroll.width};
  max-height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledVerticalScroll.maxHeight};
  height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledVerticalScroll.height};
  overflow-y: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledVerticalScroll.overflowY};
  overflow-x: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledVerticalScroll.overflowX};
  padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledVerticalScroll.padding};
  & * {
    scrollbar-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.scrollbarWidth};
    scrollbar-color: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.scrollbarColor};
  }
  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar,
  &::-webkit-scrollbar:vertical,
  &::-webkit-scrollbar:horizontal {
    width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarTrackWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarTrackHeight};
    background-color: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.scrollbarTrackBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarTrackBorderRadius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarThumbBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarThumbBorderRadius};
    border: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.webkitScrollbarThumbBorder};
  }
  // Custom Scroll Hover
  // ================
  &:hover {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledVerticalScroll.hover.pointerEvents};
    & * {
      scrollbar-color: ${({ layoutVariant, theme }) =>
        theme.Dialog[layoutVariant!].StyledVerticalScroll.hover.scrollbarColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ layoutVariant, theme }) =>
        theme.Dialog[layoutVariant!].StyledVerticalScroll.hover.webkitScrollbarThumbBgColor};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledVerticalScroll;
