import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSearchBarWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HeroSection[layoutVariant!].StyledSearchBarWrap.widescreen.padding};
  }
`;
export default StyledSearchBarWrap;
