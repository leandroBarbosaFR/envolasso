import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';

const StyledBlogFeedItem = styled('div')<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogIndex[layoutVariant!].StyledBlogFeedItem.mobile.gridColumn};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogIndex[layoutVariant!].StyledBlogFeedItem.mobileLarge.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogIndex[layoutVariant!].StyledBlogFeedItem.tablet.gridColumn};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogIndex[layoutVariant!].StyledBlogFeedItem.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogIndex[layoutVariant!].StyledBlogFeedItem.widescreen.gridColumn};
  }
`;

export default StyledBlogFeedItem;
