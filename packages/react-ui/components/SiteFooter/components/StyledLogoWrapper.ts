import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledLogoWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledLogoWrapper.display};
  align-items: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledLogoWrapper.alignItems};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.SiteFooter[layoutVariant!].StyledLogoWrapper.justifyContent};
  position: ${({ layoutVariant, theme }) => theme.SiteFooter[layoutVariant!].StyledLogoWrapper.position};

  position: absolute;

  right: 50%;
  transform: translate(50%);
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledLogoWrap.mobile.gridColumn};
    bottom: -42px;
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    bottom: -62px;
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    bottom: -200px;
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledLogoWrapper;
