import React from 'react';
import { useRouter } from 'next/router';
import { BlogCategories, PortfolioCategories } from '@agency-platform/shared-types';
import { DropdownFilterListTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../Button';
import ButtonLink from '../ButtonLink';
// Styles
import StyledDropdownFilterList from './components/StyledDropdownFilterList';
import StyledDropdownItem from './components/StyledDropdownItem';
// Props
export interface DropdownFilterListProps {
  layoutVariant: keyof DropdownFilterListTheme;
  data: any;
  handleTriggerValue: any;
}

const DropdownFilterList = ({
  layoutVariant,
  data,
  handleTriggerValue
}: DropdownFilterListProps): JSX.Element | null => {
  if (!data) return null;
  const theme = useTheme();
  const router = useRouter();
  const { defaultTriggerValue, dropdownMenuName, filter } = data;

  const handleMenuReset = () => {
    const url = router?.route?.split('/')[1];
    router?.push(`/${url}/page/all/1/latest`);
    return handleTriggerValue(defaultTriggerValue, dropdownMenuName);
  };

  const handleClick = (url: string, filterName: string | undefined) => {
    if (!url || !filterName) return;
    switch (dropdownMenuName) {
      case 'genres':
        return handleRouterParams(url, filterName);
      case 'categories':
        return handleRouterParams(url, filterName);
      default:
        return null;
    }
  };

  const handleRouterParams = (url: string, filterName: string) => {
    router.replace(url);
    handleTriggerValue(filterName, dropdownMenuName);
  };

  const renderFilterList = () =>
    filter &&
    filter.map((item: any, index: React.Key) => {
      const { _type, title, slug } = item;
      const isActive = router?.query?.category && router.query.category[0] === slug?.current;

      switch (_type) {
        case 'blog.category':
          return (
            !isActive && (
              <Button
                key={index}
                onClick={() => handleClick(`/blogs/page/${slug?.current}/1/latest`, title)}
                variant={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.variant}
                title={title}
                withIcon={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.withIcon}
                withText={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.withText}
                iconName={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.iconName}
                iconPosition={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.iconPosition}
              >
                <StyledDropdownItem layoutVariant={layoutVariant}>{title}</StyledDropdownItem>
              </Button>
            )
          );
        case 'portfolio.category':
          return (
            !isActive && (
              <Button
                key={index}
                onClick={() => handleClick(`/portfolios/page/${slug?.current}/1/latest`, title)}
                variant={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.variant}
                title={title}
                withIcon={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.withIcon}
                withText={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.withText}
                iconName={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.iconName}
                iconPosition={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.iconPosition}
              >
                <StyledDropdownItem layoutVariant={layoutVariant}>{title}</StyledDropdownItem>
              </Button>
            )
          );

        default:
          return null;
      }
    });

  return (
    <StyledDropdownFilterList layoutVariant={layoutVariant}>
      <StyledDropdownItem layoutVariant={layoutVariant}>
        <Button
          onClick={handleMenuReset}
          variant={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.variant}
          withIcon={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.withIcon}
          withText={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.withText}
          iconName={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.iconName}
          iconPosition={theme.DropdownFilterList[layoutVariant!].StyledDropdownItem.Button.iconPosition}
        >
          {defaultTriggerValue}
        </Button>
      </StyledDropdownItem>
      {renderFilterList()}
    </StyledDropdownFilterList>
  );
};

export default DropdownFilterList;
