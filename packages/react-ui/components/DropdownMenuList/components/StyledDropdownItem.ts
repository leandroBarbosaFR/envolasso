import { Item } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Item);

const StyledDropdownItem = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ layoutVariant, theme }) => theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.cursor};
  background: ${({ layoutVariant, theme }) =>
    theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.background};
  &[data-highlighted] {
    color: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.dataHighlighted.color};
    background-color: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.dataHighlighted.backgroundColor};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobile.borderRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobile.padding};
    &[data-highlighted] {
      margin: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobile.dataHighlighted.margin};
      padding: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobile.dataHighlighted.padding};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.borderRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.padding};
    &[data-highlighted] {
      margin: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobileLarge.dataHighlighted.margin};
      padding: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.mobileLarge.dataHighlighted.padding};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.borderRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.padding};
    &[data-highlighted] {
      margin: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.dataHighlighted.margin};
      padding: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.tablet.dataHighlighted.padding};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.desktop.borderRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.desktop.padding};
    &[data-highlighted] {
      margin: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.desktop.dataHighlighted.margin};
      padding: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.desktop.dataHighlighted.padding};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    border-radius: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.widescreen.borderRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.widescreen.padding};
    &[data-highlighted] {
      margin: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.widescreen.dataHighlighted.margin};
      padding: ${({ layoutVariant, theme }) =>
        theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.widescreen.dataHighlighted.padding};
    }
  }
`;

export default StyledDropdownItem;
