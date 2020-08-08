import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { COLORS, getColor } from 'styles/color';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING.xl)} ${getSpacing(SPACING.large)};
  background: ${({ backgroundColor }) =>
    backgroundColor || getColor({ color: COLORS.white })};

  ${media.medium`
    padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  `};

  > div {
    ${media.medium`
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    `};
  }
`;

const ContentSt = styled.div`
  ${media.medium`
    width: calc(50% - ${getSpacing()});
  `};
`;

const CtaSt = styled.p`
  margin-top: ${getSpacing(SPACING.xl)};
`;

const ImageSt = styled.div`
  margin-bottom: ${getSpacing(SPACING.xl)};

  ${media.medium`
    margin: 0;
    width: calc(50% - ${getSpacing()});
  `};

  img {
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 500px;
    border-radius: 1000px;
  }
`;

export { WrapperSt, ContentSt, CtaSt, ImageSt };
