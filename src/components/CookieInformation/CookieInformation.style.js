import styled from 'styled-components';

import { getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';

const TableSt = styled.table`
  width: 100%;

  th,
  td {
    padding: ${getSpacing(SPACING.large)};
    background: ${getColor({ luminosity: 95.5 })};
  }

  & + * {
    margin-top: ${getSpacing(SPACING.xl)};
  }
`;

export { TableSt };
