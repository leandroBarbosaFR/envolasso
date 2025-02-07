import React from 'react';
// Theme
import { DropdownMenuTheme } from '@agency-platform/themes';
// Styles
import StyledArrow from './components/StyledArrow';
import StyledDropdownMenu from './components/StyledDropdownMenu';
import StyledMenu from './components/StyledMenu';
import StyledPortal from './components/StyledPortal';
import StyledTrigger from './components/StyledTrigger';
import StyledTriggerWrap from './components/StyledTriggerWrap';
// Props
export interface DropdownMenuProps {
  layoutVariant: keyof DropdownMenuTheme;
  filterMenu?: any;
  children: React.ReactNode | React.ReactNode[];
  triggerButton: React.ReactNode | React.ReactNode[];
  isDropdownOpen?: boolean;
  setIsDropdownOpen?: any;
}

const DropdownMenu = ({
  layoutVariant,
  children,
  triggerButton,
  isDropdownOpen,
  setIsDropdownOpen
}: DropdownMenuProps) => {
  return (
    <StyledDropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      {/* Trigger to open content */}
      <StyledTrigger asChild>
        <StyledTriggerWrap>{triggerButton}</StyledTriggerWrap>
      </StyledTrigger>
      {/* Content */}
      <StyledPortal layoutVariant={layoutVariant}>
        <StyledMenu layoutVariant={layoutVariant}>
          <StyledArrow layoutVariant={layoutVariant} />
          {children}
        </StyledMenu>
      </StyledPortal>
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
