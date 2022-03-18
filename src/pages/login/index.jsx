import React, { useState } from 'react';
import Button from '@mui/material/Button';
import BoxInput from '../../components/BoxInput';
import { handleLogin } from './utils';

function Form() {
  const [username, setUsername] = useState('');

  return (
    <form
      id="form"
      className="basis-full border-8 border-green-900 rounded-lg border-double"
    >
      <BoxInput
        label="Username"
        id="username"
        state={username}
        setState={setUsername}
      />
      <Button
        id="sign-up"
        variant="contained"
        onClick={() => handleLogin(username)}
      >
        Login
      </Button>
    </form>
  );
}

export default Form;
