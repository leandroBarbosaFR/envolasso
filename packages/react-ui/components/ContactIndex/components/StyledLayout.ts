import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLayout = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledLayout.mobile.gridColumn};
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
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledLayout.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledLayout.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledLayout.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledLayout.widescreen.margin};
  }
`;

export default StyledLayout;
