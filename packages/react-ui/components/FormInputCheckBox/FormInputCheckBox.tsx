import React, { forwardRef } from 'react';
import { FormInputCheckBoxTheme } from '@agency-platform/themes';
// Components
// Style Components
import StyledCheckBox from './components/StyledCheckBox';
import StyledLabel from './components/StyledLabel';
import StyledInput from './components/StyledInput';
import StyledErrorMessage from './components/StyledErrorMessage';
//Props
export interface FormInputCheckBoxProps {
  variant: keyof FormInputCheckBoxTheme;
  id?: string;
  type?: string;
  name?: string;
  label?: React.ReactNode | React.ReactNode[];
  checked?: boolean;
  disabled?: boolean;
  error?: {
    message?: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputCheckBox = forwardRef<HTMLInputElement, FormInputCheckBoxProps>(
  ({ variant, id, type, name, label, error, disabled, ...rest }, ref) => {
    return (
      <>
        <StyledLabel variant={variant} htmlFor={id}>
          <StyledCheckBox variant={variant}>
            <StyledInput
              variant={variant}
              id={id}
              type={type}
              name={name}
              ref={ref}
              {...rest}
              disabled={disabled}
            />
            <div className="checkbox">
              <span></span>
            </div>
            {label && label}
          </StyledCheckBox>
          {error && <StyledErrorMessage variant={variant}>{error.message}</StyledErrorMessage>}
        </StyledLabel>
      </>
    );
  }
);

export default FormInputCheckBox;
