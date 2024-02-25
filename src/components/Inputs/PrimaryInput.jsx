import React from 'react';

const PrimaryInput = (props) => {
    const {placeholder, value, name, onChangeFunction} = props;
  return (
    <input placeholder={placeholder} value={value} onChange={onChangeFunction} name={name}/>
  )
}

export default PrimaryInput;