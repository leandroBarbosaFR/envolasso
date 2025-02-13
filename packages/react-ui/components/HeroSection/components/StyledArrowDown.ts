import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledArrowDown = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledArrowDown.zIndex};
  position: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledArrowDown.position};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledArrowDown.mobile.bottom};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledArrowDown.mobile.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledArrowDown.mobile.transform};
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

export default StyledArrowDown;
