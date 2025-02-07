import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLabel = styled.label<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.position};
  color: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.fontColor};
  font-family: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.fontFamily};
  font-weight: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.fontWeight};
  text-transform: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.textTransform};
  text-align: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.textAlign};
  background: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.background};
  display: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.display};
  width: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.width};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobile.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.margin};
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.padding};
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobile.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.border};
    border-top: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.tablet.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.margin};
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.padding};
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.tablet.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.desktop.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.margin};
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.padding};
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.widescreen.letterSpacing};
    margin: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.widescreen.margin};
    padding: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.widescreen.padding};
    border: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.widescreen.border};
    border-top: ${({ variant, theme }) => theme.FormInputTextarea[variant!].StyledLabel.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.FormInputTextarea[variant!].StyledLabel.widescreen.borderRadius};
  }
`;

export default StyledLabel;
