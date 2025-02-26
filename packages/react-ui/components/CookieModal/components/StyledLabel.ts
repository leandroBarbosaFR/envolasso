import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLabel = styled.div<StyledComponentProps>`
  display: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.display};
  align-items: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.alignItems};
  gap: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.gap};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledLabel.widescreen.margin};
  }
`;

export default StyledLabel;
