import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Heading from '../../Heading/components/StyledHeading';

const StyledHeading = styled(Heading)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.color};


  background: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.background};
  -webkit-background-clip: text;
  background-clip: ${({ layoutVariant, theme }) =>
    theme.HeroSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.backgroundClip};
  
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
  }
`;

export default StyledHeading;
