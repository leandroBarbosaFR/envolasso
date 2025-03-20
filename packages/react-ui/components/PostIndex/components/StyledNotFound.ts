import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledNotFound = styled(StyledHeading)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostIndex[layoutVariant!].StyledNotFound.mobile.gridColumn};
    margin: ${({ layoutVariant, theme }) => theme.PostIndex[layoutVariant!].StyledNotFound.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostIndex[layoutVariant!].StyledNotFound.mobileLarge.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostIndex[layoutVariant!].StyledNotFound.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostIndex[layoutVariant!].StyledNotFound.tablet.gridColumn};
    margin: ${({ layoutVariant, theme }) => theme.PostIndex[layoutVariant!].StyledNotFound.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostIndex[layoutVariant!].StyledNotFound.desktop.gridColumn};
    margin: ${({ layoutVariant, theme }) => theme.PostIndex[layoutVariant!].StyledNotFound.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostIndex[layoutVariant!].StyledNotFound.widescreen.gridColumn};
    margin: ${({ layoutVariant, theme }) => theme.PostIndex[layoutVariant!].StyledNotFound.widescreen.margin};
  }
`;

export default StyledNotFound;
