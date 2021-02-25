import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

import Banner from './Banner';
import Modal from './Modal';
import { CONSENT_COOKIE, VERSION } from './CookieConsent.constants';

const cookies = new Cookies();
const ConsentContext = React.createContext({
  allowedCategories: [],
  shouldShowBanner: false,
  shouldShowModal: false,
  onAccept: (allowedCategories) => {},
  onCustomise: () => {},
});

const ConsentProvider = ({ children }) => {
  const COOKIE_NAME = `${CONSENT_COOKIE}_${
    process.env.REACT_APP_BASE_URL || ''
  }`;
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [shouldShowBanner, setShouldShowBanner] = useState(false);
  const [consentCookie, setConsentCookie] = useState(
    cookies.get(COOKIE_NAME) || {
      allowedCategories: [],
      version: VERSION,
    }
  );

  function onAccept(allowedCategories) {
    const expires = new Date();
    const cookieValue = {
      ...consentCookie,
      allowedCategories,
    };

    expires.setDate(expires.getDate() + 90);

    cookies.set(COOKIE_NAME, cookieValue, {
      httpOnly: false,
      expires,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });

    setConsentCookie(cookieValue);
  }

  function onCustomise() {
    setShouldShowBanner(false);
    setShouldShowModal(true);
  }

  useEffect(() => {
    if (
      consentCookie.allowedCategories.length < 1 ||
      consentCookie.version !== VERSION
    ) {
      setShouldShowBanner(true);

      return;
    } else {
      setShouldShowBanner(false);
      setShouldShowModal(false);
    }
  }, [consentCookie]);

  return (
    <ConsentContext.Provider
      value={{
        allowedCategories: consentCookie.allowedCategories,
        shouldShowBanner,
        shouldShowModal,
        onAccept,
        onCustomise: onCustomise,
      }}
    >
      <>
        {children}

        <Banner />
        <Modal />
      </>
    </ConsentContext.Provider>
  );
};

ConsentProvider.propTypes = {
  children: PropTypes.node,
};

export { ConsentContext, ConsentProvider };
