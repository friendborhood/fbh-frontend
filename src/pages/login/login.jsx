/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import BoxInput from '../../components/BoxInput';
import {
  handleAuthValidation, handleGoogleLogin, handleLogin, parseGmailToValidUserName,
} from './utils';
import { PAGES } from '../consts';
import { StyledForm } from '../sign-up/utils';
import CustomCheckBox from '../sign-up/CustomCheckBox';
import { GLOBAL_SCARLET } from '../../GlobalStyling';

function Form() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [codeHasBeenSent, setCodeSent] = useState({
    codeWasSent: false,
    text: 'Send Login Code!',
  });
  const [hideLoader, setHideLoader] = useState(true);

  const successGoogleAuth = async (response) => {
    console.log(response);
    setHideLoader(false);
    const profile = response.getBasicProfile();
    const emailFromGoogle = profile.getEmail();
    const username = parseGmailToValidUserName(emailFromGoogle);
    const successAuth = await handleGoogleLogin(username);
    if (successAuth) {
      localStorage.setItem('userName', username);
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
    }
    setHideLoader(true);
  };

  const navigateToSignUp = () => {
    navigate(PAGES.SIGN_UP);
  };

  const loginButtonClickHandler = async () => {
    setHideLoader(false);
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
    setHideLoader(true);
  };

  return (
    <StyledForm>
      <h1>Welcome Back</h1>
      <p>Welcome back! Please enter your details.</p>
      <div className="form-wrapper">
        <BoxInput
          label="Username"
          id="username"
          state={userName}
          placeHolder="user name"
          setState={setUsername}
          isHidden={codeHasBeenSent.codeWasSent}
        />
      </div>
      <div className="checkbox">
        <CustomCheckBox />
        <div>Remember me</div>
      </div>
      {
        hideLoader
          ? (
            <>
              <button
                id="login"
                type="button"
                disabled={!userName && !pinCode}
                onClick={loginButtonClickHandler}
              >
                {codeHasBeenSent.text}
              </button>
              <GoogleLogin
                className="google-button"
                clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
                buttonText="Sign in with google"
                onSuccess={successGoogleAuth}
                onFailure={(e) => console.log(e)}
                cookiePolicy="single_host_origin"
              />
            </>
          )
          : <div className="loader-container"><TailSpin color={GLOBAL_SCARLET} height={40} width={30} /></div>

      }
      <div className="already-have">
        <p>{'Don\'t have an account?'}</p>
        <div
          type="button"
          className="clickable"
          onClick={navigateToSignUp}
        >
          Sign up
        </div>
      </div>
      <BoxInput
        label="Code from email"
        id="pinCode"
        state={pinCode}
        setState={setPinCode}
        isHidden={!codeHasBeenSent.codeWasSent}
      />
    </StyledForm>
  );
}

export default Form;
