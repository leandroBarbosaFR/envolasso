import React from 'react';
import { useRouter } from 'next/router';
// import { useFlexConfig } from '@agency-platform/react-ui';
import { PageHeaderBannerTheme } from '@agency-platform/themes';
import { Media, DialogBox } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Hooks
import useDialogBox from '../../hooks/useDialogBox';
// Components
import Button from '../Button';
import { ImageTag } from '../ImageTag';
// Styles
import StyledIconNav from './components/StyledIconNav';
import StyledImage from './components/StyledImage';
import StyledPageHeaderContainer from './components/StyledPageHeaderContainer';
import StyledPageHeaderGrid from './components/StyledPageHeaderGrid';
import StyledPageHeaderSection from './components/StyledPageHeaderSection';
// Props
export interface PageHeaderBannerProps {
  layoutVariant: keyof PageHeaderBannerTheme;
  bannerImage: Media;
  withMusicOpts: boolean;
}

const PageHeaderBanner = ({ layoutVariant, bannerImage, withMusicOpts = true }: PageHeaderBannerProps) => {
  const theme = useTheme();
  const router = useRouter();
  // const { translation } = useFlexConfig();
  const shareBlog = useDialogBox() as DialogBox;
  const isCollectionsPage = router?.asPath.includes('collections/');
  const imageSrc = bannerImage?.asset?.url;
  const blurDataURL = bannerImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/artwork.svg`;

  const handleOpenShare = () => {
    return shareBlog.open('1');
  };

  return (
    <StyledPageHeaderSection layoutVariant={layoutVariant}>
      {imageSrc && (
        <StyledImage layoutVariant={layoutVariant}>
          <ImageTag
            layoutVariant={theme.PageHeaderBanner[layoutVariant!].StyledImage.ImageTag.layoutVariant}
            src={imageSrc}
            fallbackImgSrc={fallbackImgSrc}
            blurDataURL={blurDataURL}
            alt={bannerImage?.alt}
            caption={bannerImage?.caption}
            fill={theme.PageHeaderBanner[layoutVariant!].StyledImage.ImageTag.fill}
            priority={theme.PageHeaderBanner[layoutVariant!].StyledImage.ImageTag.priority}
            placeholder={theme.PageHeaderBanner[layoutVariant!].StyledImage.ImageTag.placeholder}
          />
        </StyledImage>
      )}

      {withMusicOpts && (
        <StyledPageHeaderContainer
          layoutVariant={layoutVariant}
          isFluid={theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderContainer.isFluid}
        >
          <StyledPageHeaderGrid
            layoutVariant={layoutVariant}
            withRowGap={theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.withRowGap}
            withColGapp={theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.withColGapp}
          >
            <StyledIconNav layoutVariant={layoutVariant}>
              <Button
                variant={
                  theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .variant
                }
                withIcon={
                  theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .withIcon
                }
                withText={
                  theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .withText
                }
                iconName={
                  theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .iconName
                }
                toolTipText={'Share page'}
                onClick={handleOpenShare}
              />
            </StyledIconNav>

            {isCollectionsPage && (
              <StyledIconNav layoutVariant={layoutVariant}>
                <Button
                  variant={
                    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                      .variant
                  }
                  withIcon={
                    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                      .withIcon
                  }
                  withText={
                    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                      .withText
                  }
                  iconName={
                    theme.PageHeaderBanner[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                      .iconName
                  }
                />
              </StyledIconNav>
            )}
          </StyledPageHeaderGrid>
        </StyledPageHeaderContainer>
      )}
    </StyledPageHeaderSection>
  );
};

export default PageHeaderBanner;
