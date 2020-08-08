import styled, { css } from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';
import { WEIGHTS, getFontStyle } from 'styles/typography';

const WrapperSt = styled.button`
  ${({ level }) =>
    level &&
    css`
      ${getFontStyle({ size: 16, weight: WEIGHTS.bold })}
      padding: ${getSpacing(SPACING.small)} 0;
      border-width: 3px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    `};
`;

export { WrapperSt };
