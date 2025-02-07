import React, { ForwardedRef, forwardRef, RefObject } from 'react';
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
export type ButtonType = 'submit' | 'reset' | 'button';

// Props
export interface ButtonProps {
  children?: React.ReactNode | React.ReactNode[];
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  href?: string;
  title?: string;
  variant?: ButtonVariant;
  buttonType?: string;
  type?: ButtonType;
  elementRef?: RefObject<HTMLInputElement>;
  iconPosition?: string;
  disabled?: boolean;
  withText?: boolean;
  withIcon?: boolean;
  iconName?: string;
  toolTipText?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef(
  (
    {
      children,
      as = 'button',
      href,
      title,
      variant,
      buttonType = 'button',
      type = 'button',
      elementRef,
      disabled,
      withIcon = false,
      withText = true,
      iconPosition,
      iconName,
      toolTipText,
      isActive,
      onClick,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const theme = useTheme();
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <StyledButton
              as={as}
              href={href}
              title={title}
              variant={variant}
              buttonType={buttonType}
              type={type}
              ref={elementRef}
              iconPosition={iconPosition}
              isActive={isActive}
              disabled={disabled}
              onClick={onClick}
              {...props}
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
  }
);

export default Button;
