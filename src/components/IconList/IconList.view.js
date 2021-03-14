import React from 'react';
import PropTypes from 'prop-types';

import ContainerFluid from 'components/_atoms/ContainerFluid';

import { WrapperSt, ListSt } from './IconList.style';

function IconList({ items, title }) {
  return (
    <WrapperSt>
      <ContainerFluid>
        {title ? <h2>{title}</h2> : null}

        <ListSt itemCount={items.length || 3}>
          {items.map(({ content, icon, text }) => (
            <li key={icon}>
              <img alt="" src={icon} />
              {text ? <h3>{text}</h3> : null}
              {content ? <p>{content}</p> : null}
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
      content: PropTypes.string,
      icon: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired
  ),
  title: PropTypes.string,
};

export default IconList;
