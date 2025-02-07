import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledImage.justifyContent};
  align-content: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledImage.alignContent};

  border: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledImage.borderRadius};
  overflow: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.overflow};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.mobile.padding};
    height: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.mobile.height};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobileLarge.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.mobileLarge.height};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.tablet.padding};
    height: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.tablet.height};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.desktop.padding};
    height: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledImage.desktop.height};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.widescreen.padding};
    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledImage.widescreen.height};
  }
`;
export default StyledImage;
