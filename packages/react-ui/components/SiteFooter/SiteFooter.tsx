import { ColumnsContent } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import React from 'react';
import CustomPortableText from '../../utils/portableText';
// Theme
import { useTheme } from 'styled-components';
import { SiteFooterTheme } from '@agency-platform/themes';
// Components
import Logo from '../Logo';
import Nav from '../Nav';
import NavList from '../NavList';
import NewsletterForm from '../NewsletterForm';
import Paragraph from '../Paragraph';
import SocialNav from '../SocialNav';
// Styles
import StyledLogoWrap from './components/StyledLogoWrap';
import StyledArticle from './components/StyledArticle';
import StyledCredit from './components/StyledCredit';
import StyledFooter from './components/StyledFooter';
import StyledFooterContainer from './components/StyledFooterContainer';
import StyledFooterGrid from './components/StyledFooterGrid';
import StyledFooterLinks from './components/StyledFooterLinks';
import StyledFooterLinksLogos from './components/StyledFooterLinksLogos';
import StyledFooterSocialNav from './components/StyledFooterSocialNav';
import StyledNewsletterFormWrap from './components/StyledNewsletterFormWrap';
import StyledTextColumnGrid from './components/StyledTextColumnGrid';

export interface SiteFooterProps {
  layoutVariant: keyof SiteFooterTheme;
  isAltFooter: boolean;
  data: {
    _type?: string;
    _rev?: string;
    _id?: string;
    variant?: string;
    titleNewsletterForm: string;
    actionNewsletterForm?: string;
    navigationSocial?: any;
    navigationFooter?: any;
    isSocialNavEnabled?: boolean;
    isSocialNavIconsEnabled?: boolean;
    isNewsletterFormEnabled?: boolean;
    isNavFooterEnabled?: boolean;
    isContentEnabled?: boolean;
    bodyNewsletterForm?: any;
    columnsContent: ColumnsContent[];
    isCopyrightInfo: boolean;
    copyrightName: string;
    copyrightPhase: string;
    isCopyrightFlex: boolean;
    isCopyrightEnt: boolean;
  };
  FooterLinksLogos?: React.ReactNode | React.ReactNode[];
  isFooterHidden: boolean;
}

const SiteFooter = ({
  layoutVariant,
  isAltFooter,
  data,
  FooterLinksLogos,
  isFooterHidden
}: SiteFooterProps) => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  if (!data) return null;
  const {
    titleNewsletterForm,
    bodyNewsletterForm,
    actionNewsletterForm,
    isNewsletterFormEnabled,
    columnsContent,
    navigationFooter,
    navigationSocial,
    isSocialNavEnabled,
    isNavFooterEnabled,
    isCopyrightInfo,
    copyrightName,
    copyrightPhase,
    isCopyrightEnt
  } = data;

  const renderTextColumn = (columnsContent: ColumnsContent[]) =>
    columnsContent &&
    columnsContent.map((item, index) => {
      const { _type, body } = item;
      switch (_type) {
        case 'common.layout.textColumnBasic':
          return (
            item?.body && (
              <StyledArticle
                key={index}
                layoutVariant={layoutVariant}
                variant={theme.SiteFooter[layoutVariant!].StyledTextColumn.StyledArticle.variant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledArticle>
            )
          );
        case 'common.navigation':
          return (
            item?.naviagtionList && (
              <NavList
                key={index}
                layoutVariant={theme.SiteFooter[layoutVariant!].StyledTextColumn.NavList.layoutVariant}
                navListTitle={item.titleNav}
                siteNavigation={item.naviagtionList}
              />
            )
          );
      }
    });

  return isFooterHidden ? null : (
    <StyledFooter layoutVariant={layoutVariant}>
      <StyledFooterContainer
        layoutVariant={layoutVariant}
        isFluid={theme.SiteFooter[layoutVariant!].StyledFooterContainer.isFluid}
      >
        <StyledFooterGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.SiteFooter[layoutVariant!].StyledFooterGrid.withRowGap}
          withColGapp={theme.SiteFooter[layoutVariant!].StyledFooterGrid.withColGapp}
        >
          {!isAltFooter && (
            <StyledLogoWrap layoutVariant={layoutVariant}>
              <Logo
                href={'/'}
                LogoName={theme.SiteFooter[layoutVariant!].StyledLogoWrap.logo.LogoName}
                variant={theme.SiteFooter[layoutVariant!].StyledLogoWrap.logo.variant}
              />
            </StyledLogoWrap>
          )}
          {isNewsletterFormEnabled && !isAltFooter && (
            <StyledNewsletterFormWrap layoutVariant={layoutVariant}>
              <NewsletterForm
                layoutVariant={'default'}
                title={titleNewsletterForm}
                actionNewsletterForm={actionNewsletterForm}
                bodyNewsletterForm={bodyNewsletterForm}
                isNewsletterFormEnabled={isNewsletterFormEnabled}
              />
            </StyledNewsletterFormWrap>
          )}
          {isSocialNavEnabled && !isAltFooter && (
            <StyledFooterSocialNav layoutVariant={layoutVariant}>
              <SocialNav
                variant={theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.SocialNav.variant}
                data={navigationSocial}
                buttonVariant={theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.SocialNav.buttonVariant}
                withIcon={theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.SocialNav.withIcon}
                withText={theme.SiteFooter[layoutVariant!].StyledFooterSocialNav.SocialNav.withText}
              />
            </StyledFooterSocialNav>
          )}
          {columnsContent && !isAltFooter && (
            <StyledTextColumnGrid
              layoutVariant={layoutVariant}
              withRowGap={theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.withRowGap}
              withColGapp={theme.SiteFooter[layoutVariant!].StyledTextColumnGrid.withColGapp}
            >
              {renderTextColumn(columnsContent)}
            </StyledTextColumnGrid>
          )}
          {FooterLinksLogos && !isAltFooter && (
            <StyledFooterLinksLogos layoutVariant={layoutVariant}>{FooterLinksLogos}</StyledFooterLinksLogos>
          )}
          {isNavFooterEnabled && (
            <StyledFooterLinks layoutVariant={layoutVariant}>
              <Nav
                data={navigationFooter.naviagtionList}
                layoutVariant={theme.SiteFooter[layoutVariant!].StyledFooterLinks.navVariant}
                isTitleEnabled={navigationFooter.isTitleEnabled}
                navListTitle={navigationFooter.titleNav}
              />
            </StyledFooterLinks>
          )}
          {isCopyrightInfo && (
            <StyledCredit layoutVariant={layoutVariant}>
              <Paragraph variant={theme.SiteFooter[layoutVariant!].StyledCredit.paragraphVariant}>
                {copyrightName && copyrightName} {year} {copyrightPhase && copyrightPhase}{' '}
                {isCopyrightEnt && (
                  <>
                    <a href="https://www.1367studio.com" target={'_new'}>
                      1367 Studio
                    </a>{' '}
                    {/* &{' '} */}
                  </>
                )}
              </Paragraph>
            </StyledCredit>
          )}
        </StyledFooterGrid>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export default SiteFooter;
