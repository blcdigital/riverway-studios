import styled from 'styled-components/macro';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';

const ContentSt = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  padding: ${getSpacing(SPACING.large)} ${getSpacing(SPACING.large)} 0;
  width: calc(100vw - ${getSpacing(SPACING.large)});
  max-width: 600px;
  max-height: calc(100vh - ${getSpacing(SPACING.large)});
  background: ${getColor({ color: COLORS.white })};
  overflow: scroll;
  transform: translate(-50%, -50%);
  z-index: 999;

  ${media.medium`
    padding: ${getSpacing(SPACING.xl)} ${getSpacing(SPACING.xl)} 0;
  `}

  h2 {
    text-align: center;
  }

  h4 {
    margin: 0 0 ${getSpacing()};
  }

  form {
    margin-top: ${getSpacing(SPACING.xl)};
  }
`;

const FormRowSt = styled.div`
  margin-top: ${getSpacing(SPACING.large)};
  padding-top: ${getSpacing(SPACING.large)};
  border-top: 1px solid ${getColor({ color: COLORS.black })};

  ${({ isSubmitRow }) =>
    isSubmitRow &&
    `
    display: flex;
    justify-content: center;
    padding-top: ${getSpacing(SPACING.xl)};
    margin-bottom: ${getSpacing(SPACING.xl)};
  `};
`;

const OverlaySt = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${getSpacing(SPACING.large)};
  background: ${getColor({ alpha: 0.5, color: COLORS.black })};
  z-index: 999;
`;

const ToggleSt = styled.span`
  display: inline-block;
  position: relative;
  margin-right: ${getSpacing(SPACING.large)};
  width: 35px;
  height: 20px;
  background: ${getColor({ alpha: 0.5 })};
  border-radius: 30px;
  box-shadow: inset 0 0 5px 1px ${getColor({ alpha: 0.5, color: COLORS.black })};
  transition: background 0.2s;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 100%;
    box-shadow: 0 0 3px ${getColor({ alpha: 0.5, color: COLORS.black })};
    transition: left 0.1s ease-out;
  }

  input:checked + label & {
    background: ${getColor()};

    &::after {
      left: calc(100% - 22px);
    }
  }

  input:disabled + label & {
    opacity: 0.5;
  }
`;

const ToggleLabelSt = styled.label`
  display: flex;
  align-items: center;
`;

export { ContentSt, FormRowSt, OverlaySt, ToggleSt, ToggleLabelSt };
