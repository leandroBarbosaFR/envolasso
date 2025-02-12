import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.color};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
  }
`;

export default StyledHeading;
