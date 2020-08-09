import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { WEIGHTS, getDefaultFontStyle, getFontStyle } from 'styles/typography';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${getColor({ color: COLORS.white })};
    ${getDefaultFontStyle()};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2 {
    margin-top: 0;
    ${getFontStyle({ size: 40, weight: WEIGHTS.bold })};
    letter-spacing: 3px;
    line-height: 1;
    text-transform: uppercase;
  }

  h1 {
    ${media.large`
      ${getFontStyle({ size: 60, weight: WEIGHTS.bold })};
    `};
  }

  h2 {
    margin-top: 0;
    ${getFontStyle({ size: 32, weight: WEIGHTS.bold })};
    line-height: 1;
    text-transform: uppercase;

    * + & {
      margin-top: ${getSpacing(SPACING.xl)};
    }
  }

  h3 {
    margin: 0 0 ${getSpacing(SPACING.xl)};
    ${getFontStyle({ size: 24, weight: WEIGHTS.bold })};
    letter-spacing: 1px;
    line-height: 1;
    text-transform: uppercase;

    * + & {
      margin-top: ${getSpacing(SPACING.large)};
    }
  }

  h4 {
    margin: 0 0 ${getSpacing(SPACING.small)};
    ${getFontStyle({ weight: WEIGHTS.bold })};
    line-height: 1;
    text-transform: uppercase;

    *:not(h3) + & {
      margin-top: ${getSpacing(SPACING.large)};
    }
  }

  h1, h2, h3, h4 {
    &.with-underline {
      display: inline-block;
      padding-bottom: ${getSpacing()};
      border-bottom: 3px solid ${getColor({ luminosity: 75 })};
    }
  }

  ul {
    margin-top: 0;

    &.no-bullet {
      list-style: none;
      padding-left: 0;
    }
  }

  p {
    margin-top: 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  a {
    border-bottom: 1px solid ${getColor({
      color: COLORS.boston,
    })};
    color: ${getColor()};
    text-decoration: none;
    transition: border 0.2s;

    &:hover,
    &:focus {
      border-bottom-color: ${getColor({
        color: COLORS.boston,
        luminosity: 1,
      })};
    }
  }

  strong {
    font-weight: 700;
  }
`;

export default GlobalStyle;
