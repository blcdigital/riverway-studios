import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Header from 'components/Header';
import GlobalStyle from 'styles/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
