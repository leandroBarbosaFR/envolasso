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
import StyledButtonWrap from './components/StyledButtonWrap';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSwitch from './components/StyledSwitch';
import StyledLabel from './components/StyledLabel';

const CookieModal = () => {
  const theme = useTheme();
  const [cookies, setCookie] = useCookies(['starter-cookie-data', 'functional', 'performance']);
  const [cookieModalHidden, setCookieModalHidden] = useState(true);
  const [functionalCookies, setFunctionalCookies] = useState(!!cookies['functional']);
  const [performanceCookies, setPerformanceCookies] = useState(!!cookies['performance']);

  const cookieValid: string = cookies['starter-cookie-data'];
  const layoutVariant = 'default' as keyof CookieModalTheme;

  useEffect(() => {
    if (cookieValid) return setCookieModalHidden(true);
    return setCookieModalHidden(false);
  }, []);

  // while testing the cookies modal it will always show it
  // useEffect(() => {
  //   setCookieModalHidden(false); // Always show the modal for testing
  // }, []);

  const handleSavePreferences = () => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);

    // Store user preferences in cookies
    setCookie('starter-cookie-data', 'hasAcknowledged', { expires: nextYear, sameSite: 'strict', path: '/' });
    setCookie('functional', functionalCookies.toString(), { expires: nextYear, path: '/' });
    setCookie('performance', performanceCookies.toString(), { expires: nextYear, path: '/' });

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
        <p>Gérez vos paramètres de cookies ici :</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Strictement Nécessaires - Non toggleable */}
          <StyledLabel layoutVariant={layoutVariant}>
            <StyledSwitch
              checked={true} // Always on
              disabled // Non-toggleable
            />
            Strictement Nécessaires
          </StyledLabel>

          {/* Fonctionnels */}
          <StyledLabel layoutVariant={layoutVariant}>
            <StyledSwitch
              checked={functionalCookies}
              onChange={() => setFunctionalCookies(!functionalCookies)} // Toggleable
            />
            Fonctionnels
          </StyledLabel>

          {/* Performance */}
          <StyledLabel layoutVariant={layoutVariant}>
            <StyledSwitch
              checked={performanceCookies}
              onChange={() => setPerformanceCookies(!performanceCookies)} // Toggleable
            />
            Performance
          </StyledLabel>
        </div>
      </StyledArticle>
      <StyledButtonWrap layoutVariant={layoutVariant}>
        <Button
          variant={theme.CookieModal[layoutVariant!].StyledButtonWrap.ButtonAccept.variant}
          withIcon={theme.CookieModal[layoutVariant!].StyledButtonWrap.ButtonAccept.withIcon}
          withText={theme.CookieModal[layoutVariant!].StyledButtonWrap.ButtonAccept.withText}
          onClick={handleSavePreferences}
        >
          Sauvegarder les préférences
        </Button>
      </StyledButtonWrap>
    </StyledCookieModal>
  );
};

export default CookieModal;
