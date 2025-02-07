import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledPaginationBtn = styled.button<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  all: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.all};
  cursor: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.cursor};
  text-align: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.textAlign};
  display: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.display};
  padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.padding};
  margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.margin};
  border: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledPaginationBtn.borderRadius};
  color: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.color};
  background: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledPaginationBtn.background};
  transition: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledPaginationBtn.transition};

  ${({ active, layoutVariant, theme }) =>
    active &&
    css`
      color: ${theme.Pagination[layoutVariant!].StyledPaginationBtn.active.color};
      background: ${theme.Pagination[layoutVariant!].StyledPaginationBtn.active.background};
      border: ${theme.Pagination[layoutVariant!].StyledPaginationBtn.active.border};
    `};

  /* Hover state  */
  &:hover {
    color: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.hover.color};
    background: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.hover.background};
    border: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.hover.border};
  }

  /* Disabled state  */
  &:disabled {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.disabled.pointerEvents};
    color: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.disabled.color};
    background: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.disabled.background};
    border: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.disabled.border};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.mobile.width};
    font-size: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobile.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobile.lineHeight};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobileLarge.width};
    font-size: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobileLarge.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.mobileLarge.lineHeight};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledPaginationBtn.tablet.width};
    font-size: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.tablet.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.tablet.lineHeight};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.desktop.width};
    font-size: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.desktop.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.desktop.lineHeight};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.widescreen.width};
    font-size: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.widescreen.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledPaginationBtn.widescreen.lineHeight};
  }
`;

export default StyledPaginationBtn;
