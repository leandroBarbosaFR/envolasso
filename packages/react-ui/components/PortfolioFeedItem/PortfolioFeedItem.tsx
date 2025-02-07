import React from 'react';
import dynamic from 'next/dynamic';
import { PortableTextBlock } from '@portabletext/types';
import { PortfolioFeedItemTheme } from '@agency-platform/themes';
import { EmbedServices, Media } from '@agency-platform/shared-types';

export interface PortfolioFeedItemProps {
  layoutVariant: keyof PortfolioFeedItemTheme;
  title: string;
  subtitle?: string;
  excerpt: string;
  body: PortableTextBlock;
  featureImage: Media;
  postMedoiaVariant: string;
  embedServices: EmbedServices;
  slug: { current: string };
  dynamicRoute: string;
  feedItemComponent?: string;
  isHorizontalFeed?: boolean;
}

// Dynamic import function
const loadComponent = (feedItemComponent?: string) => {
  switch (feedItemComponent) {
    default:
      return dynamic(() => import('../PortfolioFeedItemDefault'));
  }
};

const PortfolioFeedItem = ({
  layoutVariant,
  title,
  subtitle,
  excerpt,
  body,
  featureImage,
  postMedoiaVariant,
  embedServices,
  slug,
  dynamicRoute,
  feedItemComponent,
  isHorizontalFeed
}: PortfolioFeedItemProps) => {
  const DynamicFeedItem = loadComponent(feedItemComponent);

  return (
    <DynamicFeedItem
      layoutVariant={layoutVariant}
      slug={slug}
      title={title}
      subtitle={subtitle}
      excerpt={excerpt}
      body={body}
      featureImage={featureImage}
      postMedoiaVariant={postMedoiaVariant}
      embedServices={embedServices}
      dynamicRoute={dynamicRoute}
      isHorizontalFeed={isHorizontalFeed}
    />
  );
};

export default PortfolioFeedItem;
