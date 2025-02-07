import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledToastList = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.Toast[layoutVariant!].StyledToastList.zIndex};
  position: ${({ layoutVariant, theme }) => theme.Toast[layoutVariant!].StyledToastList.position};
  bottom: ${({ layoutVariant, theme }) => theme.Toast[layoutVariant!].StyledToastList.bottom};
  right: ${({ layoutVariant, theme }) => theme.Toast[layoutVariant!].StyledToastList.right};

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

export default StyledToastList;
