import React from 'react';
import StyledIcon from './components/StyledIcon';
// Theme
import { AgencyIconsTheme } from '@agency-platform/themes';

export interface AgencyIconsProps {
  layoutVariant: keyof AgencyIconsTheme;
  name: string;
}

const AgencyIcons = ({ name, layoutVariant }: AgencyIconsProps) => {
  return (
    <StyledIcon layoutVariant={layoutVariant}>
      <use href={`#${name}`} />
    </StyledIcon>
  );
};

export default AgencyIcons;
