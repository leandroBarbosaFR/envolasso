import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledInput = styled.input<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  /* Hide the browser's default checkbox */
  position: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledInput.position};
  opacity: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledInput.opacity};
  cursor: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledInput.cursor};
  height: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledInput.height};
  width: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledInput.width};

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

export default StyledInput;
