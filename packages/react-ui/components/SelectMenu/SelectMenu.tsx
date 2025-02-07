import { useRouter } from 'next/router';
import React, { useState } from 'react';
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

export interface SelectMenuProps {
  variant: string;
  pageName?: string;
  sortOptions: { id: string; label: string; orderBy: string; sort: string }[];
}

const SelectMenu = ({ variant, pageName, sortOptions }: SelectMenuProps) => {
  if (!sortOptions) return null;
  const theme = useTheme();
  const router = useRouter();
  const [currentValue, setCurrentValue] = useState('');
  const [toggled, setToggled] = useState('closed');
  const pageSortQuery = router?.query && router?.query?.category ? router.query.category[2] : '';

  const handleChange = (val: any) => {
    if (!val) return;
    setCurrentValue(val);
    if (router?.query && router?.query?.category) {
      router.push(`/${pageName}/page/${router?.query?.category[0]}/1/${val}`, undefined, { shallow: false });
      const handleRouteChange = () => {
        document.getElementById('feedSection')?.scrollIntoView();
      };
      router?.events.on('routeChangeComplete', handleRouteChange);
    }
  };

  const renderMenu = () =>
    sortOptions &&
    sortOptions.map((item) => {
      const { id, label } = item;
      const isActive = label === currentValue || label === pageSortQuery;

      return (
        label && (
          <StyledItem key={id} value={label} variant={variant} isActive={isActive}>
            <StyledText variant={variant}>{label}</StyledText>
          </StyledItem>
        )
      );
    });

  return (
    <StyledSelectMenu
      variant={variant}
      defaultValue={pageSortQuery || sortOptions[0].label}
      onValueChange={handleChange}
      onOpenChange={(e) => setToggled(e === true ? 'open' : 'closed')}
    >
      <StyledTrigger data-state={toggled} variant={variant}>
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
        <StyledContent variant={variant}>
          <StyledContentWrap variant={variant}>
            <StyledSelectViewport variant={variant}>{renderMenu()}</StyledSelectViewport>
          </StyledContentWrap>
        </StyledContent>
      </StyledPortal>
    </StyledSelectMenu>
  );
};

export default SelectMenu;
