import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImageWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  border-radius: 10px;
  overflow: hidden;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: 3/11;
    grid-row: -2;
    display: block;
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: 4/10;
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: 9 / 13;
    grid-row: 4 / 5;
    display: block;
    height: fit-content;
    display: block;
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: 9 / 13;
    grid-row: 1 / 4;
    display: block;
    height: fit-content;
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: 9 / 13;
    grid-row: 1 / 4;
    display: block;
  }
`;
export default StyledImageWrap;
