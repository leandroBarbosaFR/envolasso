import { NavListTheme } from '@agency-platform/themes';
import { NavigationList } from '@agency-platform/shared-types';
import React, { useState } from 'react';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../Button';
import ButtonLink from '../ButtonLink';
// Styles
import StyledHeading from './components/StyledHeading';
import StyledList from './components/StyledList';
import StyledListItem from './components/StyledListItem';
import StyledListNested from './components/StyledListNested';
import StyledNav from './components/StyledNav';

interface NavListProps {
  layoutVariant: keyof NavListTheme;
  navListTitle?: string;
  siteNavigation?: NavigationList[];
  handleClick?: () => void;
}

const NavList = ({ layoutVariant, navListTitle, siteNavigation, handleClick }: NavListProps) => {
  const theme = useTheme();
  const [subMenuId, setSubmenuId] = useState('');

  const handleSubmenu = (key: string) => {
    if (key === subMenuId) return setSubmenuId('');
    setSubmenuId(key);
  };

  // Render sub Nav
  const renderNavigationList = (navItemsSub: NavigationList[]) => {
    return renderNav(navItemsSub);
  };

  // Render main Nav
  const renderNav = (navItems: NavigationList[]) =>
    navItems &&
    navItems.map((item, index) => {
      const { _key, _type, url, title, content, navigationDropdownList } = item;
      const isSubmenuActive = _key === subMenuId;

      switch (_type) {
        case 'common.internalLink':
          return (
            title && (
              <StyledListItem
                key={index}
                layoutVariant={layoutVariant}
                onClick={() => {
                  handleClick && handleClick();
                  handleSubmenu('');
                }}
              >
                <ButtonLink
                  key={index}
                  href={`/${content?.dynamicRoute ? content?.dynamicRoute : ''}${content?.slug?.current}`}
                  title={title}
                  variant={theme.NavList[layoutVariant!].internalLinkButton.variant}
                  withText={theme.NavList[layoutVariant!].internalLinkButton.withText}
                  withIcon={theme.NavList[layoutVariant!].internalLinkButton.withIcon}
                  iconPosition={theme.NavList[layoutVariant!].internalLinkButton.iconPosition}
                  iconName={theme.NavList[layoutVariant!].internalLinkButton.iconName}
                >
                  {title}
                </ButtonLink>
              </StyledListItem>
            )
          );
        case 'common.externalLink':
          return (
            title && (
              <StyledListItem key={index} layoutVariant={layoutVariant}>
                <ButtonLink
                  key={index}
                  href={`${url}`}
                  title={title}
                  variant={theme.NavList[layoutVariant!].externalLink.variant}
                  withText={theme.NavList[layoutVariant!].externalLink.withText}
                  withIcon={theme.NavList[layoutVariant!].externalLink.withIcon}
                  iconPosition={theme.NavList[layoutVariant!].externalLink.iconPosition}
                  iconName={theme.NavList[layoutVariant!].externalLink.iconName}
                >
                  {title}
                </ButtonLink>
              </StyledListItem>
            )
          );
        case 'common.navigationDropdown':
          return (
            title && (
              <StyledListItem key={index} layoutVariant={layoutVariant}>
                <Button
                  onClick={() => handleSubmenu(_key || '')}
                  title={title}
                  variant={theme.NavList[layoutVariant!].navigationDropdown.variant}
                  withIcon={theme.NavList[layoutVariant!].navigationDropdown.withIcon}
                  withText={theme.NavList[layoutVariant!].navigationDropdown.withText}
                  iconName={
                    isSubmenuActive
                      ? theme.NavList[layoutVariant!].navigationDropdown.iconName
                      : theme.NavList[layoutVariant!].navigationDropdown.iconNameActive
                  }
                  isActive={isSubmenuActive}
                  iconPosition={theme.NavList[layoutVariant!].navigationDropdown.iconPosition}
                >
                  {title}
                </Button>
                <StyledListNested isSubmenuActive={isSubmenuActive} layoutVariant={layoutVariant}>
                  {isSubmenuActive && navigationDropdownList && renderNavigationList(navigationDropdownList)}
                </StyledListNested>
              </StyledListItem>
            )
          );
      }
    });

  return (
    <StyledNav layoutVariant={layoutVariant}>
      {navListTitle && (
        <StyledHeading
          layoutVariant={layoutVariant}
          variant={theme.NavList[layoutVariant!].StyledHeading.variant}
          as={'h3'}
        >
          {navListTitle}
        </StyledHeading>
      )}
      <StyledList layoutVariant={layoutVariant}>{siteNavigation && renderNav(siteNavigation)}</StyledList>
    </StyledNav>
  );
};

export default NavList;
