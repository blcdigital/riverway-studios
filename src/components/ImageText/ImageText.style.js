import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { COLORS, getColor } from 'styles/color';

import circlesOverlay from 'images/icons/circles-overlay.svg';

const WrapperSt = styled.section`
  padding: ${getSpacing(SPACING['2xl'])} ${getSpacing(SPACING.large)};
  background: ${({ backgroundColor }) =>
    backgroundColor || getColor({ color: COLORS.white })};

  > div {
    ${media.medium`
      display: flex;
      flex-direction: ${({ imageLeft }) => (imageLeft ? 'row' : 'row-reverse')};
      align-items: flex-start;
      justify-content: space-between;
    `};
  }
`;

const ContentSt = styled.div`
  ${media.medium`
    width: calc(45% - ${getSpacing()});
  `};
`;

const CtaSt = styled.p`
  margin-top: ${getSpacing(SPACING.xl)};
`;

const ImageSt = styled.div`
  position: relative;
  margin-bottom: ${getSpacing(SPACING.xl)};

  ${media.medium`
    margin: 0;
    width: calc(55% - ${getSpacing()});
  `};

  &::after {
    content: '';
    position: absolute;
    top: -${getSpacing(SPACING.xl)};
    left: -${getSpacing(SPACING.xl)};
    width: calc(100% + ${getSpacing(SPACING.xl)});
    height: calc(100% + ${getSpacing(SPACING.xl)});
    background: transparent url(${circlesOverlay}) center center no-repeat;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 540px;
    border-radius: 1000px;
  }
`;

const TitleSt = styled.h2`
  margin-bottom: ${getSpacing(SPACING.xl)};
`;

export { WrapperSt, ContentSt, CtaSt, ImageSt, TitleSt };
