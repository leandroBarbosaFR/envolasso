import { Arrow } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Arrow);

const StyledArrow = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  fill: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.fill};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.mobile.height};
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.mobile.width};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.mobileLarge.width};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.tablet.height};
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.tablet.width};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.desktop.width};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.StyledArrow.widescreen.width};
  }
`;

export default StyledArrow;
