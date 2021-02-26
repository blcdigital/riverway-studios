import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { ConsentContext, ConsentProvider } from 'providers/CookieConsent';
import GlobalStyle from 'styles/GlobalStyle';

const Layout = ({ children }) => {
  const { allowedCategories } = useContext(ConsentContext);

  return (
    <>
      {allowedCategories.includes('statistics') ? (
        <>
          <script>
            {(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l !== 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              if (f.parentNode) {
                f.parentNode.insertBefore(j, f);
              }
            })(window, document, 'script', 'dataLayer', 'GTM-TFVDX8C')}
          </script>
          <noscript>
            <iframe
              title="gtm"
              src="https://www.googletagmanager.com/ns.html?id=GTM-TFVDX8C"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </>
      ) : null}
      <GlobalStyle />
      <ConsentProvider>
        <Banner />

        <Header />

        <main>{children}</main>

        <Footer />
      </ConsentProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
