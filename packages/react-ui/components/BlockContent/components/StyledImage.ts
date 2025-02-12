import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.overflow};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.mobile.gridRow};
    height: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.mobile.height};
    max-width: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobile.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobile.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobile.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobile.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobile.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.gridRow};
    height: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.height};
    max-width: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.tablet.gridRow};
    max-width: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.tablet.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.tablet.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.tablet.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.tablet.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.tablet.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.desktop.gridRow};
    max-width: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.desktop.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.desktop.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.desktop.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.desktop.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.desktop.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.gridRow};
    height: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.widescreen.height};
    max-width: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.maxWidth};
    border-top-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.borderTopLeftRadius};
    border-top-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.borderTopRightRadius};
    border-bottom-left-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.borderBottomLeftRadius};
    border-bottom-right-radius: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.borderBottomRightRadius};
    margin: ${({ layoutVariant, theme }) => theme.BlockContent[layoutVariant!].StyledImage.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlockContent[layoutVariant!].StyledImage.widescreen.padding};
  }
`;
export default StyledImage;
