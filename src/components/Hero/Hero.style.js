import styled from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';

const WrapperSt = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -86px;
  padding: calc(86px + ${getSpacing(SPACING.large)})
    ${getSpacing(SPACING.large)} ${getSpacing(SPACING.xl)};
  min-height: ${({ isExpanded }) => (isExpanded ? `95vh` : `500px`)};
  background: ${getColor({ color: COLORS.pebble })} url(${({ image }) => image})
    center center no-repeat;
  background-size: cover;
  color: ${getColor({ color: COLORS.white })};
  text-align: center;

  ${media.large`
    margin-top: -95px;
    padding-top: calc(95px + ${getSpacing(SPACING.large)});
    ${({ image2x }) =>
      image2x &&
      `background: ${getColor({ color: COLORS.pebble })} url(${image2x}}) center
    center no-repeat`};
    background-size: cover;
  `};

  h1 {
    margin: 0 auto;
    max-width: 900px;
    letter-spacing: 10px;
    line-height: 1.2;
  }
`;

export { WrapperSt };
