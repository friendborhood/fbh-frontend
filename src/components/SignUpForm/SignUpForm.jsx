/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useMemo, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { handleSignUp, StyledForm } from './utils';
import BoxInput from '../BoxInput';
import { PAGES } from '../../pages/consts';
import 'react-toastify/dist/ReactToastify.css';
import { parseGmailToValidUserName } from '../LoginForm/utils';
import { LOADER_PARAMS } from '../../GlobalStyling';
import MOBILE_IMG from '../../images/mobile-package-image.png';
import { updateLoginState } from '../../Store/store';

function SignUpForm() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [hideLoader, setHideLoader] = useState(true);
  const dispatch = useDispatch();

  const canSignUp = useMemo(
    () => !(email && userName && fname && lname),
    [email, userName, fname, lname],
  );

  const trySignUp = async (data) => {
    const { userName } = data;
    console.log(userName);
    setHideLoader(false);
    const token = await handleSignUp(data);
    if (token) {
      dispatch(updateLoginState(token));
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
      window.location.reload();
    }
    setHideLoader(true);
  };

  const navigateToLogin = () => {
    navigate(PAGES.LOGIN);
  };

  const successGoogleAuth = async (response) => {
    const profile = response.getBasicProfile();
    const emailFromGoogle = profile.getEmail();
    const userName = parseGmailToValidUserName(emailFromGoogle);
    const firstName = profile.getGivenName();
    const lastName = profile.getFamilyName();
    const imageUrl = profile.getImageUrl();
    trySignUp({
      email: emailFromGoogle,
      firstName,
      lastName,
      imageUrl,
      userName,
    });
  };

  return (
    <StyledForm>
      <img src={MOBILE_IMG} className="items-image" alt="decoration" />
      <h1>Sign up</h1>
      <p>Welcome! Please enter your details.</p>
      <div className="form-wrapper">
        <div className="name-wrapper">
          <BoxInput
            label="First Name"
            id="fname"
            state={fname}
            setState={setFname}
            placeHolder="first name"
          />
          <BoxInput
            label="Last Name"
            id="lname"
            state={lname}
            setState={setLname}
            placeHolder="last name"
          />
        </div>
        <BoxInput
          label="User Name"
          id="userName"
          state={userName}
          setState={setuserName}
          placeHolder="user name"
        />
        <BoxInput
          label="Email Address"
          id="email"
          state={email}
          setState={setEmail}
          placeHolder="email"
        />
      </div>
      {
                hideLoader
                  ? (
                    <>
                      <button
                        type="button"
                        id="sign-up"
                        disabled={canSignUp}
                        onClick={() => trySignUp({
                          email,
                          userName,
                          firstName: fname,
                          lastName: lname,
                        })}
                      >
                        Sign Up!
                      </button>
                      <GoogleLogin
                        className="google-button"
                        clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
                        buttonText="Sign up with google"
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
        <p>Already have an account?</p>
        <div
          type="button"
          className="clickable"
          onClick={navigateToLogin}
        >
          Sign in
        </div>
      </div>
    </StyledForm>
  );
}

export default SignUpForm;
