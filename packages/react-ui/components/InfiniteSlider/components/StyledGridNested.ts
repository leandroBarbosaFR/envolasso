import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGridNested = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridNested.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledGridNested.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.rowGap : '0'};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridNested.mobileLarge.rowGap : '0'};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridNested.tablet.rowGap : '0'};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridNested.desktop.rowGap : '0'};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.height};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridNested.mobile.gridRow};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridNested.widescreen.rowGap : '0'};
  }
`;

export default StyledGridNested;
