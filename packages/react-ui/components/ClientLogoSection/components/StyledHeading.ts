import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.color};
  position: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.position};
  overflow: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.overflow};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.span.color};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.borderTop};
    }
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.borderTop};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.borderTop};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.borderTop};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    text-align: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.textAlign};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.borderTop};
    }
  }
`;

export default StyledHeading;
