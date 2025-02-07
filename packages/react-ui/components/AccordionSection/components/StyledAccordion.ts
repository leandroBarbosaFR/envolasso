import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledAccordion = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordion.mobile.gridColumn};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordion.mobileLarge.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordion.tablet.gridColumn};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordion.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordion.widescreen.gridColumn};
  }
`;

export default StyledAccordion;
