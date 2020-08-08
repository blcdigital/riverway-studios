import React from 'react';
import { Link } from 'gatsby';

function Menu({ handleNavigationClick }) {
  return (
    <ul>
      <li>
        <Link to="/recording" onClick={handleNavigationClick}>
          Recording
        </Link>
      </li>
      <li>
        <Link to="/rehearsal" onClick={handleNavigationClick}>
          Rehearsal
        </Link>
      </li>
      <li>
        <Link to="/tour" onClick={handleNavigationClick}>
          Tour
        </Link>
      </li>
      <li>
        <Link to="/vouchers" onClick={handleNavigationClick}>
          Vouchers
        </Link>
      </li>
      <li>
        <Link to="/contact-us" onClick={handleNavigationClick}>
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
