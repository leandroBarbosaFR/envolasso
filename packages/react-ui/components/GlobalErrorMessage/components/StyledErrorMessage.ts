import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessage.color};
  letter-spacing: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessage.letterSpacing};

  // ==========================================================================
  // Mobile{}
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

export default StyledErrorMessage;
