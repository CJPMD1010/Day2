import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const StateBasics = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Typography variant='h4'>Count : {count}</Typography><br></br>
      <Button variant='contained' color="success" onClick={inc}>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant='contained' color="error" onClick={dec}>-</Button>
    </div>
  );
};

export default StateBasics;
