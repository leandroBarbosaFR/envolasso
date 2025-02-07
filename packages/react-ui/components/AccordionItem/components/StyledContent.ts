import { Content } from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const contentShow = keyframes`
  from { opacity:0; transform: translateY(5px) }
  to{ opacity:1; transform: translateY(0)  }
`;

const StyledContent = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  /* border-radius: 6px; */
  /* background: green; */
  animation-duration: ${({ variant, theme }) =>
    theme.AccordionItem[variant!].StyledContent.animationDuration};
  animation-timing-function: ${({ variant, theme }) =>
    theme.AccordionItem[variant!].StyledContent.animationTimingFunction};
  will-change: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.willChange};
  &[data-state='open'] {
    animation: ${contentShow} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobile.borderRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobileLarge.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.widescreen.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.widescreen.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.widescreen.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.widescreen.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledContent.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledContent.widescreen.borderRadius};
  }
`;

export default StyledContent;
