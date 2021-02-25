import React, { useContext } from 'react';

import Button from 'components/_atoms/Button';

import { ConsentContext } from '../CookieConsent';
import { CATEGORIES } from '../CookieConsent.constants';

import {
  WrapperSt,
  ActionSt,
  ContainerFluidSt,
  MessageSt,
} from './Banner.style';

function CookieBanner() {
  const { shouldShowBanner, onAccept, onCustomise } = useContext(
    ConsentContext
  );

  const handleAcceptAll = () => onAccept(CATEGORIES);

  if (!shouldShowBanner) {
    return null;
  }

  return (
    <WrapperSt>
      <ContainerFluidSt>
        <MessageSt>We use cookies to analyse our traffic.</MessageSt>
        <ActionSt>
          <Button isNarrow level="clear" onClick={handleAcceptAll}>
            Accept all
          </Button>
          <Button isNarrow level="clear" onClick={onCustomise}>
            Customise
          </Button>
        </ActionSt>
      </ContainerFluidSt>
    </WrapperSt>
  );
}

export default CookieBanner;
