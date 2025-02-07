import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledArticle = styled(StyledArticleBase)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) => theme.CookieModal[layoutVariant!].StyledArticle.color};
  padding: 15px;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledArticle;
