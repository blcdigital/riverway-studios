import React from 'react';

import { WrapperSt } from './ContainerFluid.style';

function ContainerFluid({ children, className }) {
  return <WrapperSt className={className}>{children}</WrapperSt>;
}

export default ContainerFluid;
