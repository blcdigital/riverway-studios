import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Menu({ handleNavigationClick, isFooter }) {
  return (
    <ul>
      <li>
        <Link
          activeClassName="is-active"
          to="/recording"
          onClick={handleNavigationClick}
        >
          Record
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/rehearsal"
          onClick={handleNavigationClick}
        >
          Rehearse
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/gallery"
          onClick={handleNavigationClick}
        >
          Tour
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/testimonials"
          onClick={handleNavigationClick}
        >
          Testimonials
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/experiences-vouchers"
          onClick={handleNavigationClick}
        >
          Gift
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/prices"
          onClick={handleNavigationClick}
        >
          Prices
        </Link>
      </li>
      <li>
        <Link
          activeClassName="is-active"
          to="/contact-us"
          onClick={handleNavigationClick}
        >
          Contact
        </Link>
      </li>
      {isFooter && (
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
              Cookie info
            </Link>
          </li>
        </>
      )}
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
