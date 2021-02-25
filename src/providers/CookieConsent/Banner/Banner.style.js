import styled from 'styled-components/macro';

import ContainerFluid from 'components/_atoms/ContainerFluid';
import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';

const WrapperSt = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: ${getColor({ color: COLORS.boston })};
  z-index: 999;
`;

const ActionSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${getSpacing(SPACING.large)};

  button + button {
    margin-left: ${getSpacing()};
  }

  ${media.medium`
		flex-shrink: 0;
		margin-top: 0;
		margin-left: ${getSpacing()};
	`}
`;

const ContainerFluidSt = styled(ContainerFluid)`
  padding: ${getSpacing(SPACING.large)};

  ${media.medium`
		display: flex;
		align-items: center;
	`}
`;

const MessageSt = styled.div`
  flex-grow: 1;
  color: ${getColor({ color: COLORS.white })};
  text-align: center;

  ${media.medium`
    text-align: left;
  `}

  p {
    margin: 0;

    + p {
      margin-top: ${getSpacing()};
    }
  }
`;

export { WrapperSt, ActionSt, ContainerFluidSt, MessageSt };
