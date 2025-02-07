import React from 'react';
import { PortableText } from '@portabletext/react';
import { ClientLogoSectionTheme } from '@agency-platform/themes';
import { Media } from '@agency-platform/shared-types';
import Marquee from 'react-fast-marquee';
// Theme
import { useTheme } from 'styled-components';
// Components
import CustomPortableText from '../../utils/portableText';
import { ImageTag } from '../ImageTag';
import ColoredText from '../ColoredText';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledClientLogoItem from './components/StyledClientLogoItem';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';

import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledMarqueeWrapper from './components/StyledMarqueeWrapper';

// Props
export interface ClientLogoSectionProps {
  data: {
    layoutVariant: keyof ClientLogoSectionTheme;
    title: string;
    body: any;
    subtitle: string;
    clients: {
      layoutVariant: keyof ClientLogoSectionTheme;
      _type: string;
      _key: string;
      url: string;
      title: string;
      featureImage: Media;
    }[];
  };
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const ClientLogoSection = ({ data, SectionBgTopAsset, SectionBgBottomAsset }: ClientLogoSectionProps) => {
  if (!data) return null;
  const { layoutVariant, subtitle, title, body, clients } = data;
  const theme = useTheme();
  const renderClient = () =>
    clients &&
    clients.map((item, index) => {
      const { url, featureImage, title } = item;
      const imageSrc = featureImage?.asset?.url;
      const blurDataURL = featureImage?.asset?.metadata?.lqip;
      const fallbackImgSrc = '';

      return (
        <StyledClientLogoItem
          layoutVariant={layoutVariant}
          key={index}
          as={'a'}
          href={url}
          title={title}
          target={'_new'}
        >
          <ImageTag
            layoutVariant={
              theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.layoutVariant
            }
            src={imageSrc}
            fallbackImgSrc={fallbackImgSrc}
            blurDataURL={blurDataURL}
            alt={featureImage?.alt}
            caption={featureImage?.caption}
            width={theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.width}
            height={theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.height}
            cropWidth={theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.cropWidth}
            cropHeight={theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.cropHeight}
            fit={theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.fit}
            priority={false}
            fill={theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.ImageTag.fill}
            // placeholder={'blur'}
          />
        </StyledClientLogoItem>
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.ClientLogoSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.ClientLogoSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.ClientLogoSection[layoutVariant!].StyledGrid.withRowGap}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.ClientLogoSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.ClientLogoSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.ClientLogoSection[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          <StyledMarqueeWrapper>
            <Marquee
              pauseOnHover={true}
              gradientWidth={200}
              gradientColor={'none'}
              gradient={true}
              direction={'right'}
              speed={100}
              play={true}
            >
              {renderClient()}
            </Marquee>
          </StyledMarqueeWrapper>
          {/* <StyledMarqueeWrapper>
            <Marquee
              pauseOnHover={true}
              gradientWidth={200}
              gradientColor={'rgba(9, 9, 11, 1)'}
              gradient={true}
              direction={'left'}
              speed={150}
            >
              {renderClient()}
            </Marquee>
          </StyledMarqueeWrapper> */}
        </StyledGrid>
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledSection>
  );
};

export default ClientLogoSection;
