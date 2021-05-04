import styled from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { WEIGHTS, getFontStyle } from 'styles/typography';
import { resetList } from 'styles/utils';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.mako })};
  color: ${getColor({ color: COLORS.white })};
  text-align: center;

  ${media.medium`
    padding: ${getSpacing(SPACING['3xl'])} ${getSpacing(SPACING.large)};
  `};

  h2 {
    margin-bottom: ${getSpacing(SPACING['2xl'])};
    ${getFontStyle({ size: 24, weight: WEIGHTS.bold })};
  }
`;

const ListSt = styled.ul`
  ${resetList};
  ${getFontStyle({ size: 14 })}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    ${getFontStyle({ size: 16 })};
    line-height: 1.5;

    + p {
      margin-top: ${getSpacing(SPACING.xl)};
    }
  }

  li {
    padding: 0 ${getSpacing(SPACING.large)};
    width: 50%;

    &:nth-child(n + 3) {
      margin-top: ${getSpacing(SPACING['2xl'])};
    }

    ${media.large`
      padding: 0 ${getSpacing(SPACING.xl)};
      width: ${({ itemCount }) => 100 / itemCount}%;

      &:nth-child(n + 3) {
        margin-top: 0;
      }
    `};
  }

  img {
    display: block;
    margin: 0 auto ${getSpacing(SPACING['2xl'])};
    height: 85px;
  }
`;

export { WrapperSt, ListSt };
