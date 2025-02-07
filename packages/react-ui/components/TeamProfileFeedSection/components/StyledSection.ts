import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledSection.background};
  position: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledSection.position};
  clip-path: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledSection.clipPth};
  overflow: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedSection[layoutVariant!].StyledSection.overflow};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedSection[layoutVariant!].StyledSection.widescreen.padding};
  }
`;
export default StyledSection;
