import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledBackButton = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  justify-self: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.justifySelf};
  align-self: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.alignSelf};
  span {
    color: #0f0f0f;
    font-size: 18px;
    line-height: 22px;
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledBackButton.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledBackButton.widescreen.padding};
  }
`;
export default StyledBackButton;
