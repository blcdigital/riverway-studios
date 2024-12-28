import styled from 'styled-components';
import { COLORS, getColor } from 'styles/color';
import { getSpacing, SPACING } from 'styles/dimensions';

const WrapperSt = styled.blockquote`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${getSpacing(SPACING.large)};
  padding: 0;
  font-style: italic;

  div:first-child {
    margin-bottom: ${getSpacing()};

    svg {
      transform: rotate(180deg);
    }
  }

  div:last-child {
    text-align: right;
  }

  svg {
    width: 20px;
    fill: ${getColor({ color: COLORS.boston })};
  }
`;

const ContentSt = styled.div`
  padding: 0 ${getSpacing(SPACING.large)};

  * {
    margin: 0;

    + * {
      margin-top: 1rem;
    }
  }
`;

const CtaSt = styled.p`
  margin-top: ${getSpacing(SPACING.xl)};
`;

export { WrapperSt, ContentSt, CtaSt };
