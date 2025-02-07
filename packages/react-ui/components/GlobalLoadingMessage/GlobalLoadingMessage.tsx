import React from 'react';
// Theme
import { useTheme } from 'styled-components';
import { GlobalLoadingMessageTheme } from '@agency-platform/themes';
// Components
import Button from '../Button/Button';
// Styled
import StyledLoadingMessageWrapper from './components/StyledLoadingMessageWrapper';
import StyledLoadingMessage from './components/StyledLoadingMessage';

export interface GlobalLoadingMessageProps {
  layoutVariant: keyof GlobalLoadingMessageTheme;
  loading: string;
}

const GlobalLoadingMessage = ({ layoutVariant, loading }: GlobalLoadingMessageProps) => {
  const theme = useTheme();
  if (!loading) return null;

  return (
    <StyledLoadingMessageWrapper layoutVariant={layoutVariant}>
      <Button
        variant={theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessage.Button.variant}
        withText={theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessage.Button.withText}
        withIcon={theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessage.Button.withIcon}
        iconName={theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessage.Button.iconName}
      />
      <StyledLoadingMessage layoutVariant={layoutVariant}>{loading}</StyledLoadingMessage>
    </StyledLoadingMessageWrapper>
  );
};

export default GlobalLoadingMessage;
