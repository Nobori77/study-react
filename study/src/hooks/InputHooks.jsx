import React, { useState } from 'react';
import useInput from './useinput';

const InputHooks = () => {

  const [value1, onChangeValue1] = useInput("")
  const [value2, onChangeValue2] = useInput("")

  return (
    <div>
      <p>{value1}</p>
      <p>{value2}</p>
      <input type="text" onChange={onChangeValue1} />
      <input type="text" onChange={onChangeValue2} />
    </div>
  );
};

export default InputHooks;