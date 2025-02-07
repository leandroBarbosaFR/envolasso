import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ variant, theme }) => theme.burgerNavToggle[variant!].cursor};
  text-align: ${({ variant, theme }) => theme.burgerNavToggle[variant!].textAlign};
  white-space: ${({ variant, theme }) => theme.burgerNavToggle[variant!].whiteSpace};
  text-decoration: ${({ variant, theme }) => theme.burgerNavToggle[variant!].textDecoration};
  position: ${({ variant, theme }) => theme.burgerNavToggle[variant!].position};
  background: ${({ variant, theme }) => theme.burgerNavToggle[variant!].background};
  display: ${({ variant, theme }) => theme.burgerNavToggle[variant!].display};
  flex-direction: ${({ variant, theme }) => theme.burgerNavToggle[variant!].flexDirection};
  justify-content: ${({ variant, theme }) => theme.burgerNavToggle[variant!].justifyContent};
  span {
    display: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.display};
    pointer-events: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.pointerEvents};
    width: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.width};
    opacity: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.opacity};
    height: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.height};
    background: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.fill};
    transition: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.transition};
  }
  ${({ active, variant, theme }) =>
    active &&
    css`
      align-items: ${theme.burgerNavToggle[variant!].isActive.alignItems};
      justify-content: ${theme.burgerNavToggle[variant!].isActive.justifyContent};
      span {
        position: ${theme.burgerNavToggle[variant!].span.position};
        background: ${theme.burgerNavToggle[variant!].span.fillActive};
      }
      span:nth-child(1) {
        display: ${theme.burgerNavToggle[variant!].span.spanFirstChild.display};
      }
      span:nth-child(2) {
        transform: ${theme.burgerNavToggle[variant!].span.spanSecondChild.transform};
      }
      span:nth-child(3) {
        transform: ${theme.burgerNavToggle[variant!].span.spanThirdChild.transform};
      }
    `};

  ${({ isCollapsed, variant, theme }) =>
    isCollapsed &&
    css`
      span {
        background: ${theme.burgerNavToggle[variant!].span.fillCollapsed};
      }
    `};

  /* THIS IS UNUSED AT THE MOMENT */
  &.inverted span {
    background: ${({ variant, theme }) => theme.burgerNavToggle[variant!].backgroundInverted};
  }

  /* Hover, Active, Focus states  */
  &:hover,
  &:focus,
  &:active {
    background: ${({ variant, theme }) => theme.burgerNavToggle[variant!].backgroundHover};
    span {
      background: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.fillHover};
    }
  }

  /* Disabled state  */
  &:disabled {
    pointer-events: ${({ variant, theme }) => theme.burgerNavToggle[variant!].PointerEventDisabled};
    background: ${({ variant, theme }) => theme.burgerNavToggle[variant!].backgroundDisabled};
    span {
      opacity: ${({ variant, theme }) => theme.burgerNavToggle[variant!].span.opacityDisabled};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.height};
    width: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.width};
    margin: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.margin};
    padding: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.padding};
    border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.border};
    border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderRadius};

    /* Hover, Active, Focus states  */
    &:hover,
    &:focus,
    &:active {
      border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.border};
      border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderTopHover};
      border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderRightHover};
      border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderBottomHover};
      border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobile.borderLeftHover};
    }

    ${({ active }) =>
      active &&
      css`
        height: ${({ variant, theme }: any) => theme.burgerNavToggle[variant!].mobile.active.height};
        width: ${({ variant, theme }: any) => theme.burgerNavToggle[variant!].mobile.active.width};
      `};
  }

  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.height};
    width: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.width};
    margin: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.padding};

    border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderTop};
    border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderRadius};
    /* Hover, Active, Focus states  */
    &:hover,
    &:focus,
    &:active {
      border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.border};
      border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderTop};
      border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderRight};
      border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderBottom};
      border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].mobileLarge.borderLeft};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.height};
    width: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.width};
    margin: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.margin};
    padding: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.padding};

    border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.border};
    border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderRadius};
    /* Hover, Active, Focus states  */
    &:hover,
    &:focus,
    &:active {
      border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.border};
      border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderTop};
      border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderRight};
      border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderBottom};
      border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].tablet.borderLeft};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.height};
    width: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.width};
    margin: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.margin};
    padding: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.padding};

    border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.border};
    border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderRadius};
    /* Hover, Active, Focus states  */
    &:hover,
    &:focus,
    &:active {
      border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.border};
      border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderTop};
      border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderRight};
      border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderBottom};
      border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].desktop.borderLeft};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.height};
    width: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.width};
    margin: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.margin};
    padding: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.padding};

    border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.border};
    border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderTop};
    border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderRight};
    border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderLeft};
    border-radius: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderRadius};
    /* Hover, Active, Focus states  */
    &:hover,
    &:focus,
    &:active {
      border: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.border};
      border-top: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderTop};
      border-right: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderRight};
      border-bottom: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderBottom};
      border-left: ${({ variant, theme }) => theme.burgerNavToggle[variant!].widescreen.borderLeft};
    }
  }
`;

export default StyledButton;
