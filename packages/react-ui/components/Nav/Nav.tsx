import React from 'react';
import { useRouter } from 'next/router';
import { BlogCategories, NavigationList, PortfolioCategories } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
import { NavTheme } from '@agency-platform/themes';
// Components
import Button from '../Button';
import ButtonLink from '../ButtonLink';
import DropdownMenu from '../DropdownMenu';
import DropdownMenuList from '../DropdownMenuList';
// Styles
import StyledHeading from './components/StyledHeading';
import StyledNav from './components/StyledNav';

export interface NavProps {
  layoutVariant: keyof NavTheme;
  isTitleEnabled?: boolean;
  navListTitle?: string;
  data?: NavigationList[];
}

const Nav = ({ data, layoutVariant, isTitleEnabled, navListTitle }: NavProps) => {
  if (!data) return null;
  const router = useRouter();
  const theme = useTheme();

  const renderNavigationList = (navItemdropdown: BlogCategories[] | PortfolioCategories[]) => {
    return (
      <DropdownMenuList
        layoutVariant={theme.Nav[layoutVariant!].DropdownMenuList.layoutVariant}
        data={navItemdropdown}
      />
    );
  };

  const renderNav = (navItems: NavigationList[]) =>
    navItems &&
    navItems.map((item, index: number) => {
      const { _type, url, title, content, navigationDropdownList } = item;
      const isActive = content?.dynamicRoute
        ? router.asPath.includes(`${content?.dynamicRoute}${content?.slug?.current}`)
        : router.asPath?.split('/')[1].includes(content?.slug?.current?.split('/')[0] || '');

      const isActiveDropdown =
        item._type === 'common.navigationDropdown' &&
        navigationDropdownList &&
        navigationDropdownList.some((item) =>
          item?.content?.dynamicRoute
            ? router.asPath.includes(`${item?.content.dynamicRoute}${item?.content.slug?.current}`)
            : item?.content &&
              router.asPath?.split('/')[1].includes(item.content?.slug?.current?.split('/')[0] || '')
        );

      switch (_type) {
        case 'common.internalLink':
          return (
            title && (
              <ButtonLink
                key={index}
                href={`/${content?.dynamicRoute ? content?.dynamicRoute : ''}${content?.slug?.current}`}
                title={title}
                variant={theme.Nav[layoutVariant!].internalLinkButton.variant}
                withText={theme.Nav[layoutVariant!].internalLinkButton.withText}
                withIcon={theme.Nav[layoutVariant!].internalLinkButton.withIcon}
                iconPosition={theme.Nav[layoutVariant!].internalLinkButton.iconPosition}
                iconName={theme.Nav[layoutVariant!].internalLinkButton.iconName}
                isActive={isActive}
              >
                {title}
              </ButtonLink>
            )
          );
        case 'common.externalLink':
          return (
            title && (
              <ButtonLink
                key={index}
                href={`${url}`}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                variant={theme.Nav[layoutVariant!].externalLink.variant}
                withText={theme.Nav[layoutVariant!].externalLink.withText}
                withIcon={theme.Nav[layoutVariant!].externalLink.withIcon}
                iconPosition={theme.Nav[layoutVariant!].externalLink.iconPosition}
                iconName={theme.Nav[layoutVariant!].externalLink.iconName}
              >
                {title}
              </ButtonLink>
            )
          );
        case 'common.navigationDropdown':
          return (
            title && (
              <DropdownMenu
                key={index}
                layoutVariant={theme.Nav[layoutVariant!].DropdownMenuList.layoutVariant}
                triggerButton={
                  <Button
                    title={title}
                    variant={theme.Nav[layoutVariant!].navigationDropdown.variant}
                    withIcon={theme.Nav[layoutVariant!].navigationDropdown.withIcon}
                    withText={theme.Nav[layoutVariant!].navigationDropdown.withText}
                    iconPosition={theme.Nav[layoutVariant!].navigationDropdown.iconPosition}
                    iconName={theme.Nav[layoutVariant!].navigationDropdown.iconName}
                    isActive={isActiveDropdown}
                  >
                    {title}
                  </Button>
                }
              >
                {navigationDropdownList && renderNavigationList(navigationDropdownList)}
              </DropdownMenu>
            )
          );
      }
    });

  return (
    <StyledNav layoutVariant={layoutVariant}>
      {isTitleEnabled && (
        <StyledHeading
          layoutVariant={layoutVariant}
          variant={theme.Nav[layoutVariant!].StyledHeading.variant}
          as={'h3'}
        >
          {navListTitle}
        </StyledHeading>
      )}
      {renderNav(data)}
    </StyledNav>
  );
};

export default Nav;
