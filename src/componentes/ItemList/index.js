import React from 'react';


import './style.css';

const ItemList = ({ onClick, children }) => {
  return (
    <button className="Item-list" onClick={onClick}>
      {children}
    </button>
  );
}


export default ItemList;
