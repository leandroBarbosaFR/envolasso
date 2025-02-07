import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ variant, theme }) => theme.button[variant!].cursor};
  text-align: ${({ variant, theme }) => theme.button[variant!].textAlign};
  white-space: ${({ variant, theme }) => theme.button[variant!].whiteSpace};
  text-decoration: ${({ variant, theme }) => theme.button[variant!].textDecoration};
  width: ${({ variant, theme }) => theme.button[variant!].width};
  align-items: ${({ variant, theme }) => theme.button[variant!].alignItems};
  text-transform: ${({ variant, theme }) => theme.button[variant!].textTransform};
  justify-content: ${({ variant, theme }) => theme.button[variant!].justifyContent};
  display: ${({ variant, theme }) => theme.button[variant!].display};
  gap: ${({ variant, theme }) => theme.button[variant!].gap};
  pointer-events: ${({ variant, theme }) => theme.button[variant!].pointerEvents};
  box-shadow: ${({ variant, theme }) => theme.button[variant!].boxShadow};
  flex-direction: ${({ iconPosition }) => (iconPosition === 'left' ? 'row' : 'row-reverse')};
  /* Theme style */
  color: ${({ variant, theme }) => theme.button[variant!].fontColor};
  font-family: ${({ variant, theme }) => theme.button[variant!].fontFamily};
  font-weight: ${({ variant, theme }) => theme.button[variant!].fontWeight};
  background: ${({ variant, theme }) => theme.button[variant!].background};
  transition: ${({ variant, theme }) => theme.button[variant!].transition};
  -webkit-transition: ${({ variant, theme }) => theme.button[variant!].transition};
  -moz-transition: ${({ variant, theme }) => theme.button[variant!].transition};
  -o-transition: ${({ variant, theme }) => theme.button[variant!].transition};

  svg {
    transition: ${({ variant, theme }) => theme.button[variant!].transition};
    -webkit-transition: ${({ variant, theme }) => theme.button[variant!].transition};
    -moz-transition: ${({ variant, theme }) => theme.button[variant!].transition};
    -o-transition: ${({ variant, theme }) => theme.button[variant!].transition};
    fill: ${({ variant, theme }) => theme.button[variant!].icon.fill};
  }

  /* Hover states  */
  &:hover {
    color: ${({ variant, theme }) => theme.button[variant!].fontColorHover};
    background: ${({ variant, theme }) => theme.button[variant!].backgroundHover};
    font-weight: ${({ variant, theme }) => theme.button[variant!].fontWeightHover};
    box-shadow: ${({ variant, theme }) => theme.button[variant!].boxShadowHover};
    transform: ${({ variant, theme }) => theme.button[variant!].transformHover};
    svg {
      fill: ${({ variant, theme }) => theme.button[variant!].icon.fillHover};
    }
    &:after {
      width: ${({ variant, theme }) => theme.button[variant!].widthAfterHover};
    }
  }

  /* Focus states  */
  &:focus {
    color: ${({ variant, theme }) => theme.button[variant!].fontColorFocus};
    background: ${({ variant, theme }) => theme.button[variant!].backgroundFocus};
    font-weight: ${({ variant, theme }) => theme.button[variant!].fontWeightFocus};
    box-shadow: ${({ variant, theme }) => theme.button[variant!].boxShadowFocus};
    svg {
      fill: ${({ variant, theme }) => theme.button[variant!].icon.fillFocus};
    }
  }

  /* active states  */
  &:active {
    color: ${({ variant, theme }) => theme.button[variant!].fontColorActive};
    background: ${({ variant, theme }) => theme.button[variant!].backgroundActive};
    font-weight: ${({ variant, theme }) => theme.button[variant!].fontWeightActive};
    box-shadow: ${({ variant, theme }) => theme.button[variant!].boxShadowActive};
    svg {
      fill: ${({ variant, theme }) => theme.button[variant!].icon.fillActive};
    }
  }

  /* Disabled state  */
  &:disabled {
    color: ${({ variant, theme }) => theme.button[variant!].disabled.fontColor};
    background: ${({ variant, theme }) => theme.button[variant!].disabled.background};
  }

  ${({ isActive, variant, theme }) =>
    isActive &&
    css`
      color: ${theme.button[variant!].fontColorActivated};
      background: ${theme.button[variant!].backgroundaActivated};
      font-weight: ${theme.button[variant!].fontWeightActivated};
      box-shadow: ${theme.button[variant!].boxShadowActivated};
      svg {
        fill: ${theme.button[variant!].icon.fillActivated};
        transform: ${theme.button[variant!].icon.transform};
      }
    `};

  ${({ as, variant, theme }) =>
    as === 'div' &&
    css`
      cursor: ${theme.button[variant!].asCursor};
      pointer-events: ${theme.button[variant!].asPointerEvents};
    `}

  /* Is Activated state Toggle buttons */
  &[data-state='on'],
  &[data-state='open'] {
    color: ${({ variant, theme }) => theme.button[variant!].fontColorActivated};
    background: ${({ variant, theme }) => theme.button[variant!].backgroundaActivated};
    font-weight: ${({ variant, theme }) => theme.button[variant!].fontWeightActivated};
    svg {
      fill: ${({ variant, theme }) => theme.button[variant!].icon.fillActivated};
      transform: ${({ variant, theme }) => theme.button[variant!].transform};
    }
  }

  &:after {
    content: ${({ variant, theme }) => theme.button[variant!].contentAfter};
    position: ${({ variant, theme }) => theme.button[variant!].positionAfter};
    width: ${({ variant, theme }) => theme.button[variant!].widthAfter};
    height: ${({ variant, theme }) => theme.button[variant!].heightAfter};
    background: ${({ variant, theme }) => theme.button[variant!].backgroundAfter};
    bottom: ${({ variant, theme }) => theme.button[variant!].bottomAfter};
    left: ${({ variant, theme }) => theme.button[variant!].leftAfter};
    transition: ${({ variant, theme }) => theme.button[variant!].transitionAfter};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.button[variant!].mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.button[variant!].mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.button[variant!].mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.button[variant!].mobile.margin};
    padding: ${({ variant, theme }) => theme.button[variant!].mobile.padding};
    border: ${({ variant, theme }) => theme.button[variant!].mobile.border};
    border-top: ${({ variant, theme }) => theme.button[variant!].mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.button[variant!].mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.button[variant!].mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.button[variant!].mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.button[variant!].mobile.borderRadius};
    // Icon
    svg {
      height: ${({ variant, theme }) => theme.button[variant!].mobile.icon.height};
      width: ${({ variant, theme }) => theme.button[variant!].mobile.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.button[variant!].mobile.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.button[variant!].mobile.icon.margin};
    }
    /* Hover, Active, Focus states  */
    &:hover {
      border: ${({ variant, theme }) => theme.button[variant!].mobile.borderHover};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobile.borderTopHover};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobile.borderRightHover};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobile.borderBottomHover};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobile.borderLeftHover};
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobile.borderRadiusHover};
    }
    &:focus {
      border: ${({ variant, theme }) => theme.button[variant!].mobile.borderFocus};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobile.borderTopFocus};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobile.borderRightFocus};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobile.borderBottomFocus};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobile.borderLeftFocus};
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobile.borderRadiusFocus};
    }
    &:active {
      border: ${({ variant, theme }) => theme.button[variant!].mobile.borderActive};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobile.borderTopActive};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobile.borderRightActive};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobile.borderBottomActive};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobile.borderLeftActive};
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobile.borderRadiusActive};
    }
    ${({ isActive, variant, theme }) =>
      isActive &&
      css`
        border: ${theme.button[variant!].mobile.borderActivated};
        border-top: ${theme.button[variant!].mobile.borderTopActivated};
        border-right: ${theme.button[variant!].mobile.borderRightActivated};
        border-bottom: ${theme.button[variant!].mobile.borderBottomActivated};
        border-left: ${theme.button[variant!].mobile.borderLeftActivated};
        border-radius: ${theme.button[variant!].mobile.borderRadiusActivated};
      `};
    &[data-state='on'],
    &[data-state='open'] {
      border: ${({ variant, theme }) => theme.button[variant!].mobile.borderActivated};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobile.borderTopActivated};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobile.borderRightActivated};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobile.borderBottomActivated};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobile.borderLeftActivated};
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobile.borderRadiusActivated};
    }
  }

  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.button[variant!].mobileLarge.fontSize};
    line-height: ${({ variant, theme }) => theme.button[variant!].mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.button[variant!].mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.button[variant!].mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.button[variant!].mobileLarge.padding};
    border: ${({ variant, theme }) => theme.button[variant!].mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderTop};
    border-right: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRadius};

    // Icon
    svg {
      height: ${({ variant, theme }) => theme.button[variant!].mobileLarge.icon.height};
      width: ${({ variant, theme }) => theme.button[variant!].mobileLarge.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.button[variant!].mobileLarge.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.button[variant!].mobileLarge.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRadiusHover};
      border: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderHover};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderTopHover};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRightHover};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderBottomHover};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderFocus};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderTopFocus};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRightFocus};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderBottomFocus};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRadiusActive};
      border: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderActive};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderTopActive};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRightActive};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderBottomActive};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderLeftActive};
    }
    ${({ isActive, variant, theme }) =>
      isActive &&
      css`
        border-radius: ${theme.button[variant!].mobileLarge.borderRadiusActivated};
        border: ${theme.button[variant!].mobileLarge.borderActivated};
        border-top: ${theme.button[variant!].mobileLarge.borderTopActivated};
        border-right: ${theme.button[variant!].mobileLarge.borderRightActivated};
        border-bottom: ${theme.button[variant!].mobileLarge.borderBottomActivated};
        border-left: ${theme.button[variant!].mobileLarge.borderLeftActivated};
      `};
    &[data-state='on'],
    &[data-state='open'] {
      border-radius: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRadiusActivated};
      border: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderActivated};
      border-top: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderTopActivated};
      border-right: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderRightActivated};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderBottomActivated};
      border-left: ${({ variant, theme }) => theme.button[variant!].mobileLarge.borderLeftActivated};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.button[variant!].tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.button[variant!].tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.button[variant!].tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.button[variant!].tablet.margin};
    padding: ${({ variant, theme }) => theme.button[variant!].tablet.padding};
    border: ${({ variant, theme }) => theme.button[variant!].tablet.border};
    border-top: ${({ variant, theme }) => theme.button[variant!].tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.button[variant!].tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.button[variant!].tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.button[variant!].tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.button[variant!].tablet.borderRadius};

    // Icon
    svg {
      height: ${({ variant, theme }) => theme.button[variant!].tablet.icon.height};
      width: ${({ variant, theme }) => theme.button[variant!].tablet.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.button[variant!].tablet.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.button[variant!].tablet.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) => theme.button[variant!].tablet.borderRadiusHover};
      border: ${({ variant, theme }) => theme.button[variant!].tablet.borderHover};
      border-top: ${({ variant, theme }) => theme.button[variant!].tablet.borderTopHover};
      border-right: ${({ variant, theme }) => theme.button[variant!].tablet.borderRightHover};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].tablet.borderBottomHover};
      border-left: ${({ variant, theme }) => theme.button[variant!].tablet.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) => theme.button[variant!].tablet.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.button[variant!].tablet.borderFocus};
      border-top: ${({ variant, theme }) => theme.button[variant!].tablet.borderTopFocus};
      border-right: ${({ variant, theme }) => theme.button[variant!].tablet.borderRightFocus};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].tablet.borderBottomFocus};
      border-left: ${({ variant, theme }) => theme.button[variant!].tablet.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) => theme.button[variant!].tablet.borderRadiusActive};
      border: ${({ variant, theme }) => theme.button[variant!].tablet.borderActive};
      border-top: ${({ variant, theme }) => theme.button[variant!].tablet.borderTopActive};
      border-right: ${({ variant, theme }) => theme.button[variant!].tablet.borderRightActive};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].tablet.borderBottomActive};
      border-left: ${({ variant, theme }) => theme.button[variant!].tablet.borderLeftActive};
    }
    ${({ isActive, variant, theme }) =>
      isActive &&
      css`
        border-radius: ${theme.button[variant!].tablet.borderRadiusActivated};
        border: ${theme.button[variant!].tablet.borderActivated};
        border-top: ${theme.button[variant!].tablet.borderTopActivated};
        border-right: ${theme.button[variant!].tablet.borderRightActivated};
        border-bottom: ${theme.button[variant!].tablet.borderBottomActivated};
        border-left: ${theme.button[variant!].tablet.borderLeftActivated};
      `};
    &[data-state='on'],
    &[data-state='open'] {
      border-radius: ${({ variant, theme }) => theme.button[variant!].tablet.borderRadiusActivated};
      border: ${({ variant, theme }) => theme.button[variant!].tablet.borderActivated};
      border-top: ${({ variant, theme }) => theme.button[variant!].tablet.borderTopActivated};
      border-right: ${({ variant, theme }) => theme.button[variant!].tablet.borderRightActivated};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].tablet.borderBottomActivated};
      border-left: ${({ variant, theme }) => theme.button[variant!].tablet.borderLeftActivated};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.button[variant!].desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.button[variant!].desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.button[variant!].desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.button[variant!].desktop.margin};
    padding: ${({ variant, theme }) => theme.button[variant!].desktop.padding};
    border: ${({ variant, theme }) => theme.button[variant!].desktop.border};
    border-top: ${({ variant, theme }) => theme.button[variant!].desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.button[variant!].desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.button[variant!].desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.button[variant!].desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.button[variant!].desktop.borderRadius};

    // Icon
    svg {
      height: ${({ variant, theme }) => theme.button[variant!].desktop.icon.height};
      width: ${({ variant, theme }) => theme.button[variant!].desktop.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.button[variant!].desktop.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.button[variant!].desktop.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) => theme.button[variant!].desktop.borderRadiusHover};
      border: ${({ variant, theme }) => theme.button[variant!].desktop.borderHover};
      border-top: ${({ variant, theme }) => theme.button[variant!].desktop.borderTopHover};
      border-right: ${({ variant, theme }) => theme.button[variant!].desktop.borderRightHover};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].desktop.borderBottomHover};
      border-left: ${({ variant, theme }) => theme.button[variant!].desktop.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) => theme.button[variant!].desktop.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.button[variant!].desktop.borderFocus};
      border-top: ${({ variant, theme }) => theme.button[variant!].desktop.borderTopFocus};
      border-right: ${({ variant, theme }) => theme.button[variant!].desktop.borderRightFocus};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].desktop.borderBottomFocus};
      border-left: ${({ variant, theme }) => theme.button[variant!].desktop.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) => theme.button[variant!].desktop.borderRadiusActive};
      border: ${({ variant, theme }) => theme.button[variant!].desktop.borderActive};
      border-top: ${({ variant, theme }) => theme.button[variant!].desktop.borderTopActive};
      border-right: ${({ variant, theme }) => theme.button[variant!].desktop.borderRightActive};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].desktop.borderBottomActive};
      border-left: ${({ variant, theme }) => theme.button[variant!].desktop.borderLeftActive};
    }
    ${({ isActive, variant, theme }) =>
      isActive &&
      css`
        border-radius: ${theme.button[variant!].desktop.borderRadiusActivated};
        border: ${theme.button[variant!].desktop.borderActivated};
        border-top: ${theme.button[variant!].desktop.borderTopActivated};
        border-right: ${theme.button[variant!].desktop.borderRightActivated};
        border-bottom: ${theme.button[variant!].desktop.borderBottomActivated};
        border-left: ${theme.button[variant!].desktop.borderLeftActivated};
      `};
    &[data-state='on'],
    &[data-state='open'] {
      border-radius: ${({ variant, theme }) => theme.button[variant!].desktop.borderRadiusActivated};
      border: ${({ variant, theme }) => theme.button[variant!].desktop.borderActivated};
      border-top: ${({ variant, theme }) => theme.button[variant!].desktop.borderTopActivated};
      border-right: ${({ variant, theme }) => theme.button[variant!].desktop.borderRightActivated};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].desktop.borderBottomActivated};
      border-left: ${({ variant, theme }) => theme.button[variant!].desktop.borderLeftActivated};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    /* Theme style */
    font-size: ${({ variant, theme }) => theme.button[variant!].widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.button[variant!].widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.button[variant!].widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.button[variant!].widescreen.margin};
    padding: ${({ variant, theme }) => theme.button[variant!].widescreen.padding};
    border: ${({ variant, theme }) => theme.button[variant!].widescreen.border};
    border-top: ${({ variant, theme }) => theme.button[variant!].widescreen.borderTop};
    border-right: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRight};
    border-bottom: ${({ variant, theme }) => theme.button[variant!].widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.button[variant!].widescreen.borderLeft};
    border-radius: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRadius};

    // Icon
    svg {
      height: ${({ variant, theme }) => theme.button[variant!].widescreen.icon.height};
      width: ${({ variant, theme }) => theme.button[variant!].widescreen.icon.width};
      margin-left: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'right' && theme.button[variant!].widescreen.icon.margin};
      margin-right: ${({ variant, iconPosition, theme }) =>
        iconPosition === 'left' && theme.button[variant!].widescreen.icon.margin};
    }

    /* Hover, Active, Focus states  */
    &:hover {
      border-radius: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRadiusHover};
      border: ${({ variant, theme }) => theme.button[variant!].widescreen.borderHover};
      border-top: ${({ variant, theme }) => theme.button[variant!].widescreen.borderTopHover};
      border-right: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRightHover};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].widescreen.borderBottomHover};
      border-left: ${({ variant, theme }) => theme.button[variant!].widescreen.borderLeftHover};
    }
    &:focus {
      border-radius: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRadiusFocus};
      border: ${({ variant, theme }) => theme.button[variant!].widescreen.borderFocus};
      border-top: ${({ variant, theme }) => theme.button[variant!].widescreen.borderTopFocus};
      border-right: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRightFocus};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].widescreen.borderBottomFocus};
      border-left: ${({ variant, theme }) => theme.button[variant!].widescreen.borderLeftFocus};
    }
    &:active {
      border-radius: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRadiusActive};
      border: ${({ variant, theme }) => theme.button[variant!].widescreen.borderActive};
      border-top: ${({ variant, theme }) => theme.button[variant!].widescreen.borderTopActive};
      border-right: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRightActive};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].widescreen.borderBottomActive};
      border-left: ${({ variant, theme }) => theme.button[variant!].widescreen.borderLeftActive};
    }
    ${({ isActive, variant, theme }) =>
      isActive &&
      css`
        border-radius: ${theme.button[variant!].widescreen.borderRadiusActivated};
        border: ${theme.button[variant!].widescreen.borderActivated};
        border-top: ${theme.button[variant!].widescreen.borderTopActivated};
        border-right: ${theme.button[variant!].widescreen.borderRightActivated};
        border-bottom: ${theme.button[variant!].widescreen.borderBottomActivated};
        border-left: ${theme.button[variant!].widescreen.borderLeftActivated};
      `};
    &[data-state='on'],
    &[data-state='open'] {
      border-radius: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRadiusActivated};
      border: ${({ variant, theme }) => theme.button[variant!].widescreen.borderActivated};
      border-top: ${({ variant, theme }) => theme.button[variant!].widescreen.borderTopActivated};
      border-right: ${({ variant, theme }) => theme.button[variant!].widescreen.borderRightActivated};
      border-bottom: ${({ variant, theme }) => theme.button[variant!].widescreen.borderBottomActivated};
      border-left: ${({ variant, theme }) => theme.button[variant!].widescreen.borderLeftActivated};
    }
  }
`;

export default StyledButton;
