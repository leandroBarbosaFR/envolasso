import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticle from '../../Article/components/StyledArticle';

const StyledAccordionItemBodyWrap = styled(StyledArticle)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.color};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.widescreen.margin};
  }
`;

export default StyledAccordionItemBodyWrap;
