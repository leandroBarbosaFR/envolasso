import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCarouselItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  width: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledCarouselItem.width};
  height: ${({ layoutVariant, theme }) => theme.HomeCarouselItem[layoutVariant!].StyledCarouselItem.height};
  img {
    object-fit: ${({ layoutVariant, theme }) =>
      theme.HomeCarouselItem[layoutVariant!].StyledCarouselItem.objectFit};
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

export default StyledCarouselItem;
