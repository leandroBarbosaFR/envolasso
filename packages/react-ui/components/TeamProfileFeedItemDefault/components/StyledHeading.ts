import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.color};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
  }
`;
export default StyledHeading;
