import React from 'react';
import type { TeamProfileFeedSectionTheme } from '@agency-platform/themes';
import type { Cta, TeamProfile } from '@agency-platform/shared-types';
import { useTheme } from 'styled-components';
// Components
import TeamProfileFeedItem from '../TeamProfileFeedItem';
import ColoredText from '../ColoredText';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledFeedGrid from './components/StyledFeedGrid';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
// Props
export interface TeamProfileFeedSectionProps {
  data: {
    layoutVariant: keyof TeamProfileFeedSectionTheme;
    title: string;
    subtitle: string;
    ctaTitle: string;
    profiles: TeamProfile[];
    cta: Cta[];
  };
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const TeamProfileFeedSection = ({
  data,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: TeamProfileFeedSectionProps) => {
  if (!data?.profiles) return null;
  const theme = useTheme();
  const { layoutVariant, subtitle, title, cta, profiles } = data;

  const renderTeam = () =>
    profiles &&
    profiles?.map((profile, index) => {
      const { title, position, excerpt, body, featureImage, contactLinks, featureImageEffect } = profile;

      return (
        <TeamProfileFeedItem
          key={index}
          layoutVariant={'alterntive'}
          title={title}
          position={position}
          excerpt={excerpt}
          featureImage={featureImage}
          contactLinks={contactLinks}
          featureImageEffect={featureImageEffect}
        />
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.TeamProfileFeedSection[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.TeamProfileFeedSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.TeamProfileFeedSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                layoutVariant={layoutVariant}
                variant={
                  theme.TeamProfileFeedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant
                }
                as="h3"
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                variant={theme.TeamProfileFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                as="h2"
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.TeamProfileFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                data={cta}
              />
            </StyledCtaNavWrap>
          )}
          <StyledFeedGrid
            layoutVariant={layoutVariant}
            withRowGap={theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.withRowGap}
            withColGapp={theme.TeamProfileFeedSection[layoutVariant!].StyledFeedGrid.withColGapp}
            variant={'default'}
          >
            {renderTeam()}
          </StyledFeedGrid>
        </StyledGrid>
        {ContainerBgBottomAsset && ContainerBgBottomAsset}
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledSection>
  );
};

export default TeamProfileFeedSection;
