import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { handleSignUp } from './utils';
import BoxInput from '../../components/BoxInput';

function Form() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const canSignUp = !(email && userName && fname && lname);

  return (
    <form
      id="form"
      className="basis-full border-8 border-green-900 rounded-lg border-double"
    >
      <BoxInput
        label="First Name"
        id="fname"
        state={fname}
        setState={setFname}
        margin="mt-6"
      />
      <BoxInput
        label="Last Name"
        id="lname"
        state={lname}
        setState={setLname}
      />
      <BoxInput
        label="User Name"
        id="userName"
        state={userName}
        setState={setuserName}
      />
      <BoxInput
        label="Email Address"
        id="email"
        state={email}
        setState={setEmail}
        margin="mb-6"
      />
      <Button
        style={{ marginLeft: 150 }}
        id="sign-up"
        disabled={canSignUp}
        variant="contained"
        onClick={() => handleSignUp({
          email, userName, lastName: lname, firstName: fname,
        })}
      >
        Sign Up!
      </Button>
    </form>
  );
}

export default Form;
