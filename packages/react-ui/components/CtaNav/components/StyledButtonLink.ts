import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledButtonLink = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ variant = 'default', theme }) =>
      theme.CtaNav[variant]?.StyledButtonLink?.mobile?.gridColumn ||
      theme.CtaNav['default']?.StyledButtonLink?.mobile?.gridColumn};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ variant = 'default', theme }) =>
      theme.CtaNav[variant]?.StyledButtonLink?.mobileLarge?.gridColumn ||
      theme.CtaNav['default']?.StyledButtonLink?.mobileLarge?.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ variant = 'default', theme }) =>
      theme.CtaNav[variant]?.StyledButtonLink?.tablet?.gridColumn ||
      theme.CtaNav['default']?.StyledButtonLink?.tablet?.gridColumn};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ variant = 'default', theme }) =>
      theme.CtaNav[variant]?.StyledButtonLink?.desktop?.gridColumn ||
      theme.CtaNav['default']?.StyledButtonLink?.desktop?.gridColumn};
  }

  // ==========================================================================
  // Widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ variant = 'default', theme }) =>
      theme.CtaNav[variant]?.StyledButtonLink?.widescreen?.gridColumn ||
      theme.CtaNav['default']?.StyledButtonLink?.widescreen?.gridColumn};
  }
`;

export default StyledButtonLink;
