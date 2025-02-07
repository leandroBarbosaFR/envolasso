import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledNotFound = styled(StyledHeading)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  margin: ${({ layoutVariant, theme }) => theme.BlogIndex[layoutVariant!].StyledNotFound.margin};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogIndex[layoutVariant!].StyledNotFound.mobile.gridColumn};
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

export default StyledNotFound;
