import React from 'react';
import './Box.module.scss';

const Box = ({ children }) => {
  return (
    <div className="box">
      {children}
    </div>
  );
};


export default Box;