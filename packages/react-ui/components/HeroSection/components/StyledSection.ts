import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.display};
  align-items: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.alignItems};
  position: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.position};
  overflow: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.overflow};
  background: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.background};
  &::before {
    z-index: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.zIndex};
    content: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.content};
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.width};
    position: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.Before.position};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.top};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.bottom};
    left: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.Before.left};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.Before.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.Before.background};
  }
  &::after {
    z-index: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.zIndex};
    content: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.content};
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.height};
    width: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.width};
    position: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.position};
    top: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.top};
    bottom: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.bottom};
    right: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.After.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.After.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.After.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.mobile.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.mobile.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.mobile.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobile.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobile.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobile.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobile.After.width};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.minHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.mobileLarge.After.width};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.tablet.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.tablet.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.tablet.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.tablet.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.tablet.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.tablet.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.tablet.After.width};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.desktop.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.desktop.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.HeroSection[layoutVariant!].StyledSection.desktop.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.desktop.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.desktop.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.desktop.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.desktop.After.width};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.widescreen.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.widescreen.minHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSection.widescreen.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.widescreen.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.widescreen.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.widescreen.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSection[layoutVariant!].StyledSection.widescreen.After.width};
    }
  }
`;

export default StyledSection;
