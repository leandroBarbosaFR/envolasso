import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
// Components

// Styles
import StyledToolTipContent from './components/StyledToolTipContent';
import StyledToolTipArrow from './components/StyledToolTipArrow';

export interface ToolTipProps {
  children: React.ReactNode | React.ReactNode[];
  layoutVariant: string;
  toolTipText: string;
}

const ToolTip = ({ children, layoutVariant, toolTipText }: ToolTipProps) => {
  layoutVariant = 'default';

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        {toolTipText && (
          <Tooltip.Portal>
            <StyledToolTipContent layoutVariant={layoutVariant} sideOffset={3}>
              {toolTipText}
              <StyledToolTipArrow layoutVariant={layoutVariant} />
            </StyledToolTipContent>
          </Tooltip.Portal>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ToolTip;
