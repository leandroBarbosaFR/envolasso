import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGridNested = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.ClientLogoSection[layoutVariant!].StyledGridNested.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledGridNested.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobile.gridTemplateColumns};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.mobile.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobile.rowGap : '0'};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobileLarge.gridTemplateColumns};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.tablet.gridTemplateColumns};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.tablet.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.desktop.gridTemplateColumns};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.desktop.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-template-columns: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.widescreen.gridTemplateColumns};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.widescreen.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledGridNested.widescreen.height};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.mobile.gridRow};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.ClientLogoSection[layoutVariant!].StyledGridNested.widescreen.rowGap : '0'};
  }
`;

export default StyledGridNested;
