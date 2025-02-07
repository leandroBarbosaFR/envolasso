import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledInput = styled.input<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.cursor};
  white-space: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.whiteSpace};
  text-align: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.textAlign};
  text-transform: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.textTransform};
  display: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.display};
  gap: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.gap};
  justify-content: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.justifyContent};
  align-items: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.alignItems};
  width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.width};
  background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.background};
  color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontWeight};
  transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
  -webkit-transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
  -moz-transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
  -o-transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.background};
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontColor};
    font-family: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontFamily};
    font-weight: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontWeight};
    -webkit-text-fill-color: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.autofill.textFillColor};
    -webkit-box-shadow: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.autofill.boxShadow};
    box-shadow: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.autofill.boxShadow};
    transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.autofill.transition};
  }
  svg {
    transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
    -webkit-transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
    -moz-transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
    -o-transition: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.transition};
    fill: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.icon.fill};
  }
  /* Hover states  */
  &:hover {
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontColorHover};
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.backgroundHover};
    font-weight: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontWeightHover};
    svg {
      fill: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.icon.fillHover};
    }
  }
  /* Focus states  */
  &:focus {
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontColorFocus};
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.backgroundFocus};
    font-weight: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontWeightFocus};
    outline: 0;
    svg {
      fill: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.icon.fillFocus};
    }
  }
  /* active states  */
  &:active {
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontColorActive};
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.backgroundActive};
    font-weight: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.fontWeightActive};
    svg {
      fill: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.icon.fillActive};
    }
  }
  /* Disabled state  */
  &:disabled {
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.disabled.fontColor};
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.disabled.background};
  }
  /* placeholder state  */
  &::-webkit-input-placeholder {
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.color};
  }
  &:-moz-placeholder {
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.color};
  }
  &::-moz-placeholder {
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.color};
  }
  &:-ms-input-placeholder {
    background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.placeholder.color};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderRadius};
    /* Change Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.fontSize};
      line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.lineHeight};
    }
    // Icon
    svg {
      height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.icon.height};
      width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.FormInputMixed[variant!].StyledInput.mobile.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.FormInputMixed[variant!].StyledInput.mobile.icon.margin};
    }
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderHover};
      border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderFocus};
      border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobile.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobile.borderLeftActive};
    }
  }

  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRadius};
    /* Change Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.fontSize};
      line-height: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.lineHeight};
    }
    // Icon
    svg {
      height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.icon.height};
      width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.FormInputMixed[variant!].StyledInput.mobileLarge.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.FormInputMixed[variant!].StyledInput.mobileLarge.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.mobileLarge.borderLeftActive};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderRadius};
    /* Change Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.fontSize};
      line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.lineHeight};
    }
    // Icon
    svg {
      height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.icon.height};
      width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.FormInputMixed[variant!].StyledInput.tablet.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.FormInputMixed[variant!].StyledInput.tablet.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderHover};
      border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderFocus};
      border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.tablet.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.tablet.borderLeftActive};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderRadius};
    /* Change Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.fontSize};
      line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.lineHeight};
      letter-spacing: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.letterSpacing};
    }
    // Icon
    svg {
      height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.icon.height};
      width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.FormInputMixed[variant!].StyledInput.desktop.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.FormInputMixed[variant!].StyledInput.desktop.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.desktop.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.desktop.borderLeftActive};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledInput.widescreen.borderRadius};
    /* Change Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.fontSize};
      line-height: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.lineHeight};
      letter-spacing: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.letterSpacing};
    }
    // Icon
    svg {
      height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.icon.height};
      width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.FormInputMixed[variant!].StyledInput.widescreen.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.FormInputMixed[variant!].StyledInput.widescreen.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledInput.widescreen.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputMixed[variant!].StyledInput.widescreen.borderLeftActive};
    }
  }
`;

export default StyledInput;
