import React from 'react';
import { useRouter } from 'next/router';
import { DropdownMenuTheme } from '@agency-platform/themes';
import { BlogCategories, PortfolioCategories } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import ButtonLink from '../ButtonLink';
// Styles
import StyledDropdownItem from './components/StyledDropdownItem';
import StyledDropdownMenuList from './components/StyledDropdownMenuList';
// Props
export interface DropdownMenuListProps {
  layoutVariant: keyof DropdownMenuTheme;
  data?: BlogCategories[] | PortfolioCategories[];
  filterMenu?: BlogCategories[] | PortfolioCategories[];
}

const DropdownMenuList = ({ layoutVariant, data }: DropdownMenuListProps): JSX.Element | null => {
  if (!data) return null;
  const router = useRouter();
  const theme = useTheme();

  const renderMenuItem = () =>
    data &&
    data.map((item: any, index: React.Key) => {
      const { _type, url, title, content } = item;
      const isActive = content?.dynamicRoute
        ? router.asPath.includes(`${content.dynamicRoute}${content?.slug?.current}`)
        : router.asPath?.split('/')[1].includes(content?.slug?.current?.split('/')[0]);

      switch (_type) {
        case 'common.internalLink':
          return (
            <ButtonLink
              key={index}
              href={`/${content?.dynamicRoute ? content?.dynamicRoute : ''}${content?.slug?.current}`}
              variant={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.variant}
              title={title}
              withIcon={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withIcon}
              withText={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withText}
              iconName={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconName}
              iconPosition={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconPosition}
              isActive={isActive}
            >
              <StyledDropdownItem key={index} layoutVariant={layoutVariant}>
                {title}
              </StyledDropdownItem>
            </ButtonLink>
          );
        case 'common.externalLink':
          return (
            <ButtonLink
              key={index}
              href={url}
              variant={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.variant}
              title={title}
              withIcon={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withIcon}
              withText={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withText}
              iconName={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconName}
              iconPosition={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconPosition}
            >
              <StyledDropdownItem key={index} layoutVariant={layoutVariant}>
                {title}
              </StyledDropdownItem>
            </ButtonLink>
          );
        case 'blog.category':
          return (
            <ButtonLink
              key={index}
              href={`/blogs/page/${content?.slug?.current}/1/latest`}
              variant={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.variant}
              title={title}
              withIcon={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withIcon}
              withText={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withText}
              iconName={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconName}
              iconPosition={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconPosition}
              isActive={isActive}
            >
              <StyledDropdownItem key={index} layoutVariant={layoutVariant}>
                {title}
              </StyledDropdownItem>
            </ButtonLink>
          );
        case 'portfolio.category':
          return (
            <ButtonLink
              key={index}
              href={`/portfolios/page/${content?.slug?.current}/1/latest`}
              variant={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.variant}
              title={title}
              withIcon={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withIcon}
              withText={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.withText}
              iconName={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconName}
              iconPosition={theme.DropdownMenuList[layoutVariant!].StyledDropdownItem.ButtonLink.iconPosition}
              isActive={isActive}
            >
              <StyledDropdownItem key={index} layoutVariant={layoutVariant}>
                {title}
              </StyledDropdownItem>
            </ButtonLink>
          );

        default:
          return null;
      }
    });
  return <StyledDropdownMenuList layoutVariant={layoutVariant}>{renderMenuItem()}</StyledDropdownMenuList>;
};

export default DropdownMenuList;
