import React from 'react';
import { EmbedSectionTheme } from '@agency-platform/themes';
import type { EmbedServices } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
// Theme
import { useTheme } from 'styled-components';
// Components
import CustomPortableText from '../../utils/portableText';
import Embed from '../Embed';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledArticle from './components/StyledArticle';
import StyledMediaWrapper from './components/StyledMediaWrapper';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

// Props
export interface EmbedSectionProps {
  data: {
    layoutVariant: keyof EmbedSectionTheme;
    videUrl: string;
    title: string;
    body: any;
    subtitle: string;
    embedServices: EmbedServices;
  };
}

const EmbedSection = ({ data }: EmbedSectionProps) => {
  if (!data) return null;
  const theme = useTheme();
  const { layoutVariant, title, subtitle, body, embedServices } = data;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.EmbedSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.EmbedSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.EmbedSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h2'}
                layoutVariant={layoutVariant}
                variant={theme.EmbedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
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
                variant={theme.EmbedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.EmbedSection[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          <StyledMediaWrapper layoutVariant={layoutVariant}>
            <Embed embedServices={embedServices} layoutVariant={'default'} />
          </StyledMediaWrapper>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default EmbedSection;
