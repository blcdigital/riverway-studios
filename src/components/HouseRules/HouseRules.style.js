import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';

const WrapperSt = styled.dl`
  margin-top: ${getSpacing(SPACING.xl)};
`;

const ItemSt = styled.dd`
  list-style: none;

  + * {
    margin-top: ${getSpacing()};
  }
`;

const TitleSt = styled.dt`
  font-weight: bold;
`;

export { WrapperSt, ItemSt, TitleSt };
