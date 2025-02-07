import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLabel = styled.label<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.position};
  color: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.textTransform};
  text-align: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.textAlign};
  background: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.background};
  display: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.display};
  width: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.width};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputMixed[variant!].StyledLabel.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputMixed[variant!].StyledLabel.widescreen.borderRadius};
  }
`;

export default StyledLabel;
