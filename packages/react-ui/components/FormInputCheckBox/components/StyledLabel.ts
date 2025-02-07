import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLabel = styled.label<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.position};
  color: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.textTransform};
  text-align: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.textAlign};
  background: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.background};
  display: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.display};
  width: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.width};
  cursor: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.cursor};
  -webkit-user-select: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.userSelect};
  -moz-user-select: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.userSelect};
  -ms-user-select: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.userSelect};
  user-select: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.userSelect};

  .checkbox {
    height: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.height};
    width: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.width};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.border};
    border-radius: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.borderRadius};
    background: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.background};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.margin};
  }
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkbox span {
    width: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.Span.width};
    height: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.Span.height};
    display: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.Span.display};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.Span.border};
    border-radius: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.Span.borderRadius};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.Span.margin};
  }
  /* When the checkbox is checked, add a blue background */
  input:checked + .checkbox span {
    background: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].checkbox.SpanActive.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobile.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.tablet.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledLabel.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputCheckBox[variant!].StyledLabel.widescreen.borderRadius};
  }
`;

export default StyledLabel;
