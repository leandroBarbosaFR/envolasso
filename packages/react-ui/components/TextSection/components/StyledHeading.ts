import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.textAlign};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.textAlign};
  }
`;

export default StyledHeading;
