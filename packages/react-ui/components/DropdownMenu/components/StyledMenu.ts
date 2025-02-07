import { Content } from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';
import { WithFilteredProps } from '../../../utils';

const contentShow = keyframes`
  from { opacity:0; transform: translate(2px) }
  to{ opacity:1; transform: translateY(0)  }
`;

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const StyledMenu = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  max-height: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.maxHeight};
  overflow-y: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.overflowY};
  z-index: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.zIndex};
  border-radius: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.borderRadius};
  border: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.border};
  background: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.background};
  box-shadow: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.boxShadow};
  animation-duration: ${({ layoutVariant, theme }) =>
    theme.DropdownMenu[layoutVariant!].StyledMenu.animationDuration};
  animation-timing-function: ${({ layoutVariant, theme }) =>
    theme.DropdownMenu[layoutVariant!].StyledMenu.animationTimingFunction};
  will-change: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.willChange};
  &[data-state='open'] {
    &[data-side='bottom'] {
      animation-name: ${contentShow};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.mobile.width};
    padding: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    width: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.mobileLarge.width};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenu[layoutVariant!].StyledMenu.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    width: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.tablet.width};
    padding: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    width: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.desktop.width};
    padding: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    width: ${({ layoutVariant, theme }) => theme.DropdownMenu[layoutVariant!].StyledMenu.widescreen.width};
    padding: ${({ layoutVariant, theme }) =>
      theme.DropdownMenu[layoutVariant!].StyledMenu.widescreen.padding};
  }
`;

export default StyledMenu;
