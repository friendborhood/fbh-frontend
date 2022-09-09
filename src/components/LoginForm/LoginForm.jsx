/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import BoxInput from '../BoxInput';
import {
  checkIfUserFinishedRegistration,
  handleAuth, handleLogin, parseGmailToValidUserName,
} from './utils';
import { PAGES } from '../../pages/consts';
import { StyledForm } from '../SignUpForm/utils';
import CustomCheckBox from '../SignUpForm/CustomCheckBox';
import { LOADER_PARAMS } from '../../GlobalStyling';
import MOBILE_IMG from '../../images/mobile-package-image.png';
import { displayMessage } from '../../utils/handle-device-middleware';
import { updateLoginState } from '../../Store/store';

function LoginForm() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [codeHasBeenSent, setCodeSent] = useState({
    codeWasSent: false,
    text: 'Send Login Code!',
  });
  const [hideLoader, setHideLoader] = useState(true);
  const dispatch = useDispatch();
  const tryLoginAndStoreToken = async ({ userName, code, googleAuth }) => {
    const token = await handleAuth({ userName, code, googleAuth });
    if (token) {
      console.log('success login');
      dispatch(updateLoginState(token));
      const userFinishedRegistration = checkIfUserFinishedRegistration();
      if (userFinishedRegistration) {
        navigate(PAGES.DASHBOARD, { replace: true });
        window.location.reload();
      } else {
        navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
        window.location.reload();
      }
    } else if (!googleAuth) {
      displayMessage('wrong code');
    } else {
      displayMessage('failure logging with google');
    }
  };
  const successGoogleAuth = async (response) => {
    console.log(response);
    setHideLoader(false);
    const profile = response.getBasicProfile();
    const googleAuth = response.getAuthResponse().id_token;
    console.log('google auth', googleAuth);
    const emailFromGoogle = profile.getEmail();
    const userName = parseGmailToValidUserName(emailFromGoogle);
    await tryLoginAndStoreToken({ userName, googleAuth });
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
      await tryLoginAndStoreToken({ userName, code: pinCode });
    }
    setHideLoader(true);
  };

  return (
    <StyledForm>
      <img src={MOBILE_IMG} className="items-image" alt="decoration" />
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
            : (
              <div className="loader-container">
                <TailSpin
                  color={LOADER_PARAMS.color}
                  height={LOADER_PARAMS.height}
                  width={LOADER_PARAMS.width}
                />
              </div>
            )

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
        placeHolder="code"
      />
    </StyledForm>
  );
}

export default LoginForm;
