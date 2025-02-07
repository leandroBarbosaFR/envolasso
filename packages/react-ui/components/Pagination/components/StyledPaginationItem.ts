import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledPaginationItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationItem.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledPaginationItem.justifyContent};
  align-items: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledPaginationItem.alignItems};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationItem.mobile.gap};
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.mobile.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.mobile.width};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.mobileLarge.gap};
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.mobileLarge.width};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationItem.tablet.gap};
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.tablet.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.tablet.width};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationItem.desktop.gap};
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.desktop.width};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.widescreen.gap};
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationItem.widescreen.width};
  }
`;

export default StyledPaginationItem;
