import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import { WEIGHTS, getFontStyle } from 'styles/typography';

const ErrorMessageSt = styled.span`
  ${getFontStyle({ size: 14 })};
  color: red;

  &:empty {
    display: none;
  }
`;

const FormRowSt = styled.div`
  * + & {
    margin-top: ${getSpacing(SPACING.large)};
  }
`;

const InputSt = styled.input`
  padding: ${getSpacing()};
  width: 100%;
  border: 1px solid ${getColor({ color: COLORS.black, luminosity: 80 })};
`;

const LabelSt = styled.label`
  ${getFontStyle({ size: 12, weight: WEIGHTS.bold })};
  display: block;
  margin-bottom: ${getSpacing(SPACING.small)};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const TextareaSt = styled.textarea`
  padding: ${getSpacing()};
  width: 100%;
  border: 1px solid ${getColor({ color: COLORS.black, luminosity: 80 })};
`;

export { ErrorMessageSt, FormRowSt, InputSt, LabelSt, TextareaSt };
