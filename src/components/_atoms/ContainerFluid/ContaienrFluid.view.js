import React from 'react';

import { WrapperSt } from './ContaienrFluid.style';

function ContaienrFluid({ children, className }) {
  return <WrapperSt className={className}>{children}</WrapperSt>;
}

export default ContaienrFluid;
