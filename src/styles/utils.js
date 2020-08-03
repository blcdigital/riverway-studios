import { css } from 'styled-components';

import { getColor } from 'styles/color';
import media from 'styles/media';

const resetButton = css`
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  border-radius: 0;
`;

const resetList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const visuallyHidden = css`
  position: absolute;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export { resetButton, resetList, visuallyHidden };
