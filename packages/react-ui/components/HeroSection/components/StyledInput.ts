import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledInput = styled.input<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.zIndex};
  /* RESET */
  border: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.border};
  outline: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.outline};
  margin: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.margin};
  background-image: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.backgroundImage};
  background-color: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.backgroundColor};
  background: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.background};
  -webkit-box-shadow: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.webkitBoxShadow};
  -moz-box-shadow: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mozBoxShadow};
  box-shadow: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.boxShadow};
  // Styles
  color: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.color};
  font-family: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.fontFamily};
  font-weight: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.fontWeight};
  &::placeholder {
    color: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.placeholder.color};
    font-family: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.placeholder.fontFamily};
    font-weight: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.placeholder.fontWeight};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.letterSpacing};
    &::placeholder {
      font-size: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.placeholder.fontSize};
      line-height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.placeholder.lineHeight};
      letter-spacing: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.placeholder.letterSpacing};
    }
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.width};
    max-width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.widthMax};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.letterSpacing};
    &::placeholder {
      font-size: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.placeholder.fontSize};
      line-height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.placeholder.lineHeight};
      letter-spacing: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.placeholder
          .letterSpacing};
    }
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.width};
    max-width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.widthMax};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.letterSpacing};
    &::placeholder {
      font-size: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.placeholder.fontSize};
      line-height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.placeholder.lineHeight};
      letter-spacing: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.placeholder.letterSpacing};
    }
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.width};
    max-width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.widthMax};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.letterSpacing};
    &::placeholder {
      font-size: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.placeholder.fontSize};
      line-height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.placeholder.lineHeight};
      letter-spacing: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.placeholder.letterSpacing};
    }
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.width};
    max-width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.widthMax};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.letterSpacing};
    &::placeholder {
      font-size: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.placeholder.fontSize};
      line-height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.placeholder.lineHeight};
      letter-spacing: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.placeholder
          .letterSpacing};
    }
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.width};
    max-width: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.widthMax};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.StyledInput.widescreen.padding};
  }
`;
export default StyledInput;
