import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledIconButton = styled.button<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  all: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.all};
  cursor: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.cursor};
  display: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.display};
  padding: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.padding};
  margin: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.margin};
  border: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.Pagination[layoutVariant!].StyledIconButton.borderRadius};
  background: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.background};
  svg {
    transition: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.svg.transition};
    fill: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.svg.fill};
  }

  &:hover {
    opacity: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.hover.svg.opacity};
    svg {
      fill: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.hover.svg.fill};
    }
  }

  &:disabled {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.disabled.pointerEvents};
    svg {
      opacity: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.disabled.svg.opacity};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.mobile.width};
    svg {
      height: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.mobile.svg.height};
      width: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.mobile.svg.width};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.mobileLarge.width};
    svg {
      height: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.mobileLarge.svg.height};
      width: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.mobileLarge.svg.width};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.tablet.width};
    svg {
      height: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.tablet.svg.height};
      width: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.tablet.svg.width};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.desktop.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledIconButton.desktop.width};
    svg {
      height: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.desktop.svg.height};
      width: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.desktop.svg.width};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.Pagination[layoutVariant!].StyledIconButton.widescreen.width};
    svg {
      height: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.widescreen.svg.height};
      width: ${({ layoutVariant, theme }) =>
        theme.Pagination[layoutVariant!].StyledIconButton.widescreen.svg.width};
    }
  }
`;

export default StyledIconButton;
