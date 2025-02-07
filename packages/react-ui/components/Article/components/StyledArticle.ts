import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledArticle = styled.article<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ variant, theme }) => theme.Article[variant!].familyHeading};
    font-weight: ${({ variant, theme }) => theme.Article[variant!].weightHeading};
    color: ${({ variant, theme }) => theme.Article[variant!].colorHeading};
  }
  // Bold and Strong
  b,
  strong {
    font-family: ${({ variant, theme }) => theme.Article[variant!].familyBold};
    font-weight: ${({ variant, theme }) => theme.Article[variant!].weightBold};
  }
  p,
  ul,
  ol {
    font-family: ${({ variant, theme }) => theme.Article[variant!].family};
    font-weight: ${({ variant, theme }) => theme.Article[variant!].weight};
  }
  ul li {
    list-style: ${({ variant, theme }) => theme.Article[variant!].ulLi.listStyle};
    list-style-position: ${({ variant, theme }) => theme.Article[variant!].ulLi.listStylePosition};
    display: ${({ variant, theme }) => theme.Article[variant!].ulLi.display};
    gap: ${({ variant, theme }) => theme.Article[variant!].ulLi.gap};
    flex-direction: ${({ variant, theme }) => theme.Article[variant!].ulLi.flexDirection};
    position: ${({ variant, theme }) => theme.Article[variant!].ulLi.position};
  }
  ol li {
    list-style: ${({ variant, theme }) => theme.Article[variant!].olLi.listStyle};
    list-style-position: ${({ variant, theme }) => theme.Article[variant!].olLi.listStylePosition};
    display: ${({ variant, theme }) => theme.Article[variant!].olLi.display};
    gap: ${({ variant, theme }) => theme.Article[variant!].olLi.gap};
    flex-direction: ${({ variant, theme }) => theme.Article[variant!].olLi.flexDirection};
    position: ${({ variant, theme }) => theme.Article[variant!].olLi.position};
  }
  ul li::before {
    font-family: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.familyHeading};
    counter-increment: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.counterIncrement};
    content: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.content};
    flex: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.flex};
    border-radius: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.borderRadius};
    color: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.color};
    display: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.display};
    justify-content: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.justifyContent};
    align-items: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.alignItems};
    background: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.background};
    background-image: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.backgroundImage};
    border: ${({ variant, theme }) => theme.Article[variant!].ulLi.before.border};
  }
  ol li::before {
    font-family: ${({ variant, theme }) => theme.Article[variant!].olLi.before.familyHeading};
    counter-increment: ${({ variant, theme }) => theme.Article[variant!].olLi.before.counterIncrement};
    content: ${({ variant, theme }) => theme.Article[variant!].olLi.before.content};
    flex: ${({ variant, theme }) => theme.Article[variant!].olLi.before.flex};
    border-radius: ${({ variant, theme }) => theme.Article[variant!].olLi.before.borderRadius};
    color: ${({ variant, theme }) => theme.Article[variant!].olLi.before.color};
    display: ${({ variant, theme }) => theme.Article[variant!].olLi.before.display};
    justify-content: ${({ variant, theme }) => theme.Article[variant!].olLi.before.justifyContent};
    align-items: ${({ variant, theme }) => theme.Article[variant!].olLi.before.alignItems};
    background: ${({ variant, theme }) => theme.Article[variant!].olLi.before.background};
    background-image: ${({ variant, theme }) => theme.Article[variant!].olLi.before.backgroundImage};
    border: ${({ variant, theme }) => theme.Article[variant!].olLi.before.border};
  }
  blockquote {
    color: ${({ variant, theme }) => theme.Article[variant!].fontColorBlockquote};
    font-family: ${({ variant, theme }) => theme.Article[variant!].familyBlockquote};
    font-weight: ${({ variant, theme }) => theme.Article[variant!].weightBlockquote};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    p,
    ul,
    ol {
      font-size: ${({ variant, theme }) => theme.Article[variant!].mobile.size};
      line-height: ${({ variant, theme }) => theme.Article[variant!].mobile.lineHeight};
      letter-spacing: ${({ variant, theme }) => theme.Article[variant!].mobile.letterSpacing};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].mobile.lineHeight}`};
    }
    ul,
    ol {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].mobile.lineHeight}`};
    }
    ul li,
    ol li {
      margin-left: ${({ variant, theme }) => theme.Article[variant!].mobile.ulOlLi.marginLeft};
    }
    ul li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].mobile.ulLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].mobile.ulLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].mobile.ulLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].mobile.ulLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].mobile.ulLi.before.margin};
    }
    ol li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].mobile.olLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].mobile.olLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].mobile.olLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].mobile.olLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].mobile.olLi.before.margin};
    }
    h1 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].h1Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].h1Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${theme.Article[variant!].h1Multiple})`};
    }
    h2 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].h2Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].h2Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${theme.Article[variant!].h2Multiple})`};
    }
    h3 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].h3Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].h3Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${theme.Article[variant!].h3Multiple})`};
    }
    h4 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].h4Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].h4Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${theme.Article[variant!].h4Multiple})`};
    }
    h5 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].h5Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].h5Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${theme.Article[variant!].h5Multiple})`};
    }
    h6 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].h6Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].h6Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${theme.Article[variant!].h6Multiple})`};
    }
    blockquote {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.size} * ${theme.Article[variant!].blockquoteMultiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.lineHeight} * ${theme.Article[variant!].blockquoteMultiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobile.letterSpacing} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      // margin
      padding: ${({ variant, theme }) => theme.Article[variant!].mobile.blockquote.padding};
      /* border */
      border: ${({ variant, theme }) => theme.Article[variant!].mobile.blockquote.border};
      border-top: ${({ variant, theme }) => theme.Article[variant!].mobile.blockquote.borderTop};
      border-right: ${({ variant, theme }) => theme.Article[variant!].mobile.blockquote.borderRight};
      border-bottom: ${({ variant, theme }) => theme.Article[variant!].mobile.blockquote.borderBottom};
      border-left: ${({ variant, theme }) => theme.Article[variant!].mobile.blockquote.borderLeft};
    }
  }

  // ==========================================================================
  // Large Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    p,
    ul,
    ol {
      font-size: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.size};
      line-height: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.lineHeight};
      letter-spacing: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.letterSpacing};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].mobileLarge.lineHeight}`};
    }
    ul,
    ol {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].mobileLarge.lineHeight}`};
    }
    ul li,
    ol li {
      margin-left: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.ulOlLi.marginLeft};
    }
    ul li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.ulLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.ulLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.ulLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.ulLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.ulLi.before.margin};
    }
    ol li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.olLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.olLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.olLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.olLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.olLi.before.margin};
    }
    h1 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].h1Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${theme.Article[variant!].h1Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${theme.Article[variant!].h1Multiple})`};
    }
    h2 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].h2Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${theme.Article[variant!].h2Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${theme.Article[variant!].h2Multiple})`};
    }
    h3 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].h3Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${theme.Article[variant!].h3Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${theme.Article[variant!].h3Multiple})`};
    }
    h4 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].h4Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${theme.Article[variant!].h4Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${theme.Article[variant!].h4Multiple})`};
    }
    h5 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].h5Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${theme.Article[variant!].h5Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${theme.Article[variant!].h5Multiple})`};
    }
    h6 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].h6Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${theme.Article[variant!].h6Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${theme.Article[variant!].h6Multiple})`};
    }
    blockquote {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.size} * ${theme.Article[variant!].blockquoteMultiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.lineHeight} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].mobileLarge.letterSpacing} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      // margin
      padding: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.blockquote.padding};
      /* border */
      border: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.blockquote.border};
      border-top: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.blockquote.borderTop};
      border-right: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.blockquote.borderRight};
      border-bottom: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.blockquote.borderBottom};
      border-left: ${({ variant, theme }) => theme.Article[variant!].mobileLarge.blockquote.borderLeft};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    p,
    ul,
    ol {
      font-size: ${({ variant, theme }) => theme.Article[variant!].tablet.size};
      line-height: ${({ variant, theme }) => theme.Article[variant!].tablet.lineHeight};
      letter-spacing: ${({ variant, theme }) => theme.Article[variant!].tablet.letterSpacing};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].tablet.lineHeight}`};
    }
    ul,
    ol {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].tablet.lineHeight}`};
    }
    ul li,
    ol li {
      margin-left: ${({ variant, theme }) => theme.Article[variant!].tablet.ulOlLi.marginLeft};
    }
    ul li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].tablet.ulLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].tablet.ulLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].tablet.ulLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].tablet.ulLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].tablet.ulLi.before.margin};
      padding: ${({ variant, theme }) => theme.Article[variant!].tablet.ulLi.before.padding};
    }
    ol li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].tablet.olLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].tablet.olLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].tablet.olLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].tablet.olLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].tablet.olLi.before.margin};
      padding: ${({ variant, theme }) => theme.Article[variant!].tablet.olLi.before.padding};
    }
    h1 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].h1Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].h1Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${theme.Article[variant!].h1Multiple})`};
    }
    h2 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].h2Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].h2Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${theme.Article[variant!].h2Multiple})`};
    }
    h3 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].h3Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].h3Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${theme.Article[variant!].h3Multiple})`};
    }
    h4 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].h4Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].h4Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${theme.Article[variant!].h4Multiple})`};
    }
    h5 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].h5Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].h5Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${theme.Article[variant!].h5Multiple})`};
    }
    h6 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].h6Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].h6Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${theme.Article[variant!].h6Multiple})`};
    }
    blockquote {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.size} * ${theme.Article[variant!].blockquoteMultiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.lineHeight} * ${theme.Article[variant!].blockquoteMultiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].tablet.letterSpacing} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      // margin
      padding: ${({ variant, theme }) => theme.Article[variant!].tablet.blockquote.padding};
      /* border */
      border: ${({ variant, theme }) => theme.Article[variant!].tablet.blockquote.border};
      border-top: ${({ variant, theme }) => theme.Article[variant!].tablet.blockquote.borderTop};
      border-right: ${({ variant, theme }) => theme.Article[variant!].tablet.blockquote.borderRight};
      border-bottom: ${({ variant, theme }) => theme.Article[variant!].tablet.blockquote.borderBottom};
      border-left: ${({ variant, theme }) => theme.Article[variant!].tablet.blockquote.borderLeft};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    p,
    ul,
    ol {
      font-size: ${({ variant, theme }) => theme.Article[variant!].desktop.size};
      line-height: ${({ variant, theme }) => theme.Article[variant!].desktop.lineHeight};
      letter-spacing: ${({ variant, theme }) => theme.Article[variant!].desktop.letterSpacing};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].desktop.lineHeight}`};
    }
    ul,
    ol {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].desktop.lineHeight}`};
    }
    ul li,
    ol li {
      margin-left: ${({ variant, theme }) => theme.Article[variant!].desktop.ulOlLi.marginLeft};
    }
    ul li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].desktop.ulLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].desktop.ulLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].desktop.ulLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].desktop.ulLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].desktop.ulLi.before.margin};
    }
    ol li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].desktop.olLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].desktop.olLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].desktop.olLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].desktop.olLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].desktop.olLi.before.margin};
    }
    h1 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].h1Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${theme.Article[variant!].h1Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${theme.Article[variant!].h1Multiple})`};
    }
    h2 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].h2Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${theme.Article[variant!].h2Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${theme.Article[variant!].h2Multiple})`};
    }
    h3 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].h3Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${theme.Article[variant!].h3Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${theme.Article[variant!].h3Multiple})`};
    }
    h4 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].h4Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${theme.Article[variant!].h4Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${theme.Article[variant!].h4Multiple})`};
    }
    h5 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].h5Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${theme.Article[variant!].h5Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${theme.Article[variant!].h5Multiple})`};
    }
    h6 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].h6Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${theme.Article[variant!].h6Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${theme.Article[variant!].h6Multiple})`};
    }
    blockquote {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.size} * ${theme.Article[variant!].blockquoteMultiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.lineHeight} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].desktop.letterSpacing} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      // margin
      padding: ${({ variant, theme }) => theme.Article[variant!].desktop.blockquote.padding};
      /* border */
      border: ${({ variant, theme }) => theme.Article[variant!].desktop.blockquote.border};
      border-top: ${({ variant, theme }) => theme.Article[variant!].desktop.blockquote.borderTop};
      border-right: ${({ variant, theme }) => theme.Article[variant!].desktop.blockquote.borderRight};
      border-bottom: ${({ variant, theme }) => theme.Article[variant!].desktop.blockquote.borderBottom};
      border-left: ${({ variant, theme }) => theme.Article[variant!].desktop.blockquote.borderLeft};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    p,
    ul,
    ol {
      font-size: ${({ variant, theme }) => theme.Article[variant!].widescreen.size};
      line-height: ${({ variant, theme }) => theme.Article[variant!].widescreen.lineHeight};
      letter-spacing: ${({ variant, theme }) => theme.Article[variant!].widescreen.letterSpacing};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].widescreen.lineHeight}`};
    }
    ul,
    ol {
      margin: ${({ variant, theme }) => `0 0 ${theme.Article[variant!].widescreen.lineHeight}`};
    }
    ul li,
    ol li {
      margin-left: ${({ variant, theme }) => theme.Article[variant!].widescreen.ulOlLi.marginLeft};
    }
    ul li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].widescreen.ulLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].widescreen.ulLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].widescreen.ulLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].widescreen.ulLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].widescreen.ulLi.before.margin};
    }
    ol li::before {
      font-size: ${({ variant, theme }) => theme.Article[variant!].widescreen.olLi.before.size};
      font-weight: ${({ variant, theme }) => theme.Article[variant!].widescreen.olLi.before.weight};
      width: ${({ variant, theme }) => theme.Article[variant!].widescreen.olLi.before.width};
      height: ${({ variant, theme }) => theme.Article[variant!].widescreen.olLi.before.height};
      margin: ${({ variant, theme }) => theme.Article[variant!].widescreen.olLi.before.margin};
    }
    h1 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].h1Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h1Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${theme.Article[variant!].h1Multiple})`};
    }
    h2 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].h2Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h2Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${theme.Article[variant!].h2Multiple})`};
    }
    h3 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].h3Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h3Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${theme.Article[variant!].h3Multiple})`};
      margin: 0 0
        ${({ variant, theme }) =>
          `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h3Multiple})`};
    }
    h4 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].h4Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h4Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${theme.Article[variant!].h4Multiple})`};
    }
    h5 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].h5Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h5Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${theme.Article[variant!].h5Multiple})`};
    }
    h6 {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].h6Multiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${theme.Article[variant!].h6Multiple})`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${theme.Article[variant!].h6Multiple})`};
    }
    blockquote {
      font-size: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.size} * ${theme.Article[variant!].blockquoteMultiple})`};
      line-height: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.lineHeight} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      letter-spacing: ${({ variant, theme }) =>
        `calc(${theme.Article[variant!].widescreen.letterSpacing} * ${
          theme.Article[variant!].blockquoteMultiple
        })`};
      // margin
      padding: ${({ variant, theme }) => theme.Article[variant!].widescreen.blockquote.padding};
      /* border */
      border: ${({ variant, theme }) => theme.Article[variant!].widescreen.blockquote.border};
      border-top: ${({ variant, theme }) => theme.Article[variant!].widescreen.blockquote.borderTop};
      border-right: ${({ variant, theme }) => theme.Article[variant!].widescreen.blockquote.borderRight};
      border-bottom: ${({ variant, theme }) => theme.Article[variant!].widescreen.blockquote.borderBottom};
      border-left: ${({ variant, theme }) => theme.Article[variant!].widescreen.blockquote.borderLeft};
    }
  }
`;

export default StyledArticle;
