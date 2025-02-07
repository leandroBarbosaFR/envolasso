import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const GlobalSuccessMessage = styled.span<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessage.color};
  letter-spacing: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessage.letterSpacing};

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

export default GlobalSuccessMessage;
