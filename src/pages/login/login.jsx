import React, { useState } from 'react';
import Button from '@mui/material/Button';
import BoxInput from '../../components/BoxInput';
import { handleAuthValidation, handleLogin } from './utils';

function Form() {
  const [userName, setUsername] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [codeHasBeenSent, setCodeSent] = useState({
    codeWasSent: false,
    text: 'Send Login Code!',
  });

  return (
    <form
      id="form"
      className="basis-full border-8 border-green-900 rounded-lg border-double"
    >
      <BoxInput
        label="Username"
        id="username"
        state={userName}
        setState={setUsername}
        isHidden={codeHasBeenSent.codeWasSent}
      />

      <BoxInput
        label="Code from email"
        id="pinCode"
        state={pinCode}
        setState={setPinCode}
        isHidden={!codeHasBeenSent.codeWasSent}
      />

      <Button
        id="login"
        variant="contained"
        disabled={!userName && !pinCode}
        style={{ marginLeft: 150 }}
        onClick={async () => {
          if (!codeHasBeenSent.codeWasSent) {
            const codeWasSentSuccessfully = await handleLogin(userName);
            if (codeWasSentSuccessfully) {
              setCodeSent({
                text: 'Login',
                codeWasSent: true,
              });
            }
          } else {
            const pinCodeIsCorrect = await handleAuthValidation({ userName, code: pinCode });
            if (pinCodeIsCorrect) {
              alert('success login');
            } else {
              alert('wrong code');
            }
          }
        }}
      >
        {codeHasBeenSent.text}
      </Button>
    </form>
  );
}

export default Form;
