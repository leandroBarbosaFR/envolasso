import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSection = styled.section<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ theme }) => theme.section.background};
  overflow: ${({ theme }) => theme.section.overflow};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ theme }) => theme.section.mobile.height};
    margin: ${({ theme }) => theme.section.mobile.margin};
    padding: ${({ theme }) => theme.section.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ theme }) => theme.section.mobileLarge.height};
    margin: ${({ theme }) => theme.section.mobileLarge.margin};
    padding: ${({ theme }) => theme.section.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ theme }) => theme.section.tablet.height};
    margin: ${({ theme }) => theme.section.tablet.margin};
    padding: ${({ theme }) => theme.section.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ theme }) => theme.section.desktop.height};
    margin: ${({ theme }) => theme.section.desktop.margin};
    padding: ${({ theme }) => theme.section.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ theme }) => theme.section.widescreen.height};
    margin: ${({ theme }) => theme.section.widescreen.margin};
    padding: ${({ theme }) => theme.section.widescreen.padding};
  }
`;
export default StyledSection;
