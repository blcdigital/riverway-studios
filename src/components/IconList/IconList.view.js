import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, ListSt } from './IconList.style';

function IconList({ items }) {
  return (
    <WrapperSt>
      <ContainerFluid>
        <ListSt>
          {items.map(({ icon, text }) => (
            <li key={icon}>
              <img alt="" src={icon} />
              {text}
            </li>
          ))}
        </ListSt>
      </ContainerFluid>
    </WrapperSt>
  );
}

IconList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default IconList;
