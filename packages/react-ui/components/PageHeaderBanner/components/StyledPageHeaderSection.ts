import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSection from '../../Section/components/StyledSection';

const StyledPageHeaderSection = styled(StyledSection)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.background};
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.position};

  // ==========================================================================
  // Mobile 220px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobile.minHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large 270px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobileLarge.minHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.mobileLarge.padding};
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.tablet.minHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.tablet.padding};
  }
  // ==========================================================================
  // Desktop 300px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.desktop.minHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.desktop.padding};
  }
  // ==========================================================================
  // widescreen 350px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.widescreen.minHeight};
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderSection.widescreen.padding};
  }
`;
export default StyledPageHeaderSection;
