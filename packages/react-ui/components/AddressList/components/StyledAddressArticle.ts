import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledAddressArticle = styled(Article)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddressArticle.color};

  // Remove margin/padding
  p:last-of-type {
    /* margin: 0; */
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.lastOfType.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.lastOfType.padding};
    /* padding: 0; */
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressArticle.widescreen.margin};
  }
`;

export default StyledAddressArticle;
