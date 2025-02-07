import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledSubTitleItem = styled(StyledHeading)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.color};
  text-align: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.textAlign};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.mobile.textAlign};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.widescreen.textAlign};
  }
`;

export default StyledSubTitleItem;
