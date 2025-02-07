import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ theme, layoutVariant }) =>
    theme.TextSectionAside[layoutVariant!].StyledSection.background};
  position: ${({ layoutVariant, theme }) => theme.TextSectionAside[layoutVariant!].StyledSection.position};
  // ==========================================================================
  // Mobile 220px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large 270px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.mobileLarge.padding};
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.tablet.padding};
  }
  // ==========================================================================
  // Desktop 300px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.desktop.padding};
  }
  // ==========================================================================
  // widescreen 350px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.TextSectionAside[layoutVariant!].StyledSection.widescreen.padding};
  }
`;
export default StyledSection;
