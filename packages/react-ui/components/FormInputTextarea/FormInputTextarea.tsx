import React, { forwardRef } from 'react';
import { FormInputTextareaTheme } from '@agency-platform/themes';
// Components
// Style Components
import StyledLabel from './components/StyledLabel';
import StyledTextarea from './components/StyledTextarea';
import StyledErrorMessage from './components/StyledErrorMessage';
//Props
export interface FormInputTextareaProps {
  variant?: keyof FormInputTextareaTheme;
  id?: string;
  placeholder?: string;
  label?: string;
  error?: {
    message?: string;
  };
}

const FormInputTextarea = forwardRef<HTMLTextAreaElement, FormInputTextareaProps>(function forwardFormEntry(
  { variant, id, placeholder, label, error, ...rest }: FormInputTextareaProps,
  ref
) {
  return (
    <StyledLabel variant={variant} htmlFor={id}>
      {label && label}
      <StyledTextarea variant={variant} id={id} placeholder={placeholder} ref={ref} {...rest} />
      {error && <StyledErrorMessage variant={variant}>{error.message}</StyledErrorMessage>}
    </StyledLabel>
  );
});

export default FormInputTextarea;
