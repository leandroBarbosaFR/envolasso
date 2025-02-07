import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSelect = styled.select<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  // Remove default styling
  -moz-appearance: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.appearance};
  -webkit-appearanceremove: ${({ variant, theme }) =>
    theme.FormInputSelect[variant!].StyledSelect.appearance};
  appearance: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.appearance};
  /* Hide arrow icon in IE browsers */
  &::-ms-expand {
    display: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.displayExpand};
  }
  /* Focus style */
  &:focus {
    outline: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.outlineFocus};
  }
  /* Set options to normal weight */
  option {
    font-weight: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontWeightOption};
  }
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.cursor};
  white-space: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.whiteSpace};
  text-align: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.textAlign};
  text-transform: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.textTransform};
  display: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.display};
  gap: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.gap};
  justify-content: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.justifyContent};
  align-items: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.alignItems};
  width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.width};

  background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.background};
  color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontWeight};

  transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  -webkit-transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  -moz-transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  -o-transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};

  /* Hover states  */
  &:hover {
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontColorHover};
    background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.backgroundHover};
    font-weight: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontWeightHover};
  }
  /* Focus states  */
  &:focus {
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontColorFocus};
    background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.backgroundFocus};
    font-weight: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontWeightFocus};
    outline: 0;
  }
  /* active states  */
  &:active {
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontColorActive};
    background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.backgroundActive};
    font-weight: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.fontWeightActive};
  }
  /* Disabled state  */
  &:disabled {
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.disabled.fontColor};
    background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.disabled.background};
  }
  /* placeholder state  */
  &::-webkit-input-placeholder {
    background: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.placeholder.color};
  }
  &:-moz-placeholder {
    background: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.placeholder.color};
  }
  &::-moz-placeholder {
    background: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.placeholder.color};
  }
  &:-ms-input-placeholder {
    background: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.placeholder.background};
    color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.placeholder.color};
  }
  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.autofill.textFillColor};
    -webkit-box-shadow: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.autofill.boxShadow};
    box-shadow: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.autofill.boxShadow};
    transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.autofill.transition};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobile.borderRadius};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobile.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobile.borderLeftActive};
    }
  }

  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRadius};

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRadiusActive};
      border: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.mobileLarge.borderLeftActive};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.tablet.borderRadius};
    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.tablet.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.tablet.borderLeftActive};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.desktop.borderRadius};

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.desktop.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.desktop.borderLeftActive};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRadius};

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRadiusHover};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.borderHover};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderTopHover};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRightHover};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderBottomHover};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.borderFocus};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderTopFocus};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRightFocus};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderBottomFocus};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRadiusActive};
      border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.widescreen.borderActive};
      border-top: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderTopActive};
      border-right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderRightActive};
      border-bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderBottomActive};
      border-left: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelect.widescreen.borderLeftActive};
    }
  }
`;

export default StyledSelect;
