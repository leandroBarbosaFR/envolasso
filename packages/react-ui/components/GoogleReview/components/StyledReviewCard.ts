import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledReviewCard = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background-color: rgba(24, 24, 27, 1);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: -4rem 0px 3rem #09090b;
  width: 400px;
  min-width: 250px;
  height: 450px;
  display: flex;
  position: relative;
  flex-direction: column;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: translateX(-1rem);
  }
  &:hover ~ {
    cursor: pointer;
    transform: translateX(130px);
  }
  &:not(:first-child) {
    margin-left: -130px;
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
export default StyledReviewCard;
