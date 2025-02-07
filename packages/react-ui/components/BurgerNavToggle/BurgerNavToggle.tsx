import React from 'react';
// Styles
import StyledButton from './components/StyledButton';
// Types
export type Icon = 'noIcon' | 'withIcon' | 'withIconText';
export type IconPosition = 'left' | 'right';
// Props
export interface BurgerNavToggleProps {
  isOpen: boolean;
  variant: string;
  isCollapsed: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BurgerNavToggle = ({
  isOpen,
  variant = 'default',
  isCollapsed,
  disabled,
  onClick
}: BurgerNavToggleProps) => {
  return (
    <StyledButton
      active={isOpen}
      variant={variant}
      type="button"
      disabled={disabled}
      isCollapsed={isCollapsed}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </StyledButton>
  );
};

export default BurgerNavToggle;
