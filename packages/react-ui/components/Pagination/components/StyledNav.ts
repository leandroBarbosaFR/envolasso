import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.mobile.padding};
    margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.tablet.padding};
    margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.desktop.padding};
    margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.widescreen.padding};
    margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledNav.widescreen.margin};
  }
`;

export default StyledNav;
