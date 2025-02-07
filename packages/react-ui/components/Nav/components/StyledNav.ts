import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].display};
  background: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.width};
    justify-content: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.justifyContent};
    flex-wrap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.flexWrap};
    gap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.gap};
    margin: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.padding};
    flex-direction: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobile.flexDirection};
    /* align-content: flex-end; */
  }
  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    width: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.width};
    justify-content: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.justifyContent};
    flex-wrap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.flexWrap};
    gap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.gap};
    margin: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.padding};
    flex-direction: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].mobileLarge.flexDirection};
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    width: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.width};
    justify-content: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.justifyContent};
    flex-wrap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.flexWrap};
    gap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.gap};
    margin: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.padding};
    flex-direction: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].tablet.flexDirection};
  }
  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    width: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.width};
    justify-content: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.justifyContent};
    flex-wrap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.flexWrap};
    gap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.gap};
    margin: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.padding};
    flex-direction: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].desktop.flexDirection};
  }
  // ==========================================================================
  // Widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    width: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.width};
    justify-content: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.justifyContent};
    flex-wrap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.flexWrap};
    gap: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.gap};
    margin: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.margin};
    padding: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.padding};
    flex-direction: ${({ layoutVariant, theme }) => theme.Nav[layoutVariant!].widescreen.flexDirection};
  }
`;

export default StyledNav;
