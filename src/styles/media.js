import { css } from 'styled-components';

export const BREAKPOINTS = {
  tiny: 370,
  small: 480,
  medium: 768,
  large: 920,
  wide: 1064,
};

export default Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
