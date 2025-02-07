import { NavDrawTheme } from '@agency-platform/themes';
import { NavigationList } from '@agency-platform/shared-types';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// Components
import NavList from '../NavList';
import ButtonLink from '../ButtonLink';
// Styles
import StyledNavDraw from './components/StyledNavDraw';

export interface NavDrawProps {
  layoutVariant: keyof NavDrawTheme;
  siteNavigation?: NavigationList[];
  handleClick: () => void;
}

const NavDraw = ({ layoutVariant, siteNavigation, handleClick }: NavDrawProps) => {
  const theme = useTheme();

  return (
    <StyledNavDraw layoutVariant={layoutVariant}>
      <NavList
        layoutVariant={theme.NavDraw[layoutVariant!].StyledNavDraw.NavList.layoutVariant}
        siteNavigation={siteNavigation}
        handleClick={handleClick}
      />
    </StyledNavDraw>
  );
};

export default NavDraw;
