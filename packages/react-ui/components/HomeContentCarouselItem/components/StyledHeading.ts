import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.widescreen.padding};
  }
`;

export default StyledHeading;
