import { PortableText } from '@portabletext/react';
import React from 'react';
// Themeing
import { useTheme } from 'styled-components';
import { NewsletterFormTheme } from '@agency-platform/themes';
// Components
import CustomPortableText from '../../utils/portableText';
import Button from '../Button';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledForm from './components/StyledForm';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledInput from './components/StyledInput';

export interface NewsLetterProps {
  layoutVariant: keyof NewsletterFormTheme;
  title: string;
  bodyNewsletterForm: any;
  actionNewsletterForm: string | undefined;
  isNewsletterFormEnabled: boolean;
}

const NewsletterForm = ({
  layoutVariant,
  title,
  bodyNewsletterForm,
  actionNewsletterForm,
  isNewsletterFormEnabled
}: NewsLetterProps) => {
  if (!isNewsletterFormEnabled) return null;
  const theme = useTheme();
  return (
    <>
      {title && (
        <StyledHeadingWrap layoutVariant={layoutVariant}>
          <StyledHeading
            as={'h2'}
            layoutVariant={layoutVariant}
            variant={theme.NewsletterForm[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
          >
            {title}
          </StyledHeading>
        </StyledHeadingWrap>
      )}
      {bodyNewsletterForm && (
        <StyledArticle
          layoutVariant={layoutVariant}
          variant={theme.NewsletterForm[layoutVariant!].StyledArticle.variant}
        >
          <PortableText value={bodyNewsletterForm} components={CustomPortableText} />
        </StyledArticle>
      )}
      <StyledForm layoutVariant={layoutVariant} action={actionNewsletterForm} method="post" target="_blank">
        <StyledInput layoutVariant={layoutVariant} type="text" placeholder="name" name="FNAME" />
        <StyledInput layoutVariant={layoutVariant} type="email" placeholder="email" name="EMAIL" />
        <Button type="submit" variant={theme.NewsletterForm[layoutVariant!].StyledForm.buttton.variant}>
          S’abonner
        </Button>
      </StyledForm>
    </>
  );
};

export default NewsletterForm;
