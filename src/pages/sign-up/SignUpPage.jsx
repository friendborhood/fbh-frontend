/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { handleSignUp } from './utils';
import BoxInput from '../../components/BoxInput';
import { PAGES } from '../consts';
import 'react-toastify/dist/ReactToastify.css';
import { parseGmailToValidUserName } from '../login/utils';
import { GLOBAL_SCARLET, FORM_BOTTON_HEIGHT, BUTTON_RADIUS } from '../../GlobalStyling';

const componentWidth = '446px';

// TODO: add style to marked checkbox

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 260px;
  font-style: heebo;
  font-weight: medium;
  width: 50%;
  min-width: ${componentWidth};

  & h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 70.5px;
  }

  & p {
    size: 20px;
    font-weight: 400;
  }

  & div {
    &.form-wrapper {
      width: inherit;
      width: ${componentWidth};
      margin-bottom: 25px;
    }

    &.name-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &.terms-agree {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;
      text-decoration: underline;
      margin-bottom: 25px;
    }

    &.already-have {
      display: flex;
      flex-direction: row;
      gap: 5px;
      font-weight: 400;
    }

    &.clickable {
      color: ${GLOBAL_SCARLET};
      font-weight: 500;
    }

  }

  & button {
    width: ${componentWidth};
    background-color: ${GLOBAL_SCARLET};
    height: ${FORM_BOTTON_HEIGHT};
    border-radius: ${BUTTON_RADIUS};
    font-weight: 500;
    color: white;
    margin-bottom: 15px;
    

    &.google-button {
      box-shadow: none !important;
      border: solid black !important;
      border-radius: ${BUTTON_RADIUS} !important;
      justify-content: center !important;
    }
  }
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  height:16px;
  width: 18px;
  border: 1px solid black;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  margin-right: 4px;

  &:hover, :active, :checked:active {
    background-color: #D5D5D5;
  }

  &:checked {
  background-color: #e9ecee;
  color: #99a1a7;

  &:after {
    display:inline-block;
    content: "V";
  }
}
`;

function Form() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');

  const canSignUp = useMemo(
    () => !(email && userName && fname && lname),
    [email, userName, fname, lname],
  );

  const trySignUp = async (data) => {
    const { userName } = data;
    const successfulSignUp = await handleSignUp(data);
    if (successfulSignUp) {
      localStorage.setItem('userName', userName);
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
    }
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
        <StyledCheckbox />
        <div>{'I\'ve read and agree with terms of service.'}</div>
      </div>
      <button
        type="submit"
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
