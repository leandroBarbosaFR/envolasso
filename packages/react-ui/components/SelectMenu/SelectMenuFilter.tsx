import React, { useState } from 'react';
// Hooks
// Components
import AgencyIcons from '../AgencyIcons';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledContent from './components/StyledContent';
import StyledContentWrap from './components/StyledContentWrap';
import StyledItem from './components/StyledItem';
import StyledPortal from './components/StyledPortal';
import StyledSelectIcon from './components/StyledSelectIcon';
import StyledSelectMenu from './components/StyledSelectMenu';
import StyledSelectValue from './components/StyledSelectValue';
import StyledSelectViewport from './components/StyledSelectViewport';
import StyledText from './components/StyledText';
import StyledTrigger from './components/StyledTrigger';
import StyledTriggerWrap from './components/StyledTriggerWrap';

export interface SelectMenuFilterProps {
  variant: string;
  sortOrder: string;
  setSortOrder: (val: string) => void;
}

const SelectMenuFilter = ({ variant, sortOrder, setSortOrder }: SelectMenuFilterProps) => {
  const [isOpen, setIsOpen] = useState('closed');
  const theme = useTheme();
  const handleChange = (val: any) => {
    if (val) setSortOrder(val);
  };

  return (
    <StyledSelectMenu
      variant={variant}
      defaultValue={'latest'}
      value={sortOrder || 'latest'}
      onValueChange={handleChange}
      onOpenChange={(e) => setIsOpen(e === true ? 'open' : 'closed')}
    >
      <StyledTrigger data-state={isOpen} variant={variant}>
        <StyledTriggerWrap variant={variant}>
          <StyledSelectValue variant={variant} />
          <StyledSelectIcon variant={variant}>
            <AgencyIcons
              layoutVariant={theme.SelectMenu[variant!].AgencyIcons.layoutVariant}
              name={'reveal'}
            />
          </StyledSelectIcon>
        </StyledTriggerWrap>
      </StyledTrigger>
      <StyledPortal variant={variant}>
        <StyledContent asChild variant={variant}>
          <StyledContentWrap variant={variant}>
            <StyledSelectViewport variant={variant}>
              <StyledItem variant={variant} value={'latest'} isActive={sortOrder === 'latest'}>
                <StyledText>Latest</StyledText>
              </StyledItem>
              <StyledItem variant={variant} value={'oldest'} isActive={sortOrder === 'oldest'}>
                <StyledText>Oldest</StyledText>
              </StyledItem>
              <StyledItem variant={variant} value={'ascending'} isActive={sortOrder === 'ascending'}>
                <StyledText variant={variant}>A-Z</StyledText>
              </StyledItem>
              <StyledItem variant={variant} value={'descending'} isActive={sortOrder === 'descending'}>
                <StyledText variant={variant}>Z-A</StyledText>
              </StyledItem>
            </StyledSelectViewport>
          </StyledContentWrap>
        </StyledContent>
      </StyledPortal>
    </StyledSelectMenu>
  );
};

export default SelectMenuFilter;
