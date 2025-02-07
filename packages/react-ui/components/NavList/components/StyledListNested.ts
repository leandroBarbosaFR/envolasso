import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledListNested = styled.ul<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  opacity: ${({ isSubmenuActive }) => (isSubmenuActive ? '1' : '0')};
  transition: ${({ layoutVariant, theme }) =>
    theme.NavList[layoutVariant!].StyledNav.StyledListNested.transition};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobile.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobile.margin};
    li:first-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobile.liFirstChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobile.liFirstChild.margin};
    }
    li:last-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobile.liLastChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobile.liLastChild.margin};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobileLarge.margin};
    li:first-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobileLarge.liFirstChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobileLarge.liFirstChild.margin};
    }
    li:last-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobileLarge.liLastChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.mobileLarge.liLastChild.margin};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.tablet.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.tablet.margin};
    li:first-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.tablet.liFirstChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.tablet.liFirstChild.margin};
    }
    li:last-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.tablet.liLastChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.tablet.liLastChild.margin};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.desktop.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.desktop.margin};
    li:first-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.desktop.liFirstChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.desktop.liFirstChild.margin};
    }
    li:last-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.desktop.liLastChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.desktop.liLastChild.margin};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.widescreen.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListNested.widescreen.margin};
    li:first-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.widescreen.liFirstChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.widescreen.liFirstChild.margin};
    }
    li:last-child {
      padding: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.widescreen.liLastChild.padding};
      margin: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledListNested.widescreen.liLastChild.margin};
    }
  }
`;

export default StyledListNested;
