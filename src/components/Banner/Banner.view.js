import React from 'react';

import { WrapperSt, ContainerFluidSt, MessageSt } from './Banner.style';

function Banner() {
  return (
    <WrapperSt>
      <ContainerFluidSt>
        <MessageSt>
          <p>
            We are currently closed due to national restrictions. Please keep an
            eye on our Social Media for more updates. We hope to reopen very
            soon. Stay Safe.
          </p>
        </MessageSt>
      </ContainerFluidSt>
    </WrapperSt>
  );
}

export default Banner;
