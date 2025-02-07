import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledSubTitle = styled(StyledHeading)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.color};

  background: ${({ layoutVariant, theme }) =>
    theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.background};
  -webkit-background-clip: text;
  background-clip: ${({ layoutVariant, theme }) =>
    theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.backgroundClip};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.margin};
  }
`;

export default StyledSubTitle;
