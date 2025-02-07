import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledInput = styled.input<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.color};
  font-family: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.fontFamily};
  font-weight: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.fontWeight};
  text-transform: ${({ layoutVariant, theme }) =>
    theme.NewsletterForm[layoutVariant!].StyledInput.textTransform};
  border: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.NewsletterForm[layoutVariant!].StyledInput.borderRadius};
  background: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.background};

  -webkit-appearance: ${({ layoutVariant, theme }) =>
    theme.NewsletterForm[layoutVariant!].StyledInput.webkitAppearance};
  -moz-appearance: ${({ layoutVariant, theme }) =>
    theme.NewsletterForm[layoutVariant!].StyledInput.mozAppearance};
  width: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.width};
  &:focus {
    background: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.focus.background};
    outline: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.focus.outline};
  }
  /*  Placeholder Colour */
  ::-webkit-input-placeholder {
    color: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.color};
    text-transform: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.textTransform};
    font-family: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontFamily};
    font-weight: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontWeight};
  }
  :-moz-placeholder {
    color: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.color};
    text-transform: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.textTransform};
    font-family: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontFamily};
    font-weight: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontWeight};
  }
  ::-moz-placeholder {
    color: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.color};
    text-transform: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.textTransform};
    font-family: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontFamily};
    font-weight: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontWeight};
  }
  :-ms-input-placeholder {
    color: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.color};
    text-transform: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.textTransform};
    font-family: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontFamily};
    font-weight: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.placeholder.fontWeight};
  }
  /* Change Autocomplete styles in Chrome*/
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.color};
    -webkit-box-shadow: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.webBoxShadow};
    box-shadow: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.boxShadow};
    transition: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.backgroundColor};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.mobile.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.mobile.lineHeight};
    padding: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.mobileLarge.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.mobileLarge.lineHeight};
    padding: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.tablet.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.tablet.lineHeight};
    padding: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledInput.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.desktop.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.desktop.lineHeight};
    padding: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.widescreen.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.widescreen.lineHeight};
    padding: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledInput.widescreen.padding};
  }
`;

export default StyledInput;
