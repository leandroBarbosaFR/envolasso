import React from 'react';
import type { AccordionSectionTheme } from '@agency-platform/themes';
// Styles
import StyledAccordion from './components/StyledAccordion';

// Props
export interface AccordionProps {
  layoutVariant: keyof AccordionSectionTheme;
  children: React.ReactNode | React.ReactNode[];
}

const Accordion = ({ layoutVariant, children }: AccordionProps) => {
  return (
    <StyledAccordion layoutVariant={layoutVariant} type="single" defaultValue="-1" collapsible>
      {children}
    </StyledAccordion>
  );
};

export default Accordion;
