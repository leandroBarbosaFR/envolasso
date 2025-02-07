import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledContent = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.overflow};
  width: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.width};
  height: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.height};
  position: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.position};
  padding: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.padding};
  background: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.background};
  border-radius: ${({ variant, theme }) => theme.Toast[variant!].StyledContent.borderRadius};

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

export default StyledContent;
