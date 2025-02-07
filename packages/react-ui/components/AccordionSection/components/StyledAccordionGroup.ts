import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledAccordionGroup = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  height: ${({ layoutVariant, theme }) => theme.AccordionSection[layoutVariant!].StyledAccordionGroup.height};
  display: ${({ layoutVariant, theme }) =>
    theme.AccordionSection[layoutVariant!].StyledAccordionGroup.display};
  flex-wrap: ${({ layoutVariant, theme }) =>
    theme.AccordionSection[layoutVariant!].StyledAccordionGroup.flexWrap};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.mobile.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.mobile.margin};
    gap: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.tablet.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AccordionSection[layoutVariant!].StyledAccordionGroup.widescreen.gridColumn};
  }
`;

export default StyledAccordionGroup;
