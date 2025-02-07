import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSocialNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ variant, theme }) => theme.SocialNav[variant!].display};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: ${({ variant, theme }) => theme.SocialNav[variant!].mobile.flexDirection};
    justify-content: ${({ variant, theme }) => theme.SocialNav[variant!].mobile.justifyContent};
    gap: ${({ variant, theme }) => theme.SocialNav[variant!].mobile.gap};
    margin: ${({ variant, theme }) => theme.SocialNav[variant!].mobile.margin};
    padding: ${({ variant, theme }) => theme.SocialNav[variant!].mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    flex-direction: ${({ variant, theme }) => theme.SocialNav[variant!].mobileLarge.flexDirection};
    justify-content: ${({ variant, theme }) => theme.SocialNav[variant!].mobileLarge.justifyContent};
    gap: ${({ variant, theme }) => theme.SocialNav[variant!].mobileLarge.gap};
    margin: ${({ variant, theme }) => theme.SocialNav[variant!].mobileLarge.margin};
    padding: ${({ variant, theme }) => theme.SocialNav[variant!].mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: ${({ variant, theme }) => theme.SocialNav[variant!].tablet.flexDirection};
    justify-content: ${({ variant, theme }) => theme.SocialNav[variant!].tablet.justifyContent};
    gap: ${({ variant, theme }) => theme.SocialNav[variant!].tablet.gap};
    margin: ${({ variant, theme }) => theme.SocialNav[variant!].tablet.margin};
    padding: ${({ variant, theme }) => theme.SocialNav[variant!].tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: ${({ variant, theme }) => theme.SocialNav[variant!].desktop.flexDirection};
    justify-content: ${({ variant, theme }) => theme.SocialNav[variant!].desktop.justifyContent};
    gap: ${({ variant, theme }) => theme.SocialNav[variant!].desktop.gap};
    margin: ${({ variant, theme }) => theme.SocialNav[variant!].desktop.margin};
    padding: ${({ variant, theme }) => theme.SocialNav[variant!].desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    flex-direction: ${({ variant, theme }) => theme.SocialNav[variant!].widescreen.flexDirection};
    justify-content: ${({ variant, theme }) => theme.SocialNav[variant!].widescreen.justifyContent};
    gap: ${({ variant, theme }) => theme.SocialNav[variant!].widescreen.gap};
    margin: ${({ variant, theme }) => theme.SocialNav[variant!].widescreen.margin};
    padding: ${({ variant, theme }) => theme.SocialNav[variant!].widescreen.padding};
  }
`;

export default StyledSocialNav;
