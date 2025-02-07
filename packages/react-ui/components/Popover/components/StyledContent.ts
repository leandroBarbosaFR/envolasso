import { Content } from '@radix-ui/react-popover';
import styled, { keyframes } from 'styled-components';

const contentShow = keyframes`
  from { opacity:0; transform: translateY(2px) }
  to{ opacity:1; transform: translateY(0)  }
`;

import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const StyledContent = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.zIndex};
  border-radius: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.borderRadius};
  background: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.background};
  box-shadow: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.boxShadow};
  transform: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.transform};
  animation-duration: ${({ layoutVariant, theme }) =>
    theme.Popover[layoutVariant!].StyledContent.animationDuration};
  animation-timing-function: ${({ layoutVariant, theme }) =>
    theme.Popover[layoutVariant!].StyledContent.animationTimingFunction};
  will-change: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.willChange};
  &[data-state='open'] {
    &[data-side='bottom'] {
      animation-name: ${contentShow};
    }
  }
  opacity: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.opacity};
  position: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.position};
  right: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.right};

  ::after {
    content: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.after.content};
    position: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.after.position};
    top: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.after.top};
    left: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.after.left};
    border-width: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledContent.after.borderWidth};
    border-style: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledContent.after.borderStyle};
    border-color: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledContent.after.borderColor};
    opacity: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.after.opacity};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.mobile.padding};
    margin: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.tablet.padding};
    margin: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.desktop.padding};
    margin: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.widescreen.padding};
    margin: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledContent.widescreen.margin};
  }
`;

export default StyledContent;
