import { SocialNavProps } from '@agency-platform/shared-types';
import React from 'react';
// Components
import ButtonLink from '../ButtonLink';
// Styles
import StyledSocialNav from './components/StyledSocialNav';
// Props

const SocialNav = ({ variant, data, buttonVariant, withText, withIcon }: SocialNavProps) => {
  if (!data) return null;
  const { naviagtionList } = data;

  const renderSocialNav = () =>
    naviagtionList &&
    naviagtionList.map((item) => {
      const { _key, url, title, platform } = item;

      return (
        <ButtonLink
          key={_key}
          href={url}
          variant={buttonVariant}
          iconName={platform}
          withIcon={withIcon}
          withText={withText}
          title={title}
          target={'_new'}
        >
          {title}
        </ButtonLink>
      );
    });

  return <StyledSocialNav variant={variant}>{renderSocialNav()}</StyledSocialNav>;
};

export default SocialNav;
