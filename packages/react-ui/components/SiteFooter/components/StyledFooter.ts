import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFooter = styled.footer<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].overflow};
  background-color: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].background};
  color: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].color};
  position: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].position};
  z-index: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].zIndex};
  top: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].top};
  bottom: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].bottom};
  left: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].left};
  right: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].right};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].mobile.height};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].mobileLarge.height};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].tablet.height};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].desktop.height};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].widescreen.height};
    margin: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].widescreen.margin};
    padding: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].widescreen.padding};
  }
`;

export default StyledFooter;
