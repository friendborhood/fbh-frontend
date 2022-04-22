import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import BoxInput from '../../components/BoxInput';
import {
  handleAuthValidation, handleGoogleLogin, handleLogin, parseGmailToValidUserName,
} from './utils';
import { PAGES } from '../consts';
import { StyledForm } from '../sign-up/utils';

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
    const username = parseGmailToValidUserName(emailFromGoogle);
    const successAuth = await handleGoogleLogin(username);
    if (successAuth) {
      localStorage.setItem('userName', username);
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
    }
  };

  return (
    <StyledForm>
      <h1>Welcome Back</h1>
      <p>Welcome back! Please enter your details.</p>
      <BoxInput
        label="Username"
        id="username"
        state={userName}
        placeHolder="user name"
        setState={setUsername}
        isHidden={codeHasBeenSent.codeWasSent}
      />
      <GoogleLogin
        className="google-button"
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

      <button
        id="login"
        type="button"
        disabled={!userName && !pinCode}
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
      </button>
    </StyledForm>
  );
}

export default Form;
