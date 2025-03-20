/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from 'react';
import type { PortfolioFeedSectionTheme } from '@agency-platform/themes';
import type { Portfolio, Cta } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// Theme
import { useTheme } from 'styled-components';
// Components
import DefaultFeed from '../DefaultFeed';
import HorizontalFeed from '../HorizontalFeed';
import ColoredText from '../ColoredText';
import CustomPortableText from '../../utils/portableText';
import ButtonLink from '../ButtonLink';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledFeedWrap from './components/StyledFeedWrap';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledArticle from './components/StyledArticle';

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';

export interface PortfolioFeedSectionProps {
  data: {
    layoutVariant: keyof PortfolioFeedSectionTheme;
    category: {
      title: string;
      subtitle: string;
      slug: string;
      dynamicRoute: string;
      body: any;
    };
    title: string;
    subtitle: string;
    feedStyle: string;
    portfolios: Portfolio[];
    cta: Cta[];
    body: any;
  };
}
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PortfolioFeedSection = ({ data }: PortfolioFeedSectionProps) => {
  if (!data?.portfolios) return null;
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { layoutVariant, feedStyle, category, title, subtitle, cta, portfolios, body } = data;
  const isCategoryTitleVisible = theme.PortfolioFeedSection[layoutVariant!].config.isCategoryTitleVisible;
  const isCategorySubtitleVisible =
    theme.PortfolioFeedSection[layoutVariant!].config.isCategorySubtitleVisible;
  const subtitleRef = useRef(null);
  const [isSubtitleCompleted, setIsSubtitleCompleted] = useState(false);

  const isMobile = width <= theme.breakpoints.mobileLarge;

  const renderFeed = () => {
    switch (feedStyle) {
      case 'grid':
        return (
          <DefaultFeed
            type={'portfolioFeed'}
            layoutVariant={
              theme.PortfolioFeedSection[layoutVariant!].StyledFeedWrap.DefaultFeed.layoutVariant
            }
            data={portfolios}
            feedItemComponent={
              theme.PortfolioFeedSection[layoutVariant!].StyledFeedWrap.DefaultFeed.feedItemComponent
            }
          />
        );
      case 'carousel':
        return (
          <HorizontalFeed
            type={'portfolioFeed'}
            layoutVariant={
              theme.PortfolioFeedSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.layoutVariant
            }
            data={portfolios}
            feedItemComponent={
              theme.PortfolioFeedSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.feedItemComponent
            }
            withArrowButton={
              portfolios.length > 6 && // Only show arrow if there are more than 6 items
              theme.PortfolioFeedSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.withArrowButton
            }
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { x: -200, opacity: 0 }, // Start position off-screen to the left
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%', // Start animation when 80% of the viewport hits the top of the element
            toggleActions: 'play none none reverse' // Play animation on scroll down, reverse on scroll up
          },
          onComplete: () => setIsSubtitleCompleted(true) // Set state when animation completes
        }
      );
    }
  }, []);

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PortfolioFeedSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PortfolioFeedSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PortfolioFeedSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {(category?.subtitle || subtitle) && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.PortfolioFeedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
                ref={subtitleRef} // Add ref to StyledSubTitle
              >
                <ColoredText
                  text={isCategorySubtitleVisible && category?.subtitle ? category?.subtitle : subtitle}
                />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {(category?.title || title) && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.PortfolioFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={isCategoryTitleVisible && category?.title ? category?.title : title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {isSubtitleCompleted && body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PortfolioFeedSection[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/portfolios/page/all/1/latest`}
                title={'Voir toutes les activités'}
                variant={'buttonPrimary'}
                withText={true}
                withIcon={false}
                iconPosition={'left'}
                iconName={'arrowLeft'}
              >
                <span>Voir toutes les activités</span>
              </ButtonLink>
            </StyledCtaNavWrap>
          )}
          <StyledFeedWrap layoutVariant={layoutVariant}>{renderFeed()}</StyledFeedWrap>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PortfolioFeedSection;
