import { SiteHeaderTheme } from '@agency-platform/themes';
import { NavigationList } from '@agency-platform/shared-types';
import React, { useEffect, useState } from 'react';
// Theme
import { useTheme } from 'styled-components';
// Hooks
import useHeaderCollapse from '../../hooks/useHeaderCollapse';
// Components
import BurgerNavToggle from '../BurgerNavToggle';
import Logo from '../Logo';
import Nav from '../Nav';
import NavDraw from '../NavDraw';
import ButtonLink from '../ButtonLink';

// Styles
import StyledHeader from './components/StyledHeader';
import StyledHeaderContainer from './components/StyledHeaderContainer';
import StyleNavWap from './components/StyleNavWap';
import useWindowDimension from '../../hooks/useWindowDimension';
// Props
export interface SiteHeaderProps {
  layoutVariant: keyof SiteHeaderTheme;
  data: {
    _id?: string;
    _rev?: string;
    _type?: string;
    variant?: string;
    navigationSite?: {
      _key?: string;
      _type?: string;
      isTitleEnabled?: boolean;
      titleNav?: string;
      title?: string;
      naviagtionList?: NavigationList[];
    };
  };
  isAltHeaderLayoutVariant: boolean;
}

const SiteHeader = ({ layoutVariant, data, isAltHeaderLayoutVariant }: SiteHeaderProps) => {
  const theme = useTheme();
  const isCollapsed = useHeaderCollapse();
  const { isDesktop, isWidescreen } = useWindowDimension();
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const defaultBurgerNavToggleVariant = isNavDrawerOpen
    ? theme.SiteHeader[layoutVariant].BurgerIconVariant
    : isCollapsed
      ? theme.SiteHeader[layoutVariant].BurgerIconInvertVariant
      : theme.SiteHeader[layoutVariant].BurgerIconVariant;
  const alternateBurgerNavToggleVariant = isNavDrawerOpen
    ? theme.SiteHeader[layoutVariant].BurgerIconVariant
    : theme.SiteHeader[layoutVariant].BurgerIconInvertVariant;

  useEffect(() => {
    if (isNavDrawerOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    if (isDesktop || isWidescreen) {
      setIsNavDrawerOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [isNavDrawerOpen, isDesktop, isWidescreen]);

  const handleClick = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  if (!data) return null;
  const { navigationSite } = data;

  return (
    <>
      <StyledHeader
        layoutVariant={layoutVariant}
        isCollapsed={isNavDrawerOpen ? false : isCollapsed}
        isToggle={isNavDrawerOpen}
      >
        <StyledHeaderContainer
          layoutVariant={layoutVariant}
          isFluid={theme.SiteHeader[layoutVariant].isFluid}
        >
          <Logo
            href={'/'}
            LogoName={
              isCollapsed
                ? theme.SiteHeader[layoutVariant].logo.LogoNameCollapsed
                : theme.SiteHeader[layoutVariant].logo.LogoName
            }
            variant={theme.SiteHeader[layoutVariant].logo.variant}
          />
          {isDesktop || isWidescreen ? (
            <StyleNavWap layoutVariant={layoutVariant} isCollapsed={isCollapsed}>
              <Nav
                data={navigationSite?.naviagtionList}
                layoutVariant={
                  isCollapsed
                    ? theme.SiteHeader[layoutVariant].Nav.variantCollapsed
                    : theme.SiteHeader[layoutVariant].Nav.variant
                }
                isTitleEnabled={navigationSite?.isTitleEnabled}
                navListTitle={navigationSite?.titleNav}
              />
            </StyleNavWap>
          ) : null}
          {/* Mobile draw toggle */}
          {!isDesktop && !isWidescreen ? (
            <BurgerNavToggle
              isOpen={isNavDrawerOpen}
              variant={'default'}
              onClick={handleClick}
              isCollapsed={isCollapsed}
            />
          ) : null}
        </StyledHeaderContainer>
      </StyledHeader>

      {/* Mobile draw */}
      {!isDesktop && !isWidescreen
        ? isNavDrawerOpen && (
            <NavDraw
              layoutVariant={theme.SiteHeader[layoutVariant].NavDraw.layoutVariant}
              siteNavigation={navigationSite?.naviagtionList}
              handleClick={handleClick}
            />
          )
        : null}
    </>
  );
};

export default SiteHeader;
