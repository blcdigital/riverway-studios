import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Menu({ handleNavigationClick, isFooter }) {
  console.log({ isFooter });

  return (
    <ul>
      <li>
        <Link
          activeClassName="is-active"
          to="/pricing"
          onClick={handleNavigationClick}
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/recording"
          onClick={handleNavigationClick}
        >
          Recording
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/rehearsal"
          onClick={handleNavigationClick}
        >
          Rehearsal
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/experiences-vouchers"
          onClick={handleNavigationClick}
        >
          Vouchers
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/tour"
          onClick={handleNavigationClick}
        >
          Tour
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/contact-us"
          onClick={handleNavigationClick}
        >
          Contact Us
        </Link>
      </li>
      {isFooter ? (
        <>
          <li>
            <Link
              activeClassName="is-active"
              to="/privacy"
              onClick={handleNavigationClick}
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              activeClassName="is-active"
              to="/cookie-information"
              onClick={handleNavigationClick}
            >
              Cookie information
            </Link>
          </li>
        </>
      ) : null}
    </ul>
  );
}

Menu.propTypes = {
  handleNavigationClick: PropTypes.func,
  isFooter: PropTypes.bool,
};

Menu.defaultProps = {
  handleNavigationClick: () => {},
  isFooter: false,
};

export default Menu;
