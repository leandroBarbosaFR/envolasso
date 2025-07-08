import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Reaptcha from 'reaptcha';
import { PortableText } from '@portabletext/react';
import type { ContactFormLayout } from '@agency-platform/shared-types';
import { CustomPortableText } from '../../utils';
import postFormData from '../../services/forms';
import config from '../../config';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../Button';
import { FormInputMixed } from '../FormInputMixed';
import FormInputSelect from '../FormInputSelect';
import FormInputTextarea from '../FormInputTextarea';
import GlobalErrorMessage from '../GlobalErrorMessage';
// Styles
import StyledContactFormSection from './components/StyledContactFormSection';
import StyledHeading from './components/StyledHeading';
import StyledArticle from './components/StyledArticle';
import StyledForm from './components/StyledForm';
import StyledFormGrid from './components/StyledFormGrid';
import StyledFormFields from './components/StyledFormFields';
import StyledFormSubmitFields from './components/StyledFormSubmitFields';

export interface ContactFormProps {
  data: ContactFormLayout;
}

interface ContactFormInput {
  Email: string;
  Name: string;
  Phone: string;
  Subject: string;
  Message: string;
}

const schema = yup.object({
  Email: yup.string().required().email(),
  Name: yup.string().required(),
  Phone: yup.string().required(),
  Subject: yup.string().required(),
  Message: yup.string().required()
});

const ContactForm = ({ data }: ContactFormProps) => {
  if (!data) return null;
  const { variant, title, body, formMessage } = data;
  const theme = useTheme();
  const [globalError, setGlobalError] = useState('');
  const [globalSuccess, setGlobalSuccess] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const [showReaptcha] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<ContactFormInput>({ resolver: yupResolver(schema) });

  const getVerify = async (response: string): Promise<boolean> => {
    try {
      await axios.post('/api/verify', { response });
      return true;
    } catch (err) {
      return false;
    }
  };

  const onRecapVerify = async (response: string) => {
    const isVerified = await getVerify(response);
    setIsDisabled(!isVerified);
  };

  const onRecapExpire = () => {
    setIsDisabled(true);
  };

  const onSubmit: SubmitHandler<ContactFormInput> = async (formData) => {
    if (isDisabled) return null;
    try {
      const { error } = await postFormData(formData);
      if (error) {
        setGlobalError('Something went wrong while trying to send form');
        throw new Error(error);
      }
      setGlobalSuccess('success');
      router.push('/'); // Redirect to the landing page after success
    } catch (err) {
      setGlobalError('Something went wrong while trying to send form');
    }
    setValue('Email', '');
    setValue('Name', '');
    setValue('Phone', '');
    setValue('Subject', 'music');
    setValue('Message', '');
  };

  return (
    <StyledContactFormSection layoutVariant={variant}>
      <StyledHeading
        as={'h2'}
        variant={theme.ContactForm[variant!].StyledHeading.variant}
        layoutVariant={variant}
      >
        {title}
      </StyledHeading>
      {body && (
        <StyledArticle variant={theme.ContactForm[variant!].StyledArticle.variant}>
          <PortableText value={body} components={CustomPortableText} />
        </StyledArticle>
      )}

      {globalSuccess ? (
        <StyledArticle variant={theme.ContactForm[variant!].StyledArticle.variant}>
          <p>{formMessage}</p>
        </StyledArticle>
      ) : (
        <StyledForm layoutVariant={variant} onSubmit={handleSubmit(onSubmit)}>
          <StyledFormGrid
            layoutVariant={variant}
            withRowGap={theme.ContactForm[variant!].StyledFormGrid.withRowGap}
            withColGapp={theme.ContactForm[variant!].StyledFormGrid.withColGapp}
          >
            <StyledFormFields layoutVariant={variant}>
              <FormInputMixed
                variant={theme.ContactForm[variant!].StyledFormFields.FormInputMixed.variant}
                id={'email'}
                type={'email'}
                placeholder={'ex. jeandupont@email.fr'}
                label={'Votre email'}
                error={errors.Email && errors.Email}
                {...register('Email')}
              />
            </StyledFormFields>
            <StyledFormFields layoutVariant={variant}>
              <FormInputMixed
                variant={theme.ContactForm[variant!].StyledFormFields.FormInputMixed.variant}
                id={'name'}
                type={'text'}
                placeholder={'Nom complet'}
                label={'Nom complet'}
                error={errors.Name && errors.Name}
                {...register('Name')}
              />
            </StyledFormFields>
              <StyledFormFields layoutVariant={variant}>
              <FormInputMixed
                variant={theme.ContactForm[variant!].StyledFormFields.FormInputMixed.variant}
                id={'phone'}
                type={'phone'}
                placeholder={'ex. +33 0123456789'}
                label={'Votre numéro de téléphone'}
                error={errors.Phone && errors.Phone}
                {...register('Phone')}
              />
            </StyledFormFields>
            <StyledFormFields layoutVariant={variant}>
              <FormInputSelect
                variant={theme.ContactForm[variant!].StyledFormFields.FormInputSelect.variant}
                label={`Objet (optionel)`}
                error={errors.Subject && errors.Subject}
                {...register('Subject')}
              >
                <option value="Je besoin d'un devis">Je souhaite être rappelé</option>
                <option value="J'ai une autre question">J'ai une autre question</option>
                {/* <option value="license">Help me choose the right license</option>
                <option value="chat">Just need a chat</option> */}
              </FormInputSelect>
            </StyledFormFields>
            <StyledFormFields layoutVariant={variant}>
              <FormInputTextarea
                variant={theme.ContactForm[variant!].StyledFormFields.FormInputTextarea.variant}
                id={'message'}
                placeholder={'Message'}
                label={'Message'}
                error={errors.Message && errors.Message}
                {...register('Message')}
              />
            </StyledFormFields>
            {showReaptcha ? (
              <StyledFormFields layoutVariant={variant}>
                <Reaptcha
                  sitekey={config.RECAP_SITE_KEY}
                  onVerify={onRecapVerify}
                  onExpire={onRecapExpire}
                  onLoad={() => null}
                />
              </StyledFormFields>
            ) : null}
            <StyledFormSubmitFields layoutVariant={variant}>
              <Button
                variant={theme.ContactForm[variant!].StyledFormSubmitFields.submitButton.variant}
                type="submit"
                disabled={isDisabled}
              >
                Envoyer le message
              </Button>
            </StyledFormSubmitFields>
            <StyledFormFields layoutVariant={variant}>
              {globalError && <GlobalErrorMessage layoutVariant={variant} error={globalError} />}
            </StyledFormFields>
          </StyledFormGrid>
        </StyledForm>
      )}
    </StyledContactFormSection>
  );
};

export default ContactForm;
