import React from 'react';
import { CtaNavSectionTheme } from '@agency-platform/themes';
import { Cta } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import CtaNav from '../CtaNav';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledSection from './components/StyledSection';

export interface CtaNavSectionProps {
  layoutVariant: keyof CtaNavSectionTheme;
  ctaTitle: string;
  cta: Cta[];
  description?: string;
}

const CtaNavSection = ({ layoutVariant, ctaTitle, cta, description }: CtaNavSectionProps) => {
  const theme = useTheme();

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        isFluid={theme.CtaNavSection[layoutVariant!].StyledContainer.isFluid}
        layoutVariant={layoutVariant}
      >
        <StyledGrid
          withRowGap={theme.CtaNavSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.CtaNavSection[layoutVariant!].StyledGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          <StyledCtaNavWrap layoutVariant={layoutVariant}>
            <CtaNav
              variant={theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.CtaNav.variant}
              ctaTitle={ctaTitle}
              data={cta}
              allowActiveButton={true}
            />
          </StyledCtaNavWrap>

          {description && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.CtaNavSection[layoutVariant!].StyledArticle.variant}
            >
              <p>{description}</p>
            </StyledArticle>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default CtaNavSection;
