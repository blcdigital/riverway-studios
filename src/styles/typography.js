import { getColor } from 'styles/color';

const BASE_FONT_SIZE = 18;
export const WEIGHTS = {
  regular: '400',
  bold: '700',
};
const BASE_FONT_WEIGHT = WEIGHTS.regular;

function pxToRem(px) {
  return `${px / BASE_FONT_SIZE}rem`;
}

export function getFontStyle({
  size = BASE_FONT_SIZE,
  weight = BASE_FONT_WEIGHT,
} = {}) {
  return `
    font-size: ${pxToRem(size)};
    font-weight: ${weight};
  `;
}

export function getDefaultFontStyle() {
  return `
    color: ${getColor()};
    font-family: 'Red Hat Display', Helvetica, Arial, sans-serif;
    font-size: ${BASE_FONT_SIZE}px;
    font-weight: ${BASE_FONT_WEIGHT};
    line-height: 1.4;
  `;
}
