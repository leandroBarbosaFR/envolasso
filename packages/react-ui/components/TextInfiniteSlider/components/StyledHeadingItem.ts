import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeadingItem = styled(StyledHeadingBase)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.mobile.textAlign};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.widescreen.textAlign};
  }
`;

export default StyledHeadingItem;
