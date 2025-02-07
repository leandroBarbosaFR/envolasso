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
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding-right: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].StyledSearchBarWrap.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;
export default StyledSearchBarWrap;
