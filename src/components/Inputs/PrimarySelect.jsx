import React from 'react';

const PrimarySelect = (props) => {
    const {name, onChangeFunction, value, array} = props;
  return (
    <select name={name} onChange={onChangeFunction} value={value} >
    {
        array.map((option) => (
            <option value={option.id} key={option.id}>
                <h3>{`${option.from} -> ${option.to}`}</h3>
            </option>
        ))
    }
</select>
  )
}

export default PrimarySelect;