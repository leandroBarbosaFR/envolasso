import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledPageHeaderGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.position};
  display: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.mobile.rowGap : '0'};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.widescreen.rowGap : '0'};
  }
`;
export default StyledPageHeaderGrid;
