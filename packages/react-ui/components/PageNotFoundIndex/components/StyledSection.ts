import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledSection.position};
  background: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledSection.background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledSection.widescreen.padding};
  }
`;

export default StyledSection;
