import React, { forwardRef, useCallback, useState } from 'react';
import { FormInputMixedTheme } from '@agency-platform/themes';
// Components
import Button from '../Button';
// Style Components
import StyledLabel from './components/StyledLabel';
import StyledInput from './components/StyledInput';
import StyledErrorMessage from './components/StyledErrorMessage';
import StyledShowPassword from './components/StyledShowPassword';

// Theme
import { useTheme } from 'styled-components';
//Props
export interface FormInputPasswordProps {
  variant?: keyof FormInputMixedTheme;
  id?: string;
  placeholder?: string;
  label?: string;
  error?: {
    message?: string;
  };
}

const FormInputPassword = forwardRef<HTMLInputElement, FormInputPasswordProps>(function forwardFormEntry(
  { variant, id, placeholder, label, error, ...rest }: FormInputPasswordProps,
  ref
) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //Toggle password visibility function
  const togglePasswordVisibility = useCallback(() => {
    const inputElement = document.getElementById(id || '') as HTMLInputElement;
    if (inputElement) {
      inputElement.type = isPasswordVisible ? 'password' : 'text';
      setIsPasswordVisible((prevState) => !prevState);
    }
  }, [id, isPasswordVisible]);

  return (
    <>
      <StyledLabel variant={variant} htmlFor={id}>
        {label && label}
        <StyledInput
          variant={variant}
          id={id}
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {error && <StyledErrorMessage variant={variant}>{error.message}</StyledErrorMessage>}
        <StyledShowPassword variant={variant} onClick={togglePasswordVisibility}>
          <Button
            variant={theme.FormInputPassword[variant!].StyledShowPassword.Button.variant}
            withIcon={theme.FormInputPassword[variant!].StyledShowPassword.Button.withIcon}
            withText={theme.FormInputPassword[variant!].StyledShowPassword.Button.withText}
            iconName={isPasswordVisible ? 'closedEye' : 'openedEye'}
          />
        </StyledShowPassword>
      </StyledLabel>
    </>
  );
});

export default FormInputPassword;
