import propTypes from 'prop-types';
import React from 'react';
import ItemList from '../ItemList';

import './style.css';

const Button = ({ onClick, disabled , children }) => {
  return (
    <>
      {!disabled ? (
        <button type="button" onClick={onClick} className="Button">
          {children}
      </button>
      ) : (
        <button type="button" className="Button Button-disabled" disabled>
          {children}
      </button>
      )}
    </>
  );
}

ItemList.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
}

export default Button;
