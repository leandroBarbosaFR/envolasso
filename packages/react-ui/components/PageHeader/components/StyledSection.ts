import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.display};
  flex-direction: ${({ layoutVariant, theme }) =>
    theme.PageHeader[layoutVariant!].StyledSection.flexDirection};
  flex-wrap: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.flexWrap};
  align-content: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.alignContent};
  background: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.background};
  display: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.display};
  align-items: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.alignItems};
  overflow: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.overflow};
  position: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.position};
  border-radius: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.borderRadius};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.mobile.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobile.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobile.maxHeight};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobileLarge.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobileLarge.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobileLarge.maxHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.tablet.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.tablet.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.tablet.maxHeight};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.desktop.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.desktop.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.desktop.maxHeight};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.widescreen.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.widescreen.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.widescreen.maxHeight};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledSection.widescreen.padding};
  }
`;
export default StyledSection;
