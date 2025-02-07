import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLabel = styled.label<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.position};
  color: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.textTransform};
  text-align: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.textAlign};
  background: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.background};
  display: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.display};
  width: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.width};
  cursor: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.cursor};
  -webkit-user-select: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.userSelect};
  -moz-user-select: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.userSelect};
  -ms-user-select: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.userSelect};
  user-select: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.userSelect};

  .radio {
    height: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.height};
    width: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.width};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.border};
    border-radius: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.borderRadius};
    background: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.background};
  }
  /* Create the checkmark/indicator (hidden when not checked) */
  .radio span {
    width: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.Span.width};
    height: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.Span.height};
    display: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.Span.display};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.Span.border};
    border-radius: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.Span.borderRadius};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.Span.margin};
  }
  /* When the radio is checked, add a blue background */
  input:checked + .radio span {
    background: ${({ variant, theme }) => theme.FormInputRadio[variant!].radio.SpanActive.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledLabel.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputRadio[variant!].StyledLabel.widescreen.borderRadius};
  }
`;

export default StyledLabel;
