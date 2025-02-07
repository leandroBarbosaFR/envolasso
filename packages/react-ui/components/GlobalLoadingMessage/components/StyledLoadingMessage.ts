import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLoadingMessage = styled.span<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessage.color};
  letter-spacing: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessage.letterSpacing};

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

export default StyledLoadingMessage;
