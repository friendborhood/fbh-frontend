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
    const { Du: userDetails } = response;
    const { tf: fullName, tv: email } = userDetails;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    navigate('/dashboard', { replace: true });
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
        onFailure={() => console.log('bad login')}
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
              navigate('/dashboard', { replace: true });
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
