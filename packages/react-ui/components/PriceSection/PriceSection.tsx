import React from 'react';
import { EmbedSectionTheme } from '@agency-platform/themes';
import { PortableText } from '@portabletext/react';
// Theme
import { useTheme } from 'styled-components';
// Components
import CustomPortableText from '../../utils/portableText';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledArticle from './components/StyledArticle';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

// Props
export interface PriceSectionProps {
  data: {
    layoutVariant: keyof EmbedSectionTheme;
    title: string;
    body: any;
    subtitle: string;
  };
}

const PriceSection = ({ data }: PriceSectionProps) => {
  if (!data) return null;
  const theme = useTheme();
  const { layoutVariant, title, subtitle, body } = data;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PriceSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PriceSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PriceSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h2'}
                layoutVariant={layoutVariant}
                variant={theme.PriceSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                {subtitle}
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h1'}
                layoutVariant={layoutVariant}
                variant={theme.PriceSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PriceSection[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PriceSection;
