import styled, { css } from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import { WEIGHTS, getFontStyle } from 'styles/typography';

const WrapperSt = styled.button`
  display: inline-block;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${({ isNarrow, level }) =>
    level === 'button' &&
    css`
      ${getFontStyle({ size: 16 })};
      padding: ${
        isNarrow
          ? `${getSpacing()} ${getSpacing(SPACING.xl)}`
          : `${getSpacing(SPACING.large)} ${getSpacing(SPACING['2xl'])}`
      }};
      background: ${getColor({ color: COLORS.boston })};
      border: 0;
      border-radius: 1000px;
      color: ${getColor({ color: COLORS.white })};

      &:hover,
      &:focus {
        background: ${getColor({ color: COLORS.boston, luminosity: 30 })};
      }
    `};

  ${({ level }) =>
    level === 'link' &&
    css`
      ${getFontStyle({ size: 16, weight: WEIGHTS.bold })}
      padding: ${getSpacing(SPACING.small)} 0;
      border-bottom: 3px solid ${getColor({ color: COLORS.boston })};
      color: ${getColor()};

      &:hover,
      &:focus {
        color: ${getColor({ color: COLORS.boston })};
      }
    `};
`;

export { WrapperSt };
