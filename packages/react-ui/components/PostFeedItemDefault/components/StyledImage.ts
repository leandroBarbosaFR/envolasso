import Link from 'next/link';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredButtonLink = WithFilteredProps(Link);

const StyledImage = styled(FilteredButtonLink)`
  // ==========================================================================
  // Global
  // ==========================================================================
  border-radius: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledImage.borderRadius};
  overflow: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledImage.overflow};

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
export default StyledImage;
