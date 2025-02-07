import React from 'react';
import dynamic from 'next/dynamic';
import { TeamProfileFeedItemTheme } from '@agency-platform/themes';
import { Media } from '@agency-platform/shared-types';

export interface TeamProfileFeedItemProps {
  layoutVariant: keyof TeamProfileFeedItemTheme;
  title: string;
  position: string;
  excerpt: string;
  featureImage: Media;
  contactLinks?: any;
  dynamicRoute?: string;
  isHorizontalFeed?: boolean;
  feedItemComponent?: string;
  featureImageEffect: Media;
}

// Dynamic import function
const loadComponent = (feedItemComponent?: string) => {
  switch (feedItemComponent) {
    default:
      return dynamic(() => import('../TeamProfileFeedItemDefault'));
  }
};

const TeamProfileFeedItem = ({
  layoutVariant,
  title,
  position,
  excerpt,
  featureImage,
  featureImageEffect,
  contactLinks,
  dynamicRoute,
  isHorizontalFeed,
  feedItemComponent
}: TeamProfileFeedItemProps) => {
  const DynamicFeedItem = loadComponent(feedItemComponent);

  return (
    <DynamicFeedItem
      layoutVariant={layoutVariant}
      title={title}
      excerpt={excerpt}
      position={position}
      contactLinks={contactLinks}
      featureImage={featureImage}
      dynamicRoute={dynamicRoute}
      isHorizontalFeed={isHorizontalFeed}
      featureImageEffect={featureImageEffect}
    />
  );
};

export default TeamProfileFeedItem;
