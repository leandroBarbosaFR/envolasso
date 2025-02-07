import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant = 'default', theme }) =>
    theme.CtaNav[layoutVariant]?.StyledCtaNav?.display || theme.CtaNav['default'].StyledCtaNav.display};
  flex-wrap: ${({ layoutVariant = 'default', theme }) =>
    theme.CtaNav[layoutVariant]?.StyledCtaNav?.flexWrap || theme.CtaNav['default'].StyledCtaNav.flexWrap};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobile?.flexDirection ||
      theme.CtaNav['default'].StyledCtaNav.mobile.flexDirection};
    justify-content: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobile?.justifyContent ||
      theme.CtaNav['default'].StyledCtaNav.mobile.justifyContent};
    gap: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobile?.gap ||
      theme.CtaNav['default'].StyledCtaNav.mobile.gap};
    margin: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobile?.margin ||
      theme.CtaNav['default'].StyledCtaNav.mobile.margin};
    padding: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobile?.padding ||
      theme.CtaNav['default'].StyledCtaNav.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    flex-direction: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobileLarge?.flexDirection ||
      theme.CtaNav['default'].StyledCtaNav.mobileLarge.flexDirection};
    justify-content: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobileLarge?.justifyContent ||
      theme.CtaNav['default'].StyledCtaNav.mobileLarge.justifyContent};
    gap: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobileLarge?.gap ||
      theme.CtaNav['default'].StyledCtaNav.mobileLarge.gap};
    margin: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobileLarge?.margin ||
      theme.CtaNav['default'].StyledCtaNav.mobileLarge.margin};
    padding: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.mobileLarge?.padding ||
      theme.CtaNav['default'].StyledCtaNav.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.tablet?.flexDirection ||
      theme.CtaNav['default'].StyledCtaNav.tablet.flexDirection};
    justify-content: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.tablet?.justifyContent ||
      theme.CtaNav['default'].StyledCtaNav.tablet.justifyContent};
    gap: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.tablet?.gap ||
      theme.CtaNav['default'].StyledCtaNav.tablet.gap};
    margin: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.tablet?.margin ||
      theme.CtaNav['default'].StyledCtaNav.tablet.margin};
    padding: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.tablet?.padding ||
      theme.CtaNav['default'].StyledCtaNav.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.desktop?.flexDirection ||
      theme.CtaNav['default'].StyledCtaNav.desktop.flexDirection};
    justify-content: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.desktop?.justifyContent ||
      theme.CtaNav['default'].StyledCtaNav.desktop.justifyContent};
    gap: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.desktop?.gap ||
      theme.CtaNav['default'].StyledCtaNav.desktop.gap};
    margin: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.desktop?.margin ||
      theme.CtaNav['default'].StyledCtaNav.desktop.margin};
    padding: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.desktop?.padding ||
      theme.CtaNav['default'].StyledCtaNav.desktop.padding};
  }

  // ==========================================================================
  // Widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    flex-direction: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.widescreen?.flexDirection ||
      theme.CtaNav['default'].StyledCtaNav.widescreen.flexDirection};
    justify-content: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.widescreen?.justifyContent ||
      theme.CtaNav['default'].StyledCtaNav.widescreen.justifyContent};
    gap: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.widescreen?.gap ||
      theme.CtaNav['default'].StyledCtaNav.widescreen.gap};
    margin: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.widescreen?.margin ||
      theme.CtaNav['default'].StyledCtaNav.widescreen.margin};
    padding: ${({ layoutVariant = 'default', theme }) =>
      theme.CtaNav[layoutVariant]?.StyledCtaNav?.widescreen?.padding ||
      theme.CtaNav['default'].StyledCtaNav.widescreen.padding};
  }
`;

export default StyledCtaNav;
