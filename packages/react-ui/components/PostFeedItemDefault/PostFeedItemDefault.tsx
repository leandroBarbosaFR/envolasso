import { PostFeedItemDefaultTheme } from '@agency-platform/themes';
import { Media } from '@agency-platform/shared-types';
import React from 'react';
import { PortableText } from '@portabletext/react';
import useTruncate from '../../hooks/useTruncate';
import CustomPortableText from '../../utils/portableText';
// Theme
import { useTheme } from 'styled-components';
// Components
import ButtonLink from '../ButtonLink';
import { ImageTag } from '../ImageTag';
import ColoredText from '../ColoredText';
// Styles
import StyledBottomWrapper from './components/StyledBottomWrapper';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledFeedInner from './components/StyledFeedInner';
import StyledFeedItem from './components/StyledFeedItem';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledImage from './components/StyledImage';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledArticle from './components/StyledArticle';
import { transform } from 'next/dist/build/swc';

export interface PostFeedItemDefaultProps {
  layoutVariant: keyof PostFeedItemDefaultTheme;
  title: string;
  slug: { current: string };
  excerpt: string;
  featureImage: Media;
  dynamicRoute: string;
  isHorizontalFeed?: boolean;
  createdAt?: string;
  price?: string;
  body: any;
  subtitle?: string;
}

const PostFeedItemDefault = ({
  layoutVariant,
  title,
  excerpt,
  featureImage,
  slug,
  dynamicRoute,
  isHorizontalFeed,
  price,
  body,
  subtitle
}: PostFeedItemDefaultProps) => {
  const theme = useTheme();

  const imageSrc = featureImage?.asset?.url;
  const blurDataURL = featureImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  return (
    <StyledFeedItem layoutVariant={layoutVariant} isHorizontalFeed={isHorizontalFeed}>
      {imageSrc ? (
        <StyledImage layoutVariant={layoutVariant} href={`/${dynamicRoute}${slug?.current}`}>
          <ImageTag
            layoutVariant={theme.PostFeedItemDefault[layoutVariant!].StyledImage.ImageTag.layoutVariant}
            src={imageSrc}
            fallbackImgSrc={fallbackImgSrc}
            blurDataURL={blurDataURL}
            alt={featureImage?.alt}
            caption={featureImage?.caption}
            width={theme.PostFeedItemDefault[layoutVariant!].StyledImage.ImageTag.width}
            height={theme.PostFeedItemDefault[layoutVariant!].StyledImage.ImageTag.height}
            cropWidth={theme.PostFeedItemDefault[layoutVariant!].StyledImage.ImageTag.cropWidth}
            cropHeight={theme.PostFeedItemDefault[layoutVariant!].StyledImage.ImageTag.cropHeight}
            fit={theme.PostFeedItemDefault[layoutVariant!].StyledImage.ImageTag.fit}
            priority={false}
            fill={false}
            // placeholder={'blur'}
          />
        </StyledImage>
      ) : null}
      <StyledFeedInner layoutVariant={layoutVariant}>
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PostFeedItemDefault[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PostFeedItemDefault[layoutVariant!].StyledGrid.withColGapp}
        >
          {title && (
            <StyledHeadingWrap href={`/${dynamicRoute}${slug?.current}`} layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h2'}
                variant={theme.PostFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                layoutVariant={layoutVariant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PostFeedItemDefault[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {subtitle && (
            <StyledExcerptWrap layoutVariant={layoutVariant}>
              <StyledExcerpt
                variant={theme.PostFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant}
                layoutVariant={layoutVariant}
              >
                <p>{subtitle}</p>
              </StyledExcerpt>
            </StyledExcerptWrap>
          )}
          <StyledBottomWrapper
            layoutVariant={layoutVariant}
            style={{
              flexDirection: `column`
            }}
          >
            {price && (
              <StyledSubTitleWrap layoutVariant={layoutVariant}>
                <StyledSubTitle
                  as={'h2'}
                  layoutVariant={layoutVariant}
                  variant={
                    theme.PostFeedItemDefault[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant
                  }
                >
                  <ColoredText text={price} />
                </StyledSubTitle>
              </StyledSubTitleWrap>
            )}
            {/* {slug && (
              <StyledCtaNavWrap layoutVariant={layoutVariant}>
                <ButtonLink
                  // href={`/${dynamicRoute}${slug?.current}`} // This is the original code
                  href={`https://calendly.com/hello1367studio/30min`}
                  variant={theme.PostFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.variant}
                  withIcon={true}
                  iconPosition="left"
                  iconName="calendarIcon"
                  target="_blank"
                >
                  {theme.PostFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.text}
                </ButtonLink>
              </StyledCtaNavWrap>
            )} */}
          </StyledBottomWrapper>
          {/* {slug && (
            <StyledCtaNavWrap
              layoutVariant={layoutVariant}
              style={{
                position: 'absolute',
                bottom: '15px',
                margin: '0 auto',
                transform: 'translate(15px)',
                padding: '0 15px',
                right: '15px',
                width: '100%'
              }}
            >
              <ButtonLink
                // href={`/${dynamicRoute}${slug?.current}`} // This is the original code
                href={`https://calendly.com/hello1367studio/30min`}
                variant={theme.PostFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.variant}
                withIcon={true}
                iconPosition="left"
                iconName="calendarIcon"
                target="_blank"
              >
                {theme.PostFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.text}
              </ButtonLink>
            </StyledCtaNavWrap>
          )} */}
        </StyledGrid>
      </StyledFeedInner>
    </StyledFeedItem>
  );
};

export default PostFeedItemDefault;
