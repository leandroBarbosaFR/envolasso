import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { CookieModalTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../Button';
// Styles
import StyledCookieModal from './components/StyledCookieModal';
import StyledArticle from './components/StyledArticle';
import StyledButton from './components/StyledButton';
import StyledButtonWrap from './components/StyledButtonWrap';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';

const CookieModal = () => {
  const theme = useTheme();
  const [cookies, setCookie] = useCookies(['starter-cookie-data']);
  const [cookieModalHidden, setCookieModalHidden] = useState(true);
  const cookieValid: string = cookies['starter-cookie-data'];
  const layoutVariant = 'default' as keyof CookieModalTheme;

  useEffect(() => {
    if (cookieValid) return setCookieModalHidden(true);
    return setCookieModalHidden(false);
  }, []);

  const handleClose = () => {
    const currentYear = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(currentYear.getFullYear() + 1);

    setCookie('starter-cookie-data', 'hasAckowledged', {
      expires: nextYear,
      sameSite: 'strict',
      path: '/'
    });
    setTimeout(() => {
      setCookieModalHidden(true);
    }, 500);
  };

  if (cookieModalHidden) return null;

  return (
    <StyledCookieModal layoutVariant={layoutVariant}>
      <StyledHeadingWrap layoutVariant={layoutVariant}>
        <StyledHeading
          as={'h2'}
          variant={theme.CookieModal[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
          layoutVariant={layoutVariant}
        >
          Nous utilisons des cookies
        </StyledHeading>
      </StyledHeadingWrap>
      <StyledArticle
        layoutVariant={layoutVariant}
        variant={theme.CookieModal[layoutVariant!].StyledArticle.variant}
      >
        <p>
          Ce site utilise des cookies comme expliqué dans notre politique en matière de cookies. Si vous
          acceptez notre utilisation des cookies, veuillez fermer ce message et continuer à utiliser le site.
        </p>
      </StyledArticle>
      <StyledButtonWrap layoutVariant={layoutVariant}>
        <Button
          variant={theme.CookieModal[layoutVariant!].StyledButtonWrap.ButtonAccept.variant}
          withIcon={theme.CookieModal[layoutVariant!].StyledButtonWrap.ButtonAccept.withIcon}
          withText={theme.CookieModal[layoutVariant!].StyledButtonWrap.ButtonAccept.withText}
          onClick={handleClose}
        >
          Accepter et fermer
        </Button>
      </StyledButtonWrap>

      <StyledButton layoutVariant={layoutVariant}>
        <Button
          variant={theme.CookieModal[layoutVariant!].StyledButton.Button.variant}
          withIcon={theme.CookieModal[layoutVariant!].StyledButton.Button.withIcon}
          withText={theme.CookieModal[layoutVariant!].StyledButton.Button.withText}
          iconName={theme.CookieModal[layoutVariant!].StyledButton.Button.iconName}
          onClick={handleClose}
        />
      </StyledButton>
    </StyledCookieModal>
  );
};

export default CookieModal;
