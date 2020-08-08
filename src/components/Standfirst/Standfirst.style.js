import styled from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { getFontStyle } from 'styles/typography';

const WrapperSt = styled.section`
  ${getFontStyle({ size: 24 })};
  margin-top: -${getSpacing(SPACING.xl)};
  padding: ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.mako })};
  color: ${getColor({ color: COLORS.white })};
  text-align: center;

  ${media.large`
    padding: ${getSpacing(SPACING.xl)};
  `};

  p {
    margin-right: auto;
    margin-left: auto;
    max-width: 770px;
  }
`;

export { WrapperSt };
