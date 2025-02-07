// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Head from 'next/head';
import { useRegionConfig } from '@agency-platform/react-ui';
import type { ContentMetaTags, OverrideMetaTags } from '@agency-platform/shared-types';
import { toPlainText } from '@portabletext/react';

type MetaTagsProps = {
  locale: string;
  contentMetaTags?: ContentMetaTags;
  overrideMetaTags?: OverrideMetaTags | undefined;
};

const MetaTags = ({ locale, contentMetaTags, overrideMetaTags }: MetaTagsProps): JSX.Element | null => {
  const { siteSettings } = useRegionConfig();
  if (!contentMetaTags && !overrideMetaTags) return null;

  const { seoGlobalSettings } = siteSettings;
  const isDescriptionString = typeof contentMetaTags?.contentDescription === 'string';
  const isImageString = typeof contentMetaTags?.contentImage === 'string';

  const getTitle = () => {
    return seoGlobalSettings?.siteNamePosition === 'before'
      ? `${siteSettings.websiteName} | ${
          overrideMetaTags?.overideMetaTitle && overrideMetaTags?.metaTitle
            ? overrideMetaTags.metaTitle
            : contentMetaTags?.contentTitle || seoGlobalSettings?.titleSource
        }`
      : `${
          overrideMetaTags?.overideMetaTitle && overrideMetaTags?.metaTitle
            ? overrideMetaTags.metaTitle
            : contentMetaTags?.contentTitle || seoGlobalSettings?.titleSource
        } | ${siteSettings.websiteName}`;
  };

  return (
    <Head>
      <title>{getTitle()}</title>

      <meta content={locale} property="og:locale" />
      <meta content="en" name="language" />
      <meta content="website" property="og:type" />
      <meta content={siteSettings.websiteName} property="og:site_name" />
      <meta content={siteSettings.websiteName} name="site_name" />
      <meta
        content={`${seoGlobalSettings?.canonicalUrl}${contentMetaTags?.contentDynamicRoute || ''}${
          contentMetaTags?.contentSlug || ''
        }`}
        property="og:url"
      />
      <meta
        content={`${seoGlobalSettings?.canonicalUrl}${contentMetaTags?.contentDynamicRoute || ''}${
          contentMetaTags?.contentSlug || ''
        }`}
        name="og:url"
      />
      <meta content={siteSettings.websiteUrl} name="url" />
      <link
        href={`${seoGlobalSettings?.canonicalUrl}${contentMetaTags?.contentDynamicRoute || ''}${
          contentMetaTags?.contentSlug || ''
        }`}
        rel="canonical"
      />
      <link href={siteSettings.websiteUrl} rel="home" />
      <meta content={getTitle()} property="og:title" />
      <meta content={getTitle()} name="og:title" />
      <meta
        content={
          overrideMetaTags?.overideMetaDescription && overrideMetaTags?.metaDescription
            ? overrideMetaTags.metaDescription
            : contentMetaTags?.contentDescription
              ? isDescriptionString
                ? contentMetaTags.contentDescription
                : toPlainText(contentMetaTags.contentDescription)
              : seoGlobalSettings?.descriptionSource
        }
        property="og:description"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaDescription && overrideMetaTags?.metaDescription
            ? overrideMetaTags.metaDescription
            : contentMetaTags?.contentDescription
              ? isDescriptionString
                ? contentMetaTags.contentDescription
                : toPlainText(contentMetaTags.contentDescription)
              : seoGlobalSettings?.descriptionSource
        }
        name="description"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaKeywords && overrideMetaTags?.MetaKeywords
            ? overrideMetaTags.MetaKeywords
            : contentMetaTags?.contentKeyword || seoGlobalSettings?.KeywordsSource
        }
        name="keywords"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaImage && overrideMetaTags?.metaImage
            ? overrideMetaTags.metaImage.asset.url
            : contentMetaTags?.contentImage
              ? isImageString
                ? contentMetaTags?.contentImage
                : contentMetaTags?.contentImage?.asset?.url
              : seoGlobalSettings?.imageSource?.asset?.url
        }
        property="og:image"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaImage && overrideMetaTags?.metaImage
            ? overrideMetaTags.metaImage.asset.url
            : contentMetaTags?.contentImage
              ? isImageString
                ? contentMetaTags?.contentImage
                : contentMetaTags?.contentImage?.asset?.url
              : seoGlobalSettings?.imageSource?.asset?.url
        }
        name="og:image"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaImageDescription && overrideMetaTags?.metaImageDescription
            ? overrideMetaTags.metaImageDescription
            : contentMetaTags?.contentImage?.alt || seoGlobalSettings?.imageSourceDescription
        }
        property="og:image:alt"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaImageDescription && overrideMetaTags?.metaImageDescription
            ? overrideMetaTags.metaImageDescription
            : contentMetaTags?.contentImage?.alt || seoGlobalSettings?.imageSourceDescription
        }
        name="og:image:alt"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaImage && overrideMetaTags?.metaImage
            ? overrideMetaTags.metaImage.asset?.width?.toString()
            : contentMetaTags?.contentImage?.asset?.width?.toString() ||
              seoGlobalSettings?.imageSource?.asset?.width?.toString()
        }
        property="og:image:width"
      />
      <meta
        content={
          overrideMetaTags?.overideMetaImage && overrideMetaTags?.metaImage
            ? overrideMetaTags.metaImage.asset?.height?.toString()
            : contentMetaTags?.contentImage?.asset?.height?.toString() ||
              seoGlobalSettings?.imageSource?.asset?.height?.toString()
        }
        property="og:image:height"
      />

      {/* <meta name="fb:app_id" content="229702757350" />
      <meta
        name="twitter:image"
        content="https://github.githubassets.com/images/modules/gists/gist-og-image.png"
      />
      <meta name="twitter:site" content="@github" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Complete List of HTML Meta Tags" />
      <meta
        name="twitter:description"
        content="Complete List of HTML Meta Tags. GitHub Gist: instantly share code, notes, and snippets."
      /> */}
    </Head>
  );
};

export default MetaTags;
