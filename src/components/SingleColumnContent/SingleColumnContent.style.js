import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import { COLORS, getColor } from 'styles/color';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  background: ${({ backgroundColor }) =>
    backgroundColor || getColor({ color: COLORS.white })};
  text-align: ${({ align }) => align || `left`};
`;

const CtaSt = styled.p`
  margin-top: ${getSpacing(SPACING.xl)};
  text-align: ${({ align }) => align || `left`};
`;

const TitleSt = styled.h2`
  margin-bottom: ${getSpacing(SPACING['2xl'])};
  text-align: center;
`;

export { WrapperSt, CtaSt, TitleSt };
