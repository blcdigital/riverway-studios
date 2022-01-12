import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import { COLORS, getColor } from 'styles/color';
import media from 'styles/media';
import { WEIGHTS, getFontStyle } from 'styles/typography';
import { resetList } from 'styles/utils';

const WrapperSt = styled.section`
  margin-bottom: ${({ showOpeningTimes }) =>
    showOpeningTimes ? `0` : getSpacing(SPACING['2xl'])};
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BookButtonSt = styled.div`
  padding: ${getSpacing(SPACING.xl)} ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.white })};
  text-align: center;
`;

const DisclaimerSt = styled.p`
  margin-top: ${getSpacing()};
  padding: 0 ${getSpacing(SPACING.large)};
  color: ${getColor({ color: COLORS.black, luminosity: 60 })};

  ${media.large`
    padding: 0 ${getSpacing(SPACING.xl)};
  `};
`;

const ListSt = styled.ul`
  ${resetList};
  background: ${getColor({ color: COLORS.white })};

  ${media.medium`
    display: flex;
    flex-wrap: wrap;
  `};
`;

const OpeningTimesSt = styled.div`
  ${resetList};
  padding: ${getSpacing(SPACING.large)};
  background: ${getColor({ color: COLORS.mako })};
  color: ${getColor({ color: COLORS.white })};

  ${media.medium`
    display: flex;
  `}

  ${media.large`
    padding: ${getSpacing(SPACING.xl)};
  `};

  > div {
    &:first-child {
      ${media.medium`
        width: 33.33333%;
      `}

      ${media.large`
        width: 20%;
      `}
    }

    + div {
      margin-top: ${getSpacing(SPACING.large)};

      ${media.medium`
        margin-top: 0;
        margin-left: ${getSpacing(SPACING.xl)};
      `}

      ${media.large`
        margin-left: ${getSpacing(SPACING['2xl'])};
      `}
    }
  }
`;

const PriceItemSt = styled.li`
  padding: ${({ isInner }) =>
    isInner ? getSpacing() : getSpacing(SPACING.xl)};
  ${({ borderSmallTop }) =>
    borderSmallTop &&
    `border-top: 1px solid ${getColor({
      color: COLORS.black,
      luminosity: 80,
    })}`};

  ${media.medium`
    width: ${({ isInner, isLarge }) =>
      isLarge ? `100%` : isInner ? `33.33333%` : `50%`};
    border: 0;
    ${({ borderMediumTop }) =>
      borderMediumTop &&
      `border-top: 1px solid ${getColor({
        color: COLORS.black,
        luminosity: 80,
      })}`};
    ${({ borderMediumLeft }) =>
      borderMediumLeft &&
      `border-left: 1px solid ${getColor({
        color: COLORS.black,
        luminosity: 80,
      })}`};
  `};

  ${media.large`
    width: ${({ isInner, isLarge }) =>
      isLarge ? `50%` : isInner ? `33.33333%` : `25%`};
    border: 0;
    ${({ borderLargeLeft }) =>
      borderLargeLeft &&
      `border-left: 1px solid ${getColor({
        color: COLORS.black,
        luminosity: 80,
      })}`};
  `};
`;

const PriceItemDescriptionSt = styled.div`
  ${getFontStyle({ size: 14 })};
  margin-top: ${getSpacing(SPACING.xl)};

  dt {
    font-weight: bold;
  }
`;

const PriceItemDurationSt = styled.p`
  b,
  span {
    display: block;
  }
`;

const PriceItemTitleSt = styled.h3`
  ${getFontStyle({ weight: WEIGHTS.bold })};
  margin-bottom: ${getSpacing(SPACING.large)};

  span {
    color: ${getColor({ color: COLORS.black, luminosity: 80 })};
  }
`;

const PriceItemValueSt = styled.p`
  ${getFontStyle({ size: 40, weight: WEIGHTS.bold })};
  margin-bottom: ${getSpacing()};

  span {
    display: block;
    color: #ff0000;
    font-size: 1rem;
  }
`;

export {
  WrapperSt,
  BookButtonSt,
  DisclaimerSt,
  ListSt,
  OpeningTimesSt,
  PriceItemSt,
  PriceItemDescriptionSt,
  PriceItemDurationSt,
  PriceItemTitleSt,
  PriceItemValueSt,
};
