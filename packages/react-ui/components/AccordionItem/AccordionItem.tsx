import { AccordionItemProps } from '@agency-platform/shared-types';
import { Trigger } from '@radix-ui/react-accordion';
import React from 'react';

// Styles
import StyledAccordionItem from './components/StyledAccordionItem';
import StyledContent from './components/StyledContent';
import StyledTriggerHeader from './components/StyledTriggerHeader';

// Props

const AccordionItem = ({ variant, triggerButton, children, value }: AccordionItemProps) => {
  return (
    <StyledAccordionItem value={value} variant={variant}>
      <StyledTriggerHeader variant={variant}>
        <Trigger asChild>{triggerButton}</Trigger>
      </StyledTriggerHeader>
      <StyledContent variant={variant}>{children}</StyledContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
