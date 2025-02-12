import React from 'react';
import { useTheme } from 'styled-components';
// Platform
import type { BlockContentTheme } from '@agency-platform/themes';
import type { Media } from '@agency-platform/shared-types';
// Local Components
import { ImageTag } from '../ImageTag';
// Styled Components
import StyledImage from './components/StyledImage';

interface Props {
  value: Media;
  layoutVariant: keyof BlockContentTheme;
}

export default function ImageSingle({ value, layoutVariant }: Props): JSX.Element | null {
  const theme = useTheme();
  if (!value) return null;

  const imageSrc = value?.asset?.url;
  const blurDataURL = value?.asset?.metadata?.lqip;
  const fallbackImgSrc =
    'https://cdn.sanity.io/images/6obn7k5u/corp-development/aa8ffb641e4997aef82fb270a7c8656bb8fc0296-1000x1000.jpg';
  const isImageBlur = value?.blur;

  return (
    <StyledImage layoutVariant={layoutVariant}>
      <ImageTag
        layoutVariant={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.layoutVariant}
        src={imageSrc}
        fallbackImgSrc={fallbackImgSrc}
        blurDataURL={blurDataURL}
        alt={value?.alt}
        caption={value?.caption}
        width={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.width}
        height={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.height}
        cropWidth={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.cropWidth}
        cropHeight={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.cropHeight}
        fit={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.fit}
        fill={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.fill}
        priority={theme.BlockContent[layoutVariant!].StyledImage.ImageTag.priority}
        placeholder={isImageBlur ? 'blur' : 'empty'}
      />
    </StyledImage>
  );
}
