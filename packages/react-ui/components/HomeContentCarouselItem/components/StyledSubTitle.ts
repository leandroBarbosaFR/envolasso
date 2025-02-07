import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledSubTitle = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  padding: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.padding};
  color: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.mobile.gridRow};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.mobileLarge.gridRow};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.tablet.gridRow};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.desktop.gridRow};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.widescreen.gridRow};
  }
`;

export default StyledSubTitle;
