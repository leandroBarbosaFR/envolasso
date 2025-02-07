import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFormFields = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.display};
  position: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.position};
  background: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.mobile.gridColumn};
    margin: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.mobile.padding};
    border: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.mobile.border};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.mobileLarge.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.mobileLarge.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.mobileLarge.border};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.tablet.gridColumn};
    margin: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.tablet.padding};
    border: ${({ layoutVariant, theme }) => theme.ContactForm[layoutVariant!].StyledFormFields.tablet.border};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.desktop.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.desktop.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.desktop.border};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.widescreen.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.widescreen.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.ContactForm[layoutVariant!].StyledFormFields.widescreen.border};
  }
`;

export default StyledFormFields;
