import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledRadio = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledRadio.display};
  justify-content: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledRadio.width};
  align-items: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledRadio.alignItems};
  gap: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledRadio.gap};
  width: ${({ variant, theme }) => theme.FormInputRadio[variant!].StyledRadio.width};
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

export default StyledRadio;
