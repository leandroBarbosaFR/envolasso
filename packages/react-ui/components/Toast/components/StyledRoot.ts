import styled, { keyframes } from 'styled-components';
import { Root } from '@radix-ui/react-toast';
import { WithFilteredProps } from '../../../utils';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0, transform: `translateY(-${VIEWPORT_PADDING}px)` }
});

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))`
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const swipeOut = keyframes({
  from: {
    transform: `translateY(var(--radix-toast-swipe-end-y))`
  },
  to: {
    transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))`
  }
});

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Root);

const StyledRoot = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.Toast[variant!].StyledRoot.position};
  margin: ${({ variant, theme }) => theme.Toast[variant!].StyledRoot.margin};
  width: ${({ variant, theme }) => theme.Toast[variant!].StyledRoot.width};
  height: ${({ variant, theme }) => theme.Toast[variant!].StyledRoot.height};

  &[data-state='open'] {
    animation: ${slideIn} 200ms ease-in-out;
  }
  &[data-state='closed'] {
    animation: ${hide} 200ms ease-in forwards;
  }
  &[data-swipe='move'] {
    transform: translateY(var(--radix-toast-swipe-move-y));
  }
  &[data-swipe='cancel'] {
    transform: translateY(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: ${swipeOut} 200ms ease-out forwards;
  }
`;

export default StyledRoot;
