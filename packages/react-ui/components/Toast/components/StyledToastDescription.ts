import { StyledComponentProps } from '@agency-platform/shared-types';
import { ToastDescription } from '@radix-ui/react-toast';
import styled from 'styled-components';

const StyledToastDescription = styled(ToastDescription)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  height: ${({ variant, theme }) => theme.Toast[variant!].StyledToastDescription.height};
  display: ${({ variant, theme }) => theme.Toast[variant!].StyledToastDescription.display};
  align-items: ${({ variant, theme }) => theme.Toast[variant!].StyledToastDescription.alignItems};

  p,
  a {
    color: ${({ variant, theme }) => theme.Toast[variant!].StyledToastDescription.StyledDescription.color};
    text-transform: ${({ variant, theme }) =>
      theme.Toast[variant!].StyledToastDescription.StyledDescription.textTransform};
    font-size: ${({ variant, theme }) =>
      theme.Toast[variant!].StyledToastDescription.StyledDescription.fontSize};
    line-height: ${({ variant, theme }) =>
      theme.Toast[variant!].StyledToastDescription.StyledDescription.lineHeight};
    letter-spacing: ${({ variant, theme }) =>
      theme.Toast[variant!].StyledToastDescription.StyledDescription.letterSpacing};
    font-weight: ${({ variant, theme }) =>
      theme.Toast[variant!].StyledToastDescription.StyledDescription.fontWeight};
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

export default StyledToastDescription;
