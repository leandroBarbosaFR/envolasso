import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const GlobalSuccessMessageWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.background};
  position: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.position};
  padding: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.padding};
  margin: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.margin};
  border: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.borderRadius};

  button {
    position: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.position};
    top: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.top};
    left: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.left};
    transform: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.transform};
    margin: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.margin};
    z-index: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.zIndex};
    backdrop-filter: ${({ layoutVariant, theme }) =>
      theme.GlobalSuccessMessage[layoutVariant!].StyledSuccessMessageWrapper.button.backdropFilter};
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

export default GlobalSuccessMessageWrapper;
