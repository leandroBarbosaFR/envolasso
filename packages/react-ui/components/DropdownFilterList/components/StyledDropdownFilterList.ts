import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledDropdownFilterList = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.display};
  flex-direction: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.flexDirection};
  height: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.height};
  width: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.width};
  // ==========================================================================
  // Custom sroll
  // ==========================================================================
  overflow-y: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.overflowY};
  overflow-x: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.overflowX};
  padding: ${({ layoutVariant, theme }) =>
    theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.padding};
  & * {
    scrollbar-width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.scrollbarWidth};
    scrollbar-color: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.scrollbarColor};
  }
  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar,
  &::-webkit-scrollbar:vertical,
  &::-webkit-scrollbar:horizontal {
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarTrackWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarTrackHeight};
    background-color: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.scrollbarTrackBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarTrackBorderRadius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarThumbBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarThumbBorderRadius};
    border: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.webkitScrollbarThumbBorder};
  }
  // Custom Scroll Hover
  // ================
  &:hover {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.hover.pointerEvents};
    & * {
      scrollbar-color: ${({ layoutVariant, theme }) =>
        theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.hover.scrollbarColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ layoutVariant, theme }) =>
        theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.hover.webkitScrollbarThumbBgColor};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownFilterList[layoutVariant!].StyledDropdownFilterList.widescreen.gap};
  }
`;

export default StyledDropdownFilterList;
