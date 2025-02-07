import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledErrorMessageWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.background};
  position: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.position};
  padding: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.padding};
  margin: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.margin};
  border: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.borderRadius};

  button {
    position: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.position};
    top: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.top};
    left: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.transform};
    margin: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.margin};
    z-index: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.zIndex};
    backdrop-filter: ${({ layoutVariant, theme }) =>
      theme.GlobalErrorMessage[layoutVariant!].StyledErrorMessageWrapper.button.backdropFilter};
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

export default StyledErrorMessageWrapper;
