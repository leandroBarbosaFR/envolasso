import React from 'react';
// Components
import AgencyIcons from '../AgencyIcons';
// Styles
import StyledLogo from './components/StyledLogo';
// Types
export type Variant = 'headerLogo' | 'footerLogo';

// Props
export interface LogoProps {
  variant?: string;
  title?: string;
  href: string;
  LogoName: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Logo = ({ variant = 'headerLogo', href, title, LogoName, onClick }: LogoProps) => {
  return (
    <StyledLogo variant={variant} title={title} href={href} onClick={onClick}>
      <AgencyIcons layoutVariant={'default'} name={LogoName} />
    </StyledLogo>
  );
};

export default Logo;
