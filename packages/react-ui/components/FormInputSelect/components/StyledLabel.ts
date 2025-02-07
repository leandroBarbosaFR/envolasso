import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLabel = styled.label<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.position};
  color: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.textTransform};
  text-align: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.textAlign};
  background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.background};
  display: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.display};
  width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.width};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledLabel.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledLabel.widescreen.borderRadius};
  }
`;

export default StyledLabel;
