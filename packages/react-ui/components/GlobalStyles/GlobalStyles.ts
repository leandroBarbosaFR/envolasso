import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  main {
    overflow: hidden;
  }
  // Remove oulines
  * {
    outline: none;
    outline: 0;
    outline-style: none;
    -moz-outline-style: none;
  }

  // Remove oulines
  button:active, button:focus { outline: none; border: none;}

  // Border Box
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  // HTML Font / Text Size Resets
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  html, button, input, select, textarea { font-family: inherit; }

  // HTML5 Elements
  article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary { display: block; }

  // Remove Default Margins
  body, form, fieldset, legend, input, select, textarea, button { margin: 0; padding:0; }

  // remove typography margin/padding
  p, h1, h2, h3, h4, h5, h6 {  margin: 0; padding: 0; }

  // Remove ul/ol/li Margins & paddings
  ul, ol {  margin: 0; padding: 0; }
  ul li, ol li { list-style: none; }

  // Global typeography render
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  // Audio and Video Elements
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  audio, canvas, progress, video { display: inline-block; }
  progress { vertical-align: baseline; }

  // Hidden Elements
  [hidden], template { display: none; }

  // Images
  img { border-style: none; }
  svg:not(:root) { overflow: hidden; }


  // ==========================================================================
  // global Reset typeography
  // ==========================================================================

  body {
    font-family: ${({ theme }) => theme?.typeDefaults.family};
    color: ${({ theme }) => theme?.typeDefaults.colorBody};
    background: ${({ theme }) => theme?.typeDefaults.backgroundBody};
  }
  body,
  p,
  ul,
  ol {
    font-size: ${(props) => props.theme?.typeDefaults.size};
    line-height: ${({ theme }) => theme?.typeDefaults.lineHeight};
    letter-spacing: ${({ theme }) => theme?.typeDefaults.letterSpacing};
    font-weight: ${({ theme }) => theme?.typeDefaults.weight};
  }
  a {
    color: ${({ theme }) => theme?.typeDefaults.colorBodyLink};
  }
  // Bold and Strong
  b,
  strong {
    font-family: ${({ theme }) => theme?.typeDefaults.familyBold};
    font-weight: ${({ theme }) => theme?.typeDefaults.weightBold};
  }
  // Italics
  em,
  .em {
    font-style: italic;
  }
  // Abbreviation
  abbr[title],
  .abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  // Definition
  dfn {
    font-style: italic;
  }
  // Sub and Sup
  sub,
  .sub,
  sup,
  .sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub,
  .sub {
    bottom: -0.25em;
  }
  sup,
  .sup {
    top: -0.5em;
  }
  // Del
  del,
  .del {
    text-decoration: line-through;
  }
  // ul
  ul,
  ol {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme?.typeDefaults.family};
    font-weight: ${({ theme }) => theme?.typeDefaults.weight};
  }
  h1 {
    font-size: ${({ theme }) => `calc(${theme?.typeDefaults.size} * ${theme?.typeDefaults.h1Multiple})`};
    line-height: ${({ theme }) =>
      `calc(${theme?.typeDefaults.lineHeight} * ${theme?.typeDefaults.h1Multiple})`};
    letter-spacing: ${({ theme }) =>
      `calc(${theme?.typeDefaults.letterSpacing} * ${theme?.typeDefaults.h1Multiple})`};
  }
  h2 {
    font-size: ${({ theme }) => `calc(${theme?.typeDefaults.size} * ${theme?.typeDefaults.h2Multiple})`};
    line-height: ${({ theme }) =>
      `calc(${theme?.typeDefaults.lineHeight} * ${theme?.typeDefaults.h2Multiple})`};
    letter-spacing: ${({ theme }) =>
      `calc(${theme?.typeDefaults.letterSpacing} * ${theme?.typeDefaults.h2Multiple})`};
  }
  h3 {
    font-size: ${({ theme }) => `calc(${theme?.typeDefaults.size} * ${theme?.typeDefaults.h3Multiple})`};
    line-height: ${({ theme }) =>
      `calc(${theme?.typeDefaults.lineHeight} * ${theme?.typeDefaults.h3Multiple})`};
    letter-spacing: ${({ theme }) =>
      `calc(${theme?.typeDefaults.letterSpacing} * ${theme?.typeDefaults.h3Multiple})`};
  }
  h4 {
      font-size: ${({ theme }) => `calc(${theme?.typeDefaults.size} * ${theme?.typeDefaults.h4Multiple})`};
    line-height: ${({ theme }) =>
      `calc(${theme?.typeDefaults.lineHeight} * ${theme?.typeDefaults.h4Multiple})`};
    letter-spacing: ${({ theme }) =>
      `calc(${theme?.typeDefaults.letterSpacing} * ${theme?.typeDefaults.h4Multiple})`};
  }
  h5 {
    font-size: ${({ theme }) => `calc(${theme?.typeDefaults.size} * ${theme?.typeDefaults.h5Multiple})`};
    line-height: ${({ theme }) =>
      `calc(${theme?.typeDefaults.lineHeight} * ${theme?.typeDefaults.h5Multiple})`};
    letter-spacing: ${({ theme }) =>
      `calc(${theme?.typeDefaults.letterSpacing} * ${theme?.typeDefaults.h5Multiple})`};
  }
  h6 {
    font-size: ${({ theme }) => `calc(${theme?.typeDefaults.size} * ${theme?.typeDefaults.h6Multiple})`};
    line-height: ${({ theme }) =>
      `calc(${theme?.typeDefaults.lineHeight} * ${theme?.typeDefaults.h6Multiple})`};
    letter-spacing: ${({ theme }) =>
      `calc(${theme?.typeDefaults.letterSpacing} * ${theme?.typeDefaults.h6Multiple})`};
  }

  // Mixed Input Field resets
  [type='text'],
  [type='email'],
  [type='password'],
  [type='tel'],
  [type='number'],
  [type='date'] {
    ::-ms-reveal { display: none; }
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    &:focus {
      background: $baseInputBackgroundFocusColor;
      border-left: $baseInputBorderFocus;
      outline: 0;
    }
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='date']::-webkit-inner-spin-button {
    display: none;
    appearance: none;
    -webkit-appearance: none;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='search'] {
    appearance: none;
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: none;
    -webkit-appearance: none;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  button[disabled],
  html input[disabled] {
    cursor: not-allowed;
  }
  input[type='password'] {
    font-family: Verdana;
  }
  /* Change Autocomplete styles in Chrome*/
  input[type='password']:-webkit-autofill,
  input[type='password']:-webkit-autofill:hover,
  input[type='password']:-webkit-autofill:focus {
    font-family: Verdana;
    /* letter-spacing: 0.125em; */
  }

`;

export default GlobalStyles;
