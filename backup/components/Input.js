import React from 'react';

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label><br />
      <input type="text" value={props.default}/>
      <br />
    </>
  );
};

export default Input;