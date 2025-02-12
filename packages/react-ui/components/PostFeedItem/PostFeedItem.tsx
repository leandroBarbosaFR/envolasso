import React from 'react';
import dynamic from 'next/dynamic';
import { PostFeedItemTheme } from '@agency-platform/themes';
import { Media } from '@agency-platform/shared-types';

// type PostFeedItemType = 'PostFeedItemDefault';

// Props
export interface PostFeedItemProps {
  layoutVariant: keyof PostFeedItemTheme;
  title: string;
  slug: { current: string };
  excerpt: string;
  featureImage: Media;
  dynamicRoute: string;
  feedItemComponent?: string;
  isHorizontalFeed?: boolean;
  createdAt: string;
  body: any;
  subtitle?: string;
}

// Dynamic import function
const loadComponent = (feedItemComponent?: string) => {
  switch (feedItemComponent) {
    default:
      return dynamic(() => import('../PostFeedItemDefault'));
  }
};

const PostFeedItem = ({
  layoutVariant,
  title,
  slug,
  excerpt,
  featureImage,
  dynamicRoute,
  feedItemComponent,
  isHorizontalFeed,
  createdAt,
  body,
  subtitle
}: PostFeedItemProps) => {
  const DynamicFeedItem = loadComponent(feedItemComponent);

  return (
    <DynamicFeedItem
      layoutVariant={layoutVariant}
      title={title}
      slug={slug}
      excerpt={excerpt}
      featureImage={featureImage}
      dynamicRoute={dynamicRoute}
      isHorizontalFeed={isHorizontalFeed}
      createdAt={createdAt}
      body={body}
      subtitle={subtitle}
    />
  );
};

export default PostFeedItem;
