import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  width: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledImage.width};
  img {
    -webkit-user-select: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.userSelect};
    -khtml-user-select: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.userSelect};
    -moz-user-select: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.userSelect};
    -o-user-select: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.userSelect};
    user-select: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.userSelect};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.pointerEvents};
    object-fit: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].ImageTag.objectFit};
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

export default StyledImage;
