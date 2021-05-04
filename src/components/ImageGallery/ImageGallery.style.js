import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { COLORS, getColor } from 'styles/color';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.white })};

  > div > div > div {
    flex-basis: 50%;
    max-width: 50%;

    ${media.medium`
      padding: ${getSpacing(SPACING.large)};
    `}

    ${media.large`
      flex-basis: 33.33333%;
      max-width: 33.33333%;
    `}
  }
`;

const TitleSt = styled.h2`
  margin-bottom: ${getSpacing(SPACING['2xl'])};
  width: 100%;
  text-align: center;
`;

export { WrapperSt, TitleSt };
