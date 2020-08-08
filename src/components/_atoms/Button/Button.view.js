import React from 'react';
import PropTypes from 'prop-types';

import { WrapperSt } from './Button.style';

function Button({ children, ...rest }) {
  return <WrapperSt {...rest}>{children}</WrapperSt>;
}

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  level: 'link',
};

export default Button;
