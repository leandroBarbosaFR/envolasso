import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.position};
  z-index: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobile.width};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobile.top};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobile.left};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobile.bottom};
    right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobile.right};
    img {
      object-fit: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledImage.mobile.img.objectFit};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.width};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.top};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.bottom};
    right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.right};
    img {
      object-fit: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledImage.mobileLarge.img.objectFit};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.tablet.width};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.tablet.top};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.tablet.left};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.tablet.bottom};
    right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.tablet.right};
    img {
      object-fit: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledImage.tablet.img.objectFit};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.desktop.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.desktop.width};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.desktop.top};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.desktop.left};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.desktop.bottom};
    right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.desktop.right};
    img {
      object-fit: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledImage.desktop.img.objectFit};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.widescreen.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.widescreen.width};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.widescreen.top};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.widescreen.left};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.widescreen.bottom};
    right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledImage.widescreen.right};
    img {
      object-fit: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledImage.widescreen.img.objectFit};
    }
  }
`;
export default StyledImage;
