import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    background: rgba(255, 255, 255, 0.45);
    display: flex;
    flex-direction: column;
    grid-column: 1/13;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    padding: 20px;
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
    background: rgba(255, 255, 255, 0.45);
    display: flex;
    flex-direction: column;
    grid-column: 1/6;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    padding: 20px;
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledWrapper;
