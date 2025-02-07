import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  height: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.height};
  display: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.display};
  flex-direction: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.flexDirection};
  justify-content: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.justifyContent};
  align-items: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.alignItems};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.mobile.gridColumn};
    padding: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.mobile.padding};
    gap: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.mobileLarge.gridColumn};
    padding: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.mobileLarge.padding};
    gap: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.tablet.gridColumn};
    padding: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.tablet.padding};
    gap: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.desktop.gridColumn};
    padding: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.desktop.padding};
    gap: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.widescreen.gridColumn};
    padding: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.widescreen.padding};
    gap: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.widescreen.gap};
  }
`;
export default StyledNav;
