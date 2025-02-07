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
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.mobile.gridColumn};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.mobileLarge.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.tablet.gridColumn};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.desktop.gridColumn};
    /* grid-column: 3/11; */
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.widescreen.gridColumn};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.widescreen.padding};
  }
`;
export default StyledSearchBarWrap;
