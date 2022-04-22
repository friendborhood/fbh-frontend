/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { handleSignUp, StyledCheckbox, StyledForm } from './utils';
import BoxInput from '../../components/BoxInput';
import { PAGES } from '../consts';
import 'react-toastify/dist/ReactToastify.css';
import { parseGmailToValidUserName } from '../login/utils';

// TODO: add style to marked checkbox

function Form() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [email, setEmail] = useState('');

  const canSignUp = useMemo(
    () => !(email && userName && fname && lname && acceptedTerms),
    [email, userName, fname, lname, acceptedTerms],
  );

  const trySignUp = async (data) => {
    const { userName } = data;
    console.log(userName);
    const successfulSignUp = await handleSignUp(data);
    if (successfulSignUp) {
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
    }
  };

  const navigateToLogin = () => {
    navigate(PAGES.LOGIN);
  };
  const handleCheckboxChange = () => { setAcceptedTerms(!acceptedTerms); };
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
      <div className="terms-agree">
        <StyledCheckbox
          checked={acceptedTerms}
          onChange={handleCheckboxChange}
        />
        <div>{'I\'ve read and agree with terms of service.'}</div>
      </div>
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

export default Form;
