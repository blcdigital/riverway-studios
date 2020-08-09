import styled, { css } from 'styled-components';

const WrapperSt = styled.section`
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}px;
    `};
`;

const ImageSt = styled.picture`
  img {
    display: block;
    width: 100%;

    ${({ minHeight }) =>
      minHeight &&
      css`
        min-height: ${minHeight}px;
        object-fit: cover;
      `};
  }
`;

export { WrapperSt, ImageSt };
