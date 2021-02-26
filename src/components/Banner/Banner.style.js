import styled from 'styled-components/macro';

import ContainerFluid from 'components/_atoms/ContainerFluid';
import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import media from 'styles/media';

const WrapperSt = styled.div`
  width: 100vw;
  background: ${getColor({ color: COLORS.boston })};
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

  p {
    margin: 0;

    + p {
      margin-top: ${getSpacing()};
    }
  }
`;

export { WrapperSt, ContainerFluidSt, MessageSt };
