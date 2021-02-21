import styled from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { getFontStyle } from 'styles/typography';
import { resetList } from 'styles/utils';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.mako })};
  color: ${getColor({ color: COLORS.white })};

  ${media.medium`
    padding: ${getSpacing(SPACING['3xl'])} ${getSpacing(SPACING.large)};
  `};
`;

const ListSt = styled.ul`
  ${resetList};
  ${getFontStyle({ size: 16 })}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;

  li {
    width: calc(50% - ${getSpacing()});

    &:nth-child(n + 3) {
      margin-top: ${getSpacing(SPACING.xl)};
    }

    ${media.large`
      width: calc(20% - ${getSpacing()});

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
