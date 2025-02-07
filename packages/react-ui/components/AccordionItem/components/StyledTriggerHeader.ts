import { Header } from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Header);

const StyledTriggerHeader = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.color};
  font-family: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.fontFamily};
  font-weight: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.fontWeight};
  display: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.display};
  align-items: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.alignItems};
  justify-content: ${({ variant, theme }) =>
    theme.AccordionItem[variant!].StyledTriggerHeader.justifyContent};
  &[data-state='open'] {
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.textAlign};
    font-size: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobile.letterSpacing};
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobile.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobile.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobile.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobile.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobile.borderRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    text-align: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.textAlign};
    font-size: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.letterSpacing};
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.border};
    border-top: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.textAlign};
    font-size: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.tablet.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.tablet.letterSpacing};
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.border};
    border-top: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.tablet.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.tablet.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.tablet.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.tablet.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.textAlign};
    font-size: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.desktop.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.letterSpacing};
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.desktop.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.desktop.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.desktop.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.desktop.border};
    border-top: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    text-align: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.textAlign};
    font-size: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.letterSpacing};
    height: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.height};
    margin: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.margin};
    padding: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.padding};
    border: ${({ variant, theme }) => theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.border};
    border-top: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.borderTop};
    border-right: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.borderBottom};
    border-left: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) =>
      theme.AccordionItem[variant!].StyledTriggerHeader.widescreen.borderRadius};
  }
`;

export default StyledTriggerHeader;
