import { Item } from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Item);

const StyledAccordioItem = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.background};
  &[data-state='open'] {
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobile.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobile.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobile.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobile.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobile.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobile.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobile.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobile.borderRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.border};
    border-top: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.tablet.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.tablet.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.tablet.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.tablet.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.tablet.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.tablet.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.tablet.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.desktop.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.desktop.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.desktop.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.desktop.border};
    border-top: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.desktop.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.desktop.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.widescreen.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.widescreen.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.widescreen.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledAccordionItem.widescreen.border};
    border-top: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledAccordionItem.widescreen.borderRadius};
  }
`;

export default StyledAccordioItem;
