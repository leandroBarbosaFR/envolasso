import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledTextarea = styled.textarea<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  width: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.width};
  resize: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.resize};
  cursor: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.cursor};
  height: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.height};

  color: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.textTransform};
  background: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.background};

  -webkit-transition: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.transition};
  -moz-transition: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.transition};
  -o-transition: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.transition};
  transition: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.transition};

  // Custom Scroll
  // ==========================================================================
  overflow-y: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.overflowY};
  overflow-x: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.overflowX};
  & * {
    scrollbar-width: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.scrollbarWidth};
    scrollbar-color: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.scrollbarColor};
  }
  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar,
  &::-webkit-scrollbar:vertical,
  &::-webkit-scrollbar:horizontal {
    width: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarWidth};
    height: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    width: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarTrackWidth};
    height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarTrackHeight};
    background-color: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.scrollbarTrackBgColor};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarTrackBorderRadius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarThumbBgColor};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarThumbBorderRadius};
    border: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.webkitScrollbarThumbBorder};
  }
  // Custom Scroll Hover
  // ================
  &:hover {
    pointer-events: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.hover.pointerEvents};
    & * {
      scrollbar-color: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.hover.scrollbarColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.hover.webkitScrollbarThumbBgColor};
    }
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.textAlign};
    /* font */
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobile.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.margin};
    // padding
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.padding};
    /* border */
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderLeft};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobile.borderLeftActive};
    }
  }
  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    text-align: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.textAlign};
    /* font */
    font-size: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.margin};
    // padding
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.padding};
    /* border */
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderLeft};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRadiusHover};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRadiusFocus};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRadiusActive};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.mobileLarge.borderLeftActive};
    }
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.textAlign};
    /* font */
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.tablet.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.margin};
    // padding
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.padding};
    /* border */
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderLeft};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.tablet.borderLeftActive};
    }
  }
  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.textAlign};
    /* font */
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.desktop.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.margin};
    // padding
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.padding};
    /* border */
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderLeft};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRadiusActive};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.desktop.borderLeftActive};
    }
  }
  // ==========================================================================
  // Widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    text-align: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.textAlign};
    /* font */
    font-size: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.widescreen.margin};
    // padding
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.widescreen.padding};
    /* border */
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledTextarea.widescreen.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderLeft};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRadiusHover};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRadiusFocus};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRadiusActive};
      border: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputTextarea[variant!].StyledTextarea.widescreen.borderLeftActive};
    }
  }
`;

export default StyledTextarea;
