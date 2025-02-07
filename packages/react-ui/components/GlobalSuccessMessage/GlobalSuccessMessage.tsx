import React from 'react';
// Theme
import { useTheme } from 'styled-components';
import { GlobalSuccessMessageTheme } from '@agency-platform/themes';
// Components
import Button from '../Button/Button';
// Styled
import StyledSuccessMessageWrapper from './components/StyledSuccessMessageWrapper';
import StyledSuccessMessage from './components/StyledSuccessMessage';

export interface GlobalSuccessMessageProps {
  layoutVariant: keyof GlobalSuccessMessageTheme;
  message: string;
}

const GlobalSuccessMessage = ({ layoutVariant, message }: GlobalSuccessMessageProps) => {
  const theme = useTheme();

  if (!message) return null;

  return (
    <StyledSuccessMessageWrapper layoutVariant={layoutVariant}>
      <Button
        variant={theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessage.Button.variant}
        withText={theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessage.Button.withText}
        withIcon={theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessage.Button.withIcon}
        iconName={theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessage.Button.iconName}
      />
      <StyledSuccessMessage layoutVariant={layoutVariant}>{message}</StyledSuccessMessage>
    </StyledSuccessMessageWrapper>
  );
};

export default GlobalSuccessMessage;
