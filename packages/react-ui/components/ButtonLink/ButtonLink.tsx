import React, { ForwardedRef } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
// Components
import AgencyIcons from '../AgencyIcons';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledButton from './components/StyledButton';
import StyledToolTipContent from './components/StyledToolTipContent';
import StyledToolTipArrow from './components/StyledToolTipArrow';

// Types
export type ButtonVariant = string;

// Props
export interface ButtonProps {
  children?: React.ReactNode | React.ReactNode[];
  href?: string;
  target?: string;
  title?: string;
  variant: ButtonVariant;
  iconPosition?: string;
  withText?: boolean;
  withIcon?: boolean;
  iconName?: string;
  toolTipText?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonLink = (
  {
    children,
    href,
    target,
    title,
    variant,
    withIcon = false,
    withText = true,
    iconPosition,
    iconName,
    toolTipText,
    isActive,
    onClick
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const theme = useTheme();
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <StyledButton
            href={href}
            title={title}
            variant={variant}
            iconPosition={iconPosition}
            isActive={isActive}
            target={target}
            onClick={onClick}
          >
            {withIcon && iconName && (
              <AgencyIcons layoutVariant={theme.buttonIcon1367.layoutVariant} name={iconName} />
            )}
            {withText && children}
          </StyledButton>
        </Tooltip.Trigger>
        {toolTipText && (
          <Tooltip.Portal>
            <StyledToolTipContent variant={variant} sideOffset={3}>
              {toolTipText}
              <StyledToolTipArrow variant={variant} />
            </StyledToolTipContent>
          </Tooltip.Portal>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ButtonLink;
