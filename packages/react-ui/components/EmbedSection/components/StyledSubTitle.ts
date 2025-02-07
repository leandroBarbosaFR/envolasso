import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledSubTitle = styled(StyledHeading)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.color};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.margin};
  }
`;

export default StyledSubTitle;
