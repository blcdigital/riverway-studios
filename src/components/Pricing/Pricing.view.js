import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';

import {
  WrapperSt,
  BookButtonSt,
  DisclaimerSt,
  ListSt,
  OpeningTimesSt,
} from './Pricing.style';

function Pricing({
  children,
  disclaimer,
  showBookButton,
  showOpeningTimes,
  ...rest
}) {
  return (
    <WrapperSt showOpeningTimes={showOpeningTimes}>
      <ListSt>{children}</ListSt>

      {showBookButton && (
        <BookButtonSt>
          <Button as={Link} level="button" to="/contact-us">
            Book
          </Button>
        </BookButtonSt>
      )}

      {showOpeningTimes && (
        <OpeningTimesSt>
          <div>
            <p>
              <b>
                We are open for rehearsals from 10am till 3am, 7 days a week.
              </b>
            </p>
          </div>

          <div>
            <p>Our usual session times are:</p>

            <ul className="no-bullet">
              <li>10am – 2pm</li>
              <li>2pm – 6pm</li>
              <li>6pm – 10pm</li>
              <li>7pm – 11pm</li>
              <li>8pm – Midnight</li>
              <li>11pm – 3am (Nighthawk rate)</li>
            </ul>
          </div>
        </OpeningTimesSt>
      )}

      {disclaimer && <DisclaimerSt>* {disclaimer}</DisclaimerSt>}
    </WrapperSt>
  );
}

Pricing.propTypes = {
  children: PropTypes.node.isRequired,
  disclaimer: PropTypes.string,
  showOpeningTimes: PropTypes.bool,
};

Pricing.defaultProps = {
  disclaimer: null,
  showBookButton: false,
  showOpeningTimes: false,
};

export default Pricing;
