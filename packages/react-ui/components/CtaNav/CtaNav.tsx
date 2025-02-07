import React from 'react';
import { useRouter } from 'next/router';
import { CtaNavTheme } from '@agency-platform/themes';
import { Cta } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import ButtonLink from '../ButtonLink';
// Styles
import StyledCtaNav from './components/StyledCtaNav';
import StyledHeading from './components/StyledHeading';
import StyledButtonLink from './components/StyledButtonLink';

// Props
export interface CtaNavProps {
  variant: keyof CtaNavTheme;
  ctaTitle?: string;
  data: Cta[];
  allowActiveButton?: boolean;
}

const CtaNav = ({ variant, ctaTitle, data, allowActiveButton = false }: CtaNavProps) => {
  const theme = useTheme();
  const router = useRouter();

  // Fallback to 'default' variant if the passed variant doesn't exist in the theme
  const ctaNavTheme = theme.CtaNav[variant] || theme.CtaNav['default'];

  const renderCtaLinks = () =>
    data &&
    data.map((item: Cta, index: React.Key) => {
      const { _type, url, email, phoneNumber, title, content } = item;
      const isActive = allowActiveButton && router.pathname === content?.slug?.current;

      switch (_type) {
        case 'common.internalAccountLink':
          return (
            <StyledButtonLink variant={variant} key={index}>
              <ButtonLink
                href={`/${content?.dynamicRoute ? content?.dynamicRoute : ''}${
                  content?.slug?.current ? content?.slug?.current : ''
                }`}
                variant={ctaNavTheme.Button.buttonVariant} // Use the fallback theme
                title={title}
                withIcon={ctaNavTheme.Button.withIcon} // Use the fallback theme
                withText={ctaNavTheme.Button.withText}
                iconName={ctaNavTheme.Button.iconName}
                iconPosition={ctaNavTheme.Button.iconPosition}
                isActive={isActive}
              >
                {title}
              </ButtonLink>
            </StyledButtonLink>
          );
        case 'common.internalLink':
          return (
            <StyledButtonLink variant={variant} key={index}>
              <ButtonLink
                href={`/${content?.dynamicRoute ? content?.dynamicRoute : ''}${
                  content?.slug?.current ? content?.slug?.current : ''
                }`}
                variant={ctaNavTheme.Button.buttonVariant}
                title={title}
                withIcon={ctaNavTheme.Button.withIcon}
                withText={ctaNavTheme.Button.withText}
                iconName={ctaNavTheme.Button.iconName}
                iconPosition={ctaNavTheme.Button.iconPosition}
                isActive={isActive}
              >
                {title}
              </ButtonLink>
            </StyledButtonLink>
          );

        case 'common.externalLink':
          return (
            <StyledButtonLink variant={variant} key={index}>
              <ButtonLink
                href={url}
                variant={ctaNavTheme.Button.buttonVariant}
                title={title}
                withIcon={ctaNavTheme.Button.withIcon}
                withText={ctaNavTheme.Button.withText}
                iconName={ctaNavTheme.Button.iconName}
                iconPosition={ctaNavTheme.Button.iconPosition}
                target="_blank"
              >
                {title}
              </ButtonLink>
            </StyledButtonLink>
          );
        case 'common.linkedInLink':
          return (
            <StyledButtonLink variant={variant} key={index}>
              <ButtonLink
                href={url}
                variant={ctaNavTheme.Button.buttonVariant}
                title={title}
                withIcon={ctaNavTheme.Button.withIcon}
                withText={ctaNavTheme.Button.withText}
                iconName={ctaNavTheme.Button.iconName}
                iconPosition={ctaNavTheme.Button.iconPosition}
              >
                {title}
              </ButtonLink>
            </StyledButtonLink>
          );
        case 'common.emailLink':
          return (
            <StyledButtonLink variant={variant} key={index}>
              <ButtonLink
                href={`mailto:${email}`}
                variant={ctaNavTheme.Button.buttonVariant}
                title={title}
                withIcon={ctaNavTheme.Button.withIcon}
                withText={ctaNavTheme.Button.withText}
                iconName={ctaNavTheme.Button.iconName}
                iconPosition={ctaNavTheme.Button.iconPosition}
              >
                {title}
              </ButtonLink>
            </StyledButtonLink>
          );
        case 'common.telLink':
          return (
            <StyledButtonLink variant={variant} key={index}>
              <ButtonLink
                href={`tel:${phoneNumber}`}
                variant={ctaNavTheme.Button.buttonVariant}
                title={title}
                withIcon={ctaNavTheme.Button.withIcon}
                withText={ctaNavTheme.Button.withText}
                iconName={ctaNavTheme.Button.iconName}
                iconPosition={ctaNavTheme.Button.iconPosition}
              >
                {title}
              </ButtonLink>
            </StyledButtonLink>
          );
        default:
          return null;
      }
    });

  return (
    <StyledCtaNav
      layoutVariant={variant}
      withColGapp={ctaNavTheme.StyledCtaNav.withColGapp} // Use fallback here as well
      withRowGap={ctaNavTheme.StyledCtaNav.withRowGap}
    >
      {ctaTitle && (
        <StyledHeading layoutVariant="default" variant="secondary" as="h3">
          {ctaTitle}
        </StyledHeading>
      )}
      {renderCtaLinks()}
    </StyledCtaNav>
  );
};

export default CtaNav;
