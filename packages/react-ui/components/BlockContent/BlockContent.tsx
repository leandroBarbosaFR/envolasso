import React from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { PortableText } from '@portabletext/react';
import { Cta, Media } from '@agency-platform/shared-types';
import type { BlockContentTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components
import ButtonLink from '../ButtonLink';
import ImageSingle from './ImageSingle';

interface Props {
  value: PortableTextBlock;
  layoutVariant: keyof BlockContentTheme;
}

interface CtaProps {
  value: Cta;
  layoutVariant: keyof BlockContentTheme;
}

function CtaNav({ value, layoutVariant }: CtaProps) {
  const theme = useTheme();

  const renderCta = () => {
    const { _key, _type, url, title, content } = value;

    switch (_type) {
      case 'common.internalLink':
        return (
          <ButtonLink
            key={_key}
            href={`/${content?.dynamicRoute ? content?.dynamicRoute : ''}${
              content?.slug?.current ? content?.slug?.current : ''
            }`}
            variant={theme.CtaNav[layoutVariant!].Button.buttonVariant}
            title={title}
            withIcon={theme.CtaNav[layoutVariant!].Button.withIcon}
            withText={theme.CtaNav[layoutVariant!].Button.withText}
            iconName={theme.CtaNav[layoutVariant!].Button.iconName}
            iconPosition={theme.CtaNav[layoutVariant!].Button.iconPosition}
          >
            {title}
          </ButtonLink>
        );
      case 'common.externalLink':
        return (
          <ButtonLink
            key={_key}
            href={url}
            variant={theme.CtaNav[layoutVariant!].Button.buttonVariant}
            title={title}
            withIcon={theme.CtaNav[layoutVariant!].Button.withIcon}
            withText={theme.CtaNav[layoutVariant!].Button.withText}
            iconName={theme.CtaNav[layoutVariant!].Button.iconName}
            iconPosition={theme.CtaNav[layoutVariant!].Button.iconPosition}
            target={'_blank'}
          >
            {title}
          </ButtonLink>
        );
    }
  };

  return <>{renderCta()}</>;
}

export default function BlockContent({ value, layoutVariant }: Props): JSX.Element | null {
  const theme = useTheme();

  if (!value) return null;

  const serializers = {
    types: {
      'common.htmlField': ({ value }: any) => {
        const { myCodeField } = value;
        return <div dangerouslySetInnerHTML={{ __html: myCodeField.code }} style={{ overflow: 'scroll' }} />;
      },
      'common.bodyImage': ({ value }: { value: Media }) => {
        return <ImageSingle layoutVariant={layoutVariant} value={value} />;
      },
      'common.internalLink': ({ value }: { value: Cta }) => {
        return (
          <CtaNav value={value} layoutVariant={theme.BlockContent[layoutVariant!].CtaNav.layoutVariant} />
        );
      },
      'common.externalLink': ({ value }: { value: Cta }) => {
        return (
          <CtaNav value={value} layoutVariant={theme.BlockContent[layoutVariant!].CtaNav.layoutVariant} />
        );
      }
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a href={value?.href} rel={rel} target={target}>
            {children}
          </a>
        );
      }
    }
  };

  return <PortableText value={value} components={serializers} />;
}
