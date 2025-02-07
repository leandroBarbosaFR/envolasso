import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import CtaNav from '../../CtaNav';

const StyledCtaNavItem = styled(CtaNav)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.color};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.widescreen.margin};
  }
`;

export default StyledCtaNavItem;
