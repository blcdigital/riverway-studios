import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';
import { getFontStyle } from 'styles/typography';
import { resetButton, resetList } from 'styles/utils';

const WrapperSt = styled.header`
  padding: ${getSpacing(SPACING.large)};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ withBackground }) =>
    withBackground &&
    css`
      background: ${getColor({ color: COLORS.pebble })};
    `}
`;

const NavigationSt = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: ${getSpacing(SPACING['3xl'])};
  width: 100vw;
  height: 100vh;
  background: ${getColor({ color: COLORS.pebble })};
  transform: translateX(100%);
  will-change: transform;
  transition: transform 0.25s ease-out;
  z-index: 5;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateX(0);
  `};

  ${media.medium`
    position: static;
    padding: 0;
    width: auto;
    height: auto;
    background: none;
    transform: translateX(0);
  `};

  ul {
    ${resetList};
    text-align: center;
  }

  li {
    ${media.medium`
      display: inline-block;
    `}

    + li {
      margin-top: ${getSpacing(SPACING.xl)};

      ${media.medium`
        margin-top: 0;
        margin-left: ${getSpacing(SPACING.xl)};
      `}
    }
  }

  a {
    ${getFontStyle({ size: 16 })}
    text-transform: uppercase;
    border-bottom-color: transparent;
    color: ${getColor()};
    opacity: 0.6;

    &:hover,
    &:focus {
      border-bottom-color: transparent;
      opacity: 1;
    }

    &.is-active {
      border-bottom-color: ${getColor({ color: COLORS.boston })};
    }
  }
`;

const NavigationToggleSt = styled.button`
  ${resetButton};
  position: relative;
  text-transform: uppercase;
  z-index: 10;

  ${media.medium`
    display: none;
  `}
`;

const SiteTitleSt = styled(Link)`
  display: inline-block;
  border: 0;
`;

export { WrapperSt, NavigationSt, NavigationToggleSt, SiteTitleSt };
