import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledBlockQuote = styled.blockquote<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ variant, theme }) => theme.BlockQuote[variant!].fontColor};
  font-family: ${({ variant, theme }) => theme.BlockQuote[variant!].fontFamily};
  font-weight: ${({ variant, theme }) => theme.BlockQuote[variant!].fontWeight};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    /* font */
    font-size: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.margin};
    /* border */
    border: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.border};
    border-top: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.BlockQuote[variant!].mobile.borderLeft};
  }
  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    /* font */
    font-size: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.fontSize};
    line-height: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.margin};
    /* border */
    border: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.borderTop};
    border-right: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.BlockQuote[variant!].mobileLarge.borderLeft};
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    /* font */
    font-size: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.margin};
    /* border */
    border: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.border};
    border-top: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.BlockQuote[variant!].tablet.borderLeft};
  }
  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    /* font */
    font-size: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.margin};
    /* border */
    border: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.border};
    border-top: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.BlockQuote[variant!].desktop.borderLeft};
  }
  // ==========================================================================
  // Widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    /* font */
    font-size: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.letterSpacing};
    // margin
    margin: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.margin};
    /* border */
    border: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.border};
    border-top: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.borderTop};
    border-right: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.borderRight};
    border-bottom: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.BlockQuote[variant!].widescreen.borderLeft};
  }
`;

export default StyledBlockQuote;
