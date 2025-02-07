import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledMarqueeWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  grid-column: 1/13;
  background: #292929;

  padding: 0 0;
  span {
    background: linear-gradient(90deg, #ecf3ff, #ffe3ee, #ecf3ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 50px;
    line-height: 1.5;
    font-family: PlayfairDisplaySemiBold, Helvetica, Arial, sans-serif;
    background-size: 200%; /* Makes the gradient larger than the text for smoother movement */
    animation: gradient-move 5s linear infinite; /* Animate the gradient */
  }

  @keyframes gradient-move {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
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
export default StyledMarqueeWrapper;
