import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFormSubmitFields = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormSubmitFields.display};
  gap: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormSubmitFields.gap};
  position: ${({ layoutVariant, theme }) =>
    theme.ContactForm[layoutVariant!].StyledFormSubmitFields.position};
  background: ${({ layoutVariant, theme }) =>
    theme.ContactForm[layoutVariant!].StyledFormSubmitFields.background};
  margin: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormSubmitFields.margin};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobile.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobile.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobile.border};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobileLarge.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobileLarge.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.mobileLarge.border};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.tablet.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.tablet.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.tablet.border};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.desktop.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.desktop.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.desktop.border};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.widescreen.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.widescreen.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormSubmitFields.widescreen.border};
  }
`;

export default StyledFormSubmitFields;
