import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLoadingMessageWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.background};
  position: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.position};
  padding: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.padding};
  margin: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.margin};
  border: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.borderRadius};

  button {
    position: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.position};
    top: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.top};
    left: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.transform};
    margin: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.margin};
    z-index: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.zIndex};
    backdrop-filter: ${({ layoutVariant, theme }) =>
      theme.GlobalLoadingMessage[layoutVariant!].StyledLoadingMessageWrapper.button.backdropFilter};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledLoadingMessageWrapper;
