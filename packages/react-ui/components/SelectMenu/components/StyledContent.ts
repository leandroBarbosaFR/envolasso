import { Content } from '@radix-ui/react-select';
import styled, { keyframes } from 'styled-components';
import { WithFilteredProps } from '../../../utils';

const contentShow = keyframes`
  from { opacity:0; transform: translateY(2px) }
  to{ opacity:1; transform: translateY(0)  }
`;

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const StyledContent = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.overflow};
  background: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.background};
  box-shadow: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.boxShadow};
  animation-duration: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.animationDuration};
  animation-timing-function: ${({ variant, theme }) =>
    theme.SelectMenu[variant!].StyledContent.animationTimingFunction};
  will-change: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.willChange};
  &[data-state='open'] {
    animation-name: ${contentShow};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.border};
    border-top: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.borderRadius};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.margin};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledContent.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledContent.mobileLarge.borderRadius};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.border};
    border-top: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.borderRadius};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.margin};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.border};
    border-top: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.borderRadius};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.margin};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    border: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.widescreen.border};
    border-top: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.widescreen.borderTop};
    border-right: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledContent.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledContent.widescreen.borderRadius};
    margin: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.widescreen.margin};
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledContent.widescreen.padding};
  }
`;

export default StyledContent;
