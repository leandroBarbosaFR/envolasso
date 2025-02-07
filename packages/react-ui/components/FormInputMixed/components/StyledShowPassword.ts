import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledShowPassword = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputPassword[variant!].StyledShowPassword.position};
  top: ${({ variant, theme }) => theme.FormInputPassword[variant!].StyledShowPassword.top};
  right: ${({ variant, theme }) => theme.FormInputPassword[variant!].StyledShowPassword.right};
  padding-right: ${({ variant, theme }) => theme.FormInputPassword[variant!].StyledShowPassword.paddingRight};

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

export default StyledShowPassword;
