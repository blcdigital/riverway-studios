import React from 'react';
import { Link } from 'gatsby';

function Menu({ handleNavigationClick }) {
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
    </ul>
  );
}

Menu.defaultProps = {
  handleNavigationClick: () => {},
};

export default Menu;
