import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledDropdownMenuList = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.display};
  flex-direction: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.flexDirection};
  height: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.height};
  width: ${({ layoutVariant, theme }) => theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.width};
  // ==========================================================================
  // Custom sroll
  // ==========================================================================
  overflow-y: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.overflowY};
  overflow-x: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.overflowX};
  padding: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.padding};
  & * {
    scrollbar-width: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.scrollbarWidth};
    scrollbar-color: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.scrollbarColor};
  }
  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar,
  &::-webkit-scrollbar:vertical,
  &::-webkit-scrollbar:horizontal {
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarTrackWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarTrackHeight};
    background-color: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.scrollbarTrackBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarTrackBorderRadius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarThumbBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarThumbBorderRadius};
    border: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.webkitScrollbarThumbBorder};
  }
  // Custom Scroll Hover
  // ================
  &:hover {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.hover.pointerEvents};
    & * {
      scrollbar-color: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.hover.scrollbarColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.hover.webkitScrollbarThumbBgColor};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownMenuList.widescreen.gap};
  }
`;

export default StyledDropdownMenuList;
