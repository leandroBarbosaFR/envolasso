import React from 'react';
import { PopoverTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledPopover from './components/StyledPopover';
import StyledTrigger from './components/StyledTrigger';
import StyledTriggerWrap from './components/StyledTriggerWrap';
import StyledPortal from './components/StyledPortal';
import StyledContent from './components/StyledContent';

// Props
export interface PopoverProps {
  layoutVariant: keyof PopoverTheme;
  children: React.ReactNode | React.ReactNode[];
  triggerButton?: React.ReactNode | React.ReactNode[];
  sideOffset?: string;
}

const Popover = ({ children, layoutVariant, triggerButton }: PopoverProps) => {
  const theme = useTheme();
  return (
    <StyledPopover>
      {/* Trigger */}
      <StyledTrigger asChild layoutVariant={layoutVariant}>
        <StyledTriggerWrap layoutVariant={layoutVariant}>{triggerButton}</StyledTriggerWrap>
      </StyledTrigger>
      {/* Content */}
      <StyledPortal>
        <StyledContent
          layoutVariant={layoutVariant}
          sideOffset={theme.Popover[layoutVariant!].StyledContent.sideOffset}
          side="bottom"
          align="start"
        >
          {children}
        </StyledContent>
      </StyledPortal>
    </StyledPopover>
  );
};

export default Popover;
