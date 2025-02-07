import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;

  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const StyledBgWrapper = styled.button<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: hidden;
  background: #000;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  z-index: 9999;
  border: none;

  &.slide-up {
    animation: ${slideUp} 0.5s forwards; // Durée de l'animation de sortie
  }

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

export default StyledBgWrapper;
