import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.color};
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background: linear-gradient(180deg, #ffffff 0%, #7a7a7a 106.75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  opacity: 1;
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
  }
`;

export default StyledHeading;
