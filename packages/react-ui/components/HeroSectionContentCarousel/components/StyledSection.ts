import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.display};
  align-items: ${({ layoutVariant, theme }) =>
    theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.alignItems};
  position: ${({ layoutVariant, theme }) =>
    theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.position};
  overflow: ${({ layoutVariant, theme }) =>
    theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.overflow};
  background: ${({ layoutVariant, theme }) =>
    theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.background};
  position: ${({ layoutVariant, theme }) =>
    theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.position};
  &::before {
    z-index: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.zIndex};
    content: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.content};
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.height};
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.width};
    position: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.top};
    left: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.left};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.Before.background};
  }
  &::after {
    z-index: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.zIndex};
    content: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.content};
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.height};
    width: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.width};
    position: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.position};
    top: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.After.background};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobile.After.width};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.mobileLarge.After.width};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.tablet.After.width};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.desktop.After.width};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.Before.width};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HeroSectionContentCarousel[layoutVariant!].StyledSection.widescreen.After.width};
    }
  }
`;

export default StyledSection;
