import styled, { css } from 'styled-components';

const WrapperSt = styled.section`
  position: relative;

  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}px;
    `};
`;

const ContentSt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
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

export { WrapperSt, ContentSt, ImageSt };
