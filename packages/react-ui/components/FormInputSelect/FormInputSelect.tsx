import React, { forwardRef } from 'react';
import { FormInputSelectTheme } from '@agency-platform/themes';
// Components
import AgencyIcons from '../AgencyIcons';
// Theme
import { useTheme } from 'styled-components';
// Style Components
import StyledLabel from './components/StyledLabel';
import StyledSelectWrap from './components/StyledSelectWrap';
import StyledSelect from './components/StyledSelect';
import StyledErrorMessage from './components/StyledErrorMessage';
//Props
export interface FormInputSelectProps {
  variant: keyof FormInputSelectTheme;
  children: React.ReactNode | React.ReactNode[];
  label?: string;
  error?: {
    message?: string;
  };
}

const FormInputSelect = forwardRef<HTMLSelectElement, FormInputSelectProps>(
  ({ variant, children, label, error, ...rest }, ref) => {
    const theme = useTheme();
    return (
      <StyledLabel variant={variant}>
        {label && label}
        <StyledSelectWrap variant={variant}>
          <StyledSelect variant={variant} ref={ref} {...rest}>
            {children}
          </StyledSelect>
          <AgencyIcons
            layoutVariant={theme.FormInputSelect[variant!].AgencyIcons.layoutVariant}
            name={theme.FormInputSelect[variant!].AgencyIcons.name || 'reveal'}
          />
        </StyledSelectWrap>
        {error && <StyledErrorMessage variant={variant}>{error.message}</StyledErrorMessage>}
      </StyledLabel>
    );
  }
);

export default FormInputSelect;
