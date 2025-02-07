import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledButton = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledButton.position};
  top: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledButton.top};
  right: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledButton.right};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledButton;
