import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.color};
  display: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.display};
  width: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.width};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) => theme.CtaNav[layoutVariant!].StyledHeading.widescreen.margin};
  }
`;

export default StyledHeading;
