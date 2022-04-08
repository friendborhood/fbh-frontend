import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import BoxInput from '../../components/BoxInput';
import { handleAuthValidation, handleLogin } from './utils';

function Form() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [codeHasBeenSent, setCodeSent] = useState({
    codeWasSent: false,
    text: 'Send Login Code!',
  });
  const successGoogleLogin = (response) => {
    const profile = response.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getId();
    const fullName = profile.getName();
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    navigate('/additional-details', { replace: true });
  };

  return (
    <form
      id="form"
      className="basis-full border-8 border-green-900 rounded-lg border-double"
    >
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
        buttonText="Sign in with google"
        onSuccess={successGoogleLogin}
        onFailure={(e) => console.log(e)}
        cookiePolicy="single_host_origin"
      />

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
              console.log('success login');
              navigate('/additionalDetails', { replace: true });
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
