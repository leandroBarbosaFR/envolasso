import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledReviewWrapper = styled.button<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: transparent;
  height: fit-content;
  width: auto;
  border: none;
  gap: 10px;
  overflow: scroll;
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }

  // ==========================================================================
  // Large Mobile
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

export default StyledReviewWrapper;
