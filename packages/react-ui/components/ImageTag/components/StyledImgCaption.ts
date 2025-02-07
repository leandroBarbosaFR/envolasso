import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledParagraph from '../../Paragraph/components/StyledParagraph';

const StyledImgCaption = styled(StyledParagraph)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ variant, theme }) => theme.Paragraph[variant!].fontColor};
  font-family: ${({ variant, theme }) => theme.Paragraph[variant!].fontFamily};
  font-weight: ${({ variant, theme }) => theme.Paragraph[variant!].fontWeight};
  b,
  strong {
    font-family: ${({ variant, theme }) => theme.Paragraph[variant!].fontFamilyStrong};
    font-weight: ${({ variant, theme }) => theme.Paragraph[variant!].fontWeightStrong};
  }
  a {
    color: ${({ variant, theme }) => theme.Paragraph[variant!].a.link};
    &:visited {
      color: ${({ variant, theme }) => theme.Paragraph[variant!].a.visited};
    }
    &:hover {
      color: ${({ variant, theme }) => theme.Paragraph[variant!].a.hover};
    }
    &:active {
      color: ${({ variant, theme }) => theme.Paragraph[variant!].a.active};
    }
    text-decoration: ${({ variant, theme }) => theme.Paragraph[variant!].a.textDecoration};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.Paragraph[variant!].mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.Paragraph[variant!].mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Paragraph[variant!].mobile.letterSpacing};
    margin: ${({ variant, theme }) => `${theme.Paragraph[variant!].mobile.margin}`};
    padding: ${({ variant, theme }) => `${theme.Paragraph[variant!].mobile.padding}`};
  }

  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ variant, theme }) => theme.Paragraph[variant!].mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.Paragraph[variant!].mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Paragraph[variant!].mobile.letterSpacing};
    margin: ${({ variant, theme }) => `${theme.Paragraph[variant!].mobile.margin}`};
    padding: ${({ variant, theme }) => `${theme.Paragraph[variant!].mobile.padding}`};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ variant, theme }) => theme.Paragraph[variant!].tablet.fontSize};
    line-height: ${({ variant, theme }) => theme.Paragraph[variant!].tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Paragraph[variant!].tablet.letterSpacing};
    margin: ${({ variant, theme }) => `${theme.Paragraph[variant!].tablet.margin}`};
    padding: ${({ variant, theme }) => `${theme.Paragraph[variant!].tablet.padding}`};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ variant, theme }) => theme.Paragraph[variant!].desktop.fontSize};
    line-height: ${({ variant, theme }) => theme.Paragraph[variant!].desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Paragraph[variant!].desktop.letterSpacing};
    margin: ${({ variant, theme }) => `${theme.Paragraph[variant!].desktop.margin}`};
    padding: ${({ variant, theme }) => `${theme.Paragraph[variant!].desktop.padding}`};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ variant, theme }) => theme.Paragraph[variant!].widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.Paragraph[variant!].widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.Paragraph[variant!].widescreen.letterSpacing};
    margin: ${({ variant, theme }) => `${theme.Paragraph[variant!].widescreen.margin}`};
    padding: ${({ variant, theme }) => `${theme.Paragraph[variant!].widescreen.padding}`};
  }
`;

export default StyledImgCaption;
