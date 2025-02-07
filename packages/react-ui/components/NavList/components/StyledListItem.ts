import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledListItem = styled.li<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.margin};
    border: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.borderTop};
    border-right: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.borderRight};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.borderLeft};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobile.borderRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.margin};
    border: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.borderTop};
    border-right: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.borderRight};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.borderLeft};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.margin};
    border: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.borderTop};
    border-right: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.borderRight};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.borderLeft};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.margin};
    border: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.borderTop};
    border-right: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.borderRight};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.borderLeft};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.margin};
    border: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.borderTop};
    border-right: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.borderRight};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.borderLeft};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledListItem.widescreen.borderRadius};
  }
`;
export default StyledListItem;
