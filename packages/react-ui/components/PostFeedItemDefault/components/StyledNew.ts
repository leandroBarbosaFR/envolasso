import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNew = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  margin-left: 10px;
  position: absolute;
  z-index: 5;
  right: 5px;
  top: 5px;

  span {
    color: #96ddff;
    font-weight: 700;
  }

  animation: blink 2s infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

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

export default StyledNew;
