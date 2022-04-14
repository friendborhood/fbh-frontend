import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import BoxInput from '../../components/BoxInput';
import { handleAuthValidation, handleGoogleLogin, handleLogin } from './utils';
import { PAGES } from '../consts';

function Form() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [codeHasBeenSent, setCodeSent] = useState({
    codeWasSent: false,
    text: 'Send Login Code!',
  });
  const successGoogleAuth = async (response) => {
    console.log(response);
    const profile = response.getBasicProfile();
    const emailFromGoogle = profile.getEmail();
    const username = emailFromGoogle.split('@')[0];
    const successAuth = await handleGoogleLogin(username);
    if (successAuth) {
      localStorage.setItem('userName', username);
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
    } else {
      toast('user does not exist');
    }
  };

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
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
        buttonText="Sign in with google"
        onSuccess={successGoogleAuth}
        onFailure={(e) => console.log(e)}
        cookiePolicy="single_host_origin"
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
              localStorage.setItem('userName', userName);
              navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
            } else {
              toast('wrong code');
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
