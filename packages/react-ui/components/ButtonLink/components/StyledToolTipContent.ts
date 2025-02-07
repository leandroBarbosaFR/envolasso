import { Content } from '@radix-ui/react-tooltip';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const StyledToolTipContent = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.zIndex};
  border-radius: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.borderRadius};
  padding: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.padding};
  font-size: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.fontSize};
  color: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.color};
  background-color: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.backgroundColor};
  box-shadow: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.boxShadow};
  user-select: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.userSelect};
  animation-duration: ${({ variant, theme }) =>
    theme.button[variant!].StyledToolTipContent.animationDuration};
  animation-timing-function: ${({ variant, theme }) =>
    theme.button[variant!].StyledToolTipContent.animationTimingFunction};
  will-change: ${({ variant, theme }) => theme.button[variant!].StyledToolTipContent.willChange};

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
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
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledToolTipContent;
