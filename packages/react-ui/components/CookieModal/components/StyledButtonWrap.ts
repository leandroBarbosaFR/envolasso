import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledButtonWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  padding: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledButtonWrap.padding};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledButtonWrap.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledButtonWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledButtonWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledButtonWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) =>
      theme.CookieModal[layoutVariant!].StyledButtonWrap.widescreen.padding};
  }
`;

export default StyledButtonWrap;
