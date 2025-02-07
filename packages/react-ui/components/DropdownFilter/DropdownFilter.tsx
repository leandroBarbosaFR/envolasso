import React, { useState } from 'react';
import { DropdownFilterTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../Button';
import DropdownFilterList from '../DropdownFilterList';
// Styles
import StyledArrow from './components/StyledArrow';
import StyledDropdownFilter from './components/StyledDropdownFilter';
import StyledMenu from './components/StyledMenu';
import StyledPortal from './components/StyledPortal';
import StyledTrigger from './components/StyledTrigger';
import StyledTriggerWrap from './components/StyledTriggerWrap';

export interface DropdownFilterPros {
  layoutVariant: keyof DropdownFilterTheme;
  filterMenu: any;
}

const DropdownFilter = ({ layoutVariant, filterMenu }: DropdownFilterPros) => {
  if (!filterMenu) return null;
  const theme = useTheme();
  const [genreTrigger, setGenreTrigger] = useState('');
  const [categoryTrigger, setCategoryTrigger] = useState('');

  const triggerButton = (defaultTriggerValue: string, dropdownMenuName: string) => {
    switch (dropdownMenuName) {
      case 'genres':
        return (
          <Button
            variant={theme.DropdownFilter[layoutVariant!].StyledTriggerWrap.Button.variant}
            withIcon={theme.DropdownFilter[layoutVariant!].StyledTriggerWrap.Button.withIcon}
            withText={theme.DropdownFilter[layoutVariant!].StyledTriggerWrap.Button.withText}
          >
            {genreTrigger ? genreTrigger : defaultTriggerValue}
          </Button>
        );
      case 'categories':
        return (
          <Button
            variant={theme.DropdownFilter[layoutVariant!].StyledTriggerWrap.Button.variant}
            withIcon={theme.DropdownFilter[layoutVariant!].StyledTriggerWrap.Button.withIcon}
            withText={theme.DropdownFilter[layoutVariant!].StyledTriggerWrap.Button.withText}
          >
            {categoryTrigger ? categoryTrigger : defaultTriggerValue}
          </Button>
        );
      default:
        return null;
    }
  };

  const handleTriggerValue = (filterName: string, dropdownMenuName: string) => {
    switch (dropdownMenuName) {
      case 'genres':
        return setGenreTrigger(filterName);
      case 'categories':
        return setCategoryTrigger(filterName);
      default:
        return null;
    }
  };

  return (
    filterMenu &&
    filterMenu.map((item: { defaultTriggerValue: any; dropdownMenuName: any }, index: number) => {
      const { defaultTriggerValue, dropdownMenuName } = item;
      return (
        <StyledDropdownFilter key={index}>
          {/* Trigger to open content */}
          <StyledTrigger asChild>
            <StyledTriggerWrap>{triggerButton(defaultTriggerValue, dropdownMenuName)}</StyledTriggerWrap>
          </StyledTrigger>
          {/* Content */}
          <StyledPortal>
            <StyledMenu layoutVariant={layoutVariant}>
              <StyledArrow layoutVariant={layoutVariant} />
              <DropdownFilterList
                layoutVariant={'default'}
                data={item}
                handleTriggerValue={handleTriggerValue}
              />
            </StyledMenu>
          </StyledPortal>
        </StyledDropdownFilter>
      );
    })
  );
};

export default DropdownFilter;
