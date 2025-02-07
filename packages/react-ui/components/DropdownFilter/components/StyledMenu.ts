import { Content } from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';
import { WithFilteredProps } from '../../../utils';

const contentShow = keyframes`
  from { opacity:0; transform: translateY(2px) }
  to{ opacity:1; transform: translateY(0)  }
`;

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const StyledMenu = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  max-height: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.maxHeight};
  overflow-y: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.overflowY};
  display: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.display};
  z-index: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.zIndex};
  border: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.DropdownFilter[layoutVariant!].StyledMenu.borderRadius};
  background: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.background};
  box-shadow: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.boxShadow};
  animation-duration: ${({ layoutVariant, theme }) =>
    theme.DropdownFilter[layoutVariant!].StyledMenu.animationDuration};
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &[data-state='open'] {
    &[data-side='bottom'] {
      animation-name: ${contentShow};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.mobile.width};
    padding: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    width: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.mobileLarge.width};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    width: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.tablet.width};
    padding: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    width: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.desktop.width};
    padding: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    width: ${({ layoutVariant, theme }) => theme.DropdownFilter[layoutVariant!].StyledMenu.widescreen.width};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownFilter[layoutVariant!].StyledMenu.widescreen.padding};
  }
`;

export default StyledMenu;
