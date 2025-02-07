import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledPagination = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledPagination.justifyContent};
  align-items: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.alignItems};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPagination.widescreen.gap};
  }
`;

export default StyledPagination;
