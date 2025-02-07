import React from 'react';
// Theme
import { useTheme } from 'styled-components';
import { GlobalErrorMessageTheme } from '@agency-platform/themes';
// Components
import Button from '../Button/Button';
// Styled
import StyledErrorMessageWrapper from './components/StyledErrorMessageWrapper';
import StyledErrorMessage from './components/StyledErrorMessage';

export interface GlobalErrorMessageProps {
  layoutVariant: keyof GlobalErrorMessageTheme;
  error: string;
}

const GlobalErrorMessage = ({ layoutVariant, error }: GlobalErrorMessageProps) => {
  const theme = useTheme();

  if (!error) return null;

  return (
    <StyledErrorMessageWrapper layoutVariant={layoutVariant}>
      <Button
        variant={theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessage.Button.variant}
        withText={theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessage.Button.withText}
        withIcon={theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessage.Button.withIcon}
        iconName={theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessage.Button.iconName}
      />
      <StyledErrorMessage layoutVariant={layoutVariant}>{error}</StyledErrorMessage>
    </StyledErrorMessageWrapper>
  );
};

export default GlobalErrorMessage;
