import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.color};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
  }
`;

export default StyledHeading;
