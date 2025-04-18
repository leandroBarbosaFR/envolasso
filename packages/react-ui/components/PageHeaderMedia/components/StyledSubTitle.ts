import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledSubTitle = styled(StyledHeading)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.span.color};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.span.borderBottom};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.margin};
  }
`;

export default StyledSubTitle;
