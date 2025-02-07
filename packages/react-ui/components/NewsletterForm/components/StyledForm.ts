import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledForm = styled.form<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledForm.display};
  flex-direction: ${({ layoutVariant, theme }) =>
    theme.NewsletterForm[layoutVariant!].StyledForm.flexDirection};
  gap: ${({ layoutVariant, theme }) => theme.NewsletterForm[layoutVariant!].StyledForm.gap};

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
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledForm.tablet.flexDirection};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledForm.desktop.flexDirection};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    flex-direction: ${({ layoutVariant, theme }) =>
      theme.NewsletterForm[layoutVariant!].StyledForm.widescreen.flexDirection};
  }
`;

export default StyledForm;
