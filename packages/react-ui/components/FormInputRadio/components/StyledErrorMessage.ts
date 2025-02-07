import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.span<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.position};
  color: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.textTransform};
  text-align: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.textAlign};
  background: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.background};
  display: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.display};
  width: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.width};
  transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  -webkit-transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  -moz-transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  -o-transition: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelect.transition};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobile.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobile.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobile.borderRadius};
    top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.top};
    bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.bottom};
    left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.left};
    right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobile.right};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.borderRadius};
    top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.top};
    bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.bottom};
    left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.left};
    right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.mobileLarge.right};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.tablet.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.tablet.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.tablet.borderRadius};
    top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.top};
    bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.bottom};
    left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.left};
    right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.tablet.right};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.desktop.borderRadius};
    top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.top};
    bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.bottom};
    left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.left};
    right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.desktop.right};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.borderRadius};
    top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.top};
    bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.bottom};
    left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.left};
    right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledErrorMessage.widescreen.right};
  }
`;

export default StyledErrorMessage;
