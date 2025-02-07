import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledSubTitle = styled(StyledHeading)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.span.color};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.textAlign};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.textAlign};
  }
`;

export default StyledSubTitle;
