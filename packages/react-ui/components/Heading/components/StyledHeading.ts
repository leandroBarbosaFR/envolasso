import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledHeading = styled.h1<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ variant, theme }) => theme.Heading[variant!].fontColor};
  font-family: ${({ variant, theme }) => theme.Heading[variant!].fontFamily};
  font-weight: ${({ variant, theme }) => theme.Heading[variant!].fontWeight};
  text-transform: ${({ variant, theme }) => theme.Heading[variant!].textTransform};
  background: ${({ variant, theme }) => theme.Heading[variant!].background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: ${({ variant, theme }) => theme.Heading[variant!].mobile.textAlign};
    display: ${({ variant, theme }) => theme.Heading[variant!].mobile.display};
    /* font */
    font-size: ${({ variant, theme }) => theme.Heading[variant!].mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.Heading[variant!].mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Heading[variant!].mobile.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.Heading[variant!].mobile.margin};
    padding: ${({ variant, theme }) => theme.Heading[variant!].mobile.padding};
    /* border */
    border: ${({ variant, theme }) => theme.Heading[variant!].mobile.border};
    border-top: ${({ variant, theme }) => theme.Heading[variant!].mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.Heading[variant!].mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Heading[variant!].mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.Heading[variant!].mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Heading[variant!].mobile.borderRadius};
  }
  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    text-align: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.textAlign};
    display: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.display};
    /* font */
    font-size: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.fontSize};
    line-height: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.padding};
    /* border */
    border: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.borderTop};
    border-right: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Heading[variant!].mobileLarge.borderRadius};
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: ${({ variant, theme }) => theme.Heading[variant!].tablet.textAlign};
    display: ${({ variant, theme }) => theme.Heading[variant!].tablet.display};
    /* font */
    font-size: ${({ variant, theme }) => theme.Heading[variant!].tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.Heading[variant!].tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Heading[variant!].tablet.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.Heading[variant!].tablet.margin};
    padding: ${({ variant, theme }) => theme.Heading[variant!].tablet.padding};
    /* border */
    border: ${({ variant, theme }) => theme.Heading[variant!].tablet.border};
    border-top: ${({ variant, theme }) => theme.Heading[variant!].tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.Heading[variant!].tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Heading[variant!].tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.Heading[variant!].tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Heading[variant!].tablet.borderRadius};
  }
  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: ${({ variant, theme }) => theme.Heading[variant!].desktop.textAlign};
    display: ${({ variant, theme }) => theme.Heading[variant!].desktop.display};
    /* font */
    font-size: ${({ variant, theme }) => theme.Heading[variant!].desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.Heading[variant!].desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Heading[variant!].desktop.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.Heading[variant!].desktop.margin};
    padding: ${({ variant, theme }) => theme.Heading[variant!].desktop.padding};
    /* border */
    border: ${({ variant, theme }) => theme.Heading[variant!].desktop.border};
    border-top: ${({ variant, theme }) => theme.Heading[variant!].desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.Heading[variant!].desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Heading[variant!].desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.Heading[variant!].desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Heading[variant!].desktop.borderRadius};
  }
  // ==========================================================================
  // Widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    text-align: ${({ variant, theme }) => theme.Heading[variant!].widescreen.textAlign};
    display: ${({ variant, theme }) => theme.Heading[variant!].widescreen.display};
    /* font */
    font-size: ${({ variant, theme }) => theme.Heading[variant!].widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.Heading[variant!].widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Heading[variant!].widescreen.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.Heading[variant!].widescreen.margin};
    padding: ${({ variant, theme }) => theme.Heading[variant!].widescreen.padding};
    /* border */
    border: ${({ variant, theme }) => theme.Heading[variant!].widescreen.border};
    border-top: ${({ variant, theme }) => theme.Heading[variant!].widescreen.borderTop};
    border-right: ${({ variant, theme }) => theme.Heading[variant!].widescreen.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Heading[variant!].widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.Heading[variant!].widescreen.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Heading[variant!].widescreen.borderRadius};
  }
`;

export default StyledHeading;
