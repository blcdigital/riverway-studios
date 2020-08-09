import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';

const WrapperSt = styled.section`
  margin: ${getSpacing(SPACING.large)} 0;
`;

const ImageSt = styled.picture`
  img {
    display: block;
    width: 100%;
  }
`;

export { WrapperSt, ImageSt };
