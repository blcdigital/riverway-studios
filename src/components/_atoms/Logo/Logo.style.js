import styled, { css } from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import media from 'styles/media';

const WrapperSt = styled.span`
  display: inline-block;
  position: relative;
  width: 286px;
  height: 49px;

  ${({ isSiteTitle }) =>
    isSiteTitle &&
    css`
      width: 40px;
      height: 40px;
      overflow: hidden;

      ${media.large`
        width: 286px;
        height: 49px;
      `};

      svg {
        position: absolute;
        top: 0;
        right: 0;
        height: 40px;

        ${media.large`
          position: static;
          height: 49px;
        `};
      }

      .a,
      .b {
        display: none;

        ${media.large`
          display: inline-block;
        `};
      }
    `};

  .a {
    fill: ${getColor({ color: COLORS.white })};
  }

  .b {
    fill: ${getColor({ color: COLORS.black })};
  }

  .c {
    fill: ${getColor({ color: COLORS.black })};
  }

  ${({ withDarkBackground }) =>
    withDarkBackground &&
    css`
      .b {
        fill: ${getColor({ color: COLORS.white })};
        opacity: 0.5;
      }

      .c {
        fill: ${getColor({ color: COLORS.white })};
      }
    `}
`;

export { WrapperSt };
