import { ImageTagTheme } from '@agency-platform/themes';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// Components

// Styles
import StyledImgWrap from './components/StyledImgWrap';
import StyledImg from './components/StyledImg';
import StyledImgCaptionWrap from './components/StyledImgCaptionWrap';
import StyledImgCaption from './components/StyledImgCaption';

export interface ImageTagProps {
  layoutVariant: keyof ImageTagTheme;
  src?: string;
  fallbackImgSrc?: string;
  alt?: string;
  height?: number;
  width?: number;
  cropHeight?: number;
  cropWidth?: number;
  fit?: 'crop' | '' | string;
  sizes?: string;
  fill: boolean;
  quality?: number;
  priority: boolean;
  placeholder?: 'blur' | 'empty' | string;
  blurDataURL?: string;
  caption?: string;
}

const ImageTag = ({
  layoutVariant,
  src,
  fallbackImgSrc,
  alt,
  height,
  width,
  cropHeight,
  cropWidth,
  sizes,
  fill,
  quality,
  priority,
  placeholder,
  fit = '',
  caption,
  blurDataURL,
  ...props
}: ImageTagProps) => {
  if (!src) {
    src = fallbackImgSrc;
  }

  const theme = useTheme();
  const isSvg = src?.endsWith('.svg');

  // Crop Image
  const cropSrcHeight = cropHeight ? `?h=${cropHeight}${fit && `&fit=${fit}`}` : '';
  const cropSrcWidth = cropWidth
    ? cropHeight
      ? `&w=${cropWidth}${fit && `&fit=${fit}`}`
      : `?w=${cropWidth}${fit && `&fit=${fit}`}`
    : '';
  // Image src
  const cropSrc = isSvg ? `${src}` : `${src}${cropSrcHeight}${cropSrcWidth}`;

  return (
    <StyledImgWrap layoutVariant={layoutVariant}>
      <StyledImg
        layoutVariant={layoutVariant}
        src={cropSrc}
        alt={alt || 'image alt text'}
        width={width || undefined}
        height={height || undefined}
        sizes={sizes}
        fill={fill}
        quality={quality || 100}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={
          blurDataURL ||
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBgOAMAANEAzQTPJQkAAAAASUVORK5CYII='
        }
        {...props}
      />
      {caption && (
        <StyledImgCaptionWrap layoutVariant={layoutVariant}>
          <StyledImgCaption
            layoutVariant={layoutVariant}
            variant={theme.ImageTag[layoutVariant!].StyledImgCaption.variant}
          >
            {caption}
          </StyledImgCaption>
        </StyledImgCaptionWrap>
      )}
    </StyledImgWrap>
  );
};

export default ImageTag;
