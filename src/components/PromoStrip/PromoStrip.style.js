import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { COLORS, getColor } from 'styles/color';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING.xl)} ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.mako })};
  color: ${getColor({ color: COLORS.white })};

  ${media.medium`
    padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  `};

  > div {
    ${media.medium`
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
    `};
  }
`;

const ContentSt = styled.div`
  + div {
    margin-top: ${getSpacing(SPACING['2xl'])};

    ${media.medium`
      margin-top: 0;
    `};
  }

  ${media.medium`
    width: calc(60% - ${getSpacing(SPACING.xl)});

    div + & {
      width: calc(40% - ${getSpacing(SPACING.xl)});
    }
  `};
`;

const TitleSt = styled.h2`
  width: 100%;
  text-align: center;

  ${media.medium`
    margin-bottom: ${getSpacing(SPACING['2xl'])};
  `}
`;

export { WrapperSt, ContentSt, TitleSt };
