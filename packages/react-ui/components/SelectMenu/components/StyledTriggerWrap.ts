import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';

const StyledTriggerWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  text-transform: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.textTransform};
  cursor: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.cursor};
  display: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.display};
  align-items: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.alignItems};
  width: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.width};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.gap};
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.mobile.letterSpacing};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.mobile.borderRadius};
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.border};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.padding};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.margin};
    background: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.background};
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.color};
    hover {
      border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.borderHover};
      background: ${({ variant, theme }) =>
        theme.SelectMenu[variant!].StyledTriggerWrap.mobile.backgroundHover};
      color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobile.colorHover};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.gap};
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.letterSpacing};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.borderRadius};
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.border};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.padding};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.margin};
    background: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.background};
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.color};
    hover {
      border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.borderHover};
      background: ${({ variant, theme }) =>
        theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.backgroundHover};
      color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.mobileLarge.colorHover};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.gap};
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.tablet.letterSpacing};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.tablet.borderRadius};
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.border};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.padding};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.margin};
    background: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.background};
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.color};
    hover {
      border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.borderHover};
      background: ${({ variant, theme }) =>
        theme.SelectMenu[variant!].StyledTriggerWrap.tablet.backgroundHover};
      color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.tablet.colorHover};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.gap};
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.desktop.letterSpacing};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.desktop.borderRadius};
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.border};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.padding};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.margin};
    background: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.background};
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.color};
    hover {
      border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.borderHover};
      background: ${({ variant, theme }) =>
        theme.SelectMenu[variant!].StyledTriggerWrap.desktop.backgroundHover};
      color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.desktop.colorHover};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.gap};
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.letterSpacing};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.borderRadius};
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.border};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.padding};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.margin};
    background: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.background};
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.color};
    hover {
      border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.borderHover};
      background: ${({ variant, theme }) =>
        theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.backgroundHover};
      color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledTriggerWrap.widescreen.colorHover};
    }
  }
`;

export default StyledTriggerWrap;
