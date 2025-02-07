import React, { forwardRef } from 'react';
import { FormInputRadioTheme } from '@agency-platform/themes';
// Components
// Style Components
import StyledRadio from './components/StyledRadio';
import StyledLabel from './components/StyledLabel';
import StyledInput from './components/StyledInput';
import StyledErrorMessage from './components/StyledErrorMessage';
//Props
export interface FormInputRadioProps {
  variant: keyof FormInputRadioTheme;
  id?: string;
  type?: string;
  name?: string;
  label?: string;
  value: string;
  checked?: boolean;
  error?: {
    message?: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputRadio = forwardRef<HTMLInputElement, FormInputRadioProps>(
  ({ variant, id, type, name, label, error, checked, ...rest }, ref) => {
    return (
      <>
        <StyledLabel variant={variant} htmlFor={id}>
          <StyledRadio variant={variant}>
            <StyledInput
              variant={variant}
              id={id}
              type={type}
              name={name}
              ref={ref}
              checked={checked}
              {...rest}
            />
            <div className="radio">
              <span></span>
            </div>
            {label && label}
          </StyledRadio>
          {error && <StyledErrorMessage variant={variant}>{error.message}</StyledErrorMessage>}
        </StyledLabel>
      </>
    );
  }
);

export default FormInputRadio;
