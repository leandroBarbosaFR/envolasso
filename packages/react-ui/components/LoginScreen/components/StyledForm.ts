import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledForm = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: flex;
  width: 100vw;
  background-color: transparent;
  justify-content: center;

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    transform: translate(0, 20%);
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
    transform: translate(0, 10%);
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
    transform: translate(0, 50%);
  }
`;
export default StyledForm;
