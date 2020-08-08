const BASE_COLOR = 'black';
export const COLORS = {
  // brand colors
  boston: {
    h: 208,
    s: 54,
    l: 52,
  },
  pebble: {
    h: 43,
    s: 6,
    l: 75,
  },
  // base colours
  black: {
    h: 0,
    s: 0,
    l: 20,
  },
  white: {
    h: 0,
    s: 0,
    l: 100,
  },
};

export function getColor({
  alpha = 1,
  color = COLORS[BASE_COLOR],
  luminosity,
} = {}) {
  const { h, s, l } = color;

  return `hsla(${h}, ${s}%, ${luminosity || l}%, ${alpha})`;
}
