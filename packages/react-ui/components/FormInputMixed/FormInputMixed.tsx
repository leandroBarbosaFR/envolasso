import React, { forwardRef } from 'react';
import { FormInputMixedTheme } from '@agency-platform/themes';
// Components
// Style Components
import StyledLabel from './components/StyledLabel';
import StyledInput from './components/StyledInput';
import StyledErrorMessage from './components/StyledErrorMessage';
//Props
export interface FormInputMixedProps {
  variant?: keyof FormInputMixedTheme;
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  autofill?: boolean;
  defaultValue?: string;
  error?: {
    message?: string;
  };
}

const FormInputMixed = forwardRef<HTMLInputElement, FormInputMixedProps>(function forwardFormEntry(
  { variant, id, type, placeholder, label, error, ...rest }: FormInputMixedProps,
  ref
) {
  return (
    <StyledLabel variant={variant} htmlFor={id}>
      {label && label}
      <StyledInput variant={variant} id={id} type={type} placeholder={placeholder} ref={ref} {...rest} />
      {error && <StyledErrorMessage variant={variant}>{error.message}</StyledErrorMessage>}
    </StyledLabel>
  );
});

export default FormInputMixed;
