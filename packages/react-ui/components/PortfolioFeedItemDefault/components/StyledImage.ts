import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  border-radius: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledImage.borderRadius};

  all: ${({ layoutVariant, theme }) => theme.PortfolioFeedItemDefault[layoutVariant!].StyledImage.all};
  cursor: ${({ layoutVariant, theme }) => theme.PortfolioFeedItemDefault[layoutVariant!].StyledImage.cursor};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledImage.pointerEvent};

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
export default StyledImage;
