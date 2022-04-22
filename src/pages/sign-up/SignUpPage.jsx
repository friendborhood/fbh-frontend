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
import { GLOBAL_SCARLET, FORM_BOTTON_HEIGHT } from '../../GlobalStyling';

const componentWidth = '446px';

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
  }

  & button {
    width: ${componentWidth} !important;
    background-color: ${GLOBAL_SCARLET};
    height: ${FORM_BOTTON_HEIGHT};
    font-weight: 500 !important;
    color: white;
    margin-bottom: 15px;
  }
`;

function Form() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  // TODO: replace to useMemo hook and check if behaves the same
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
      <div>
        <GoogleLogin
          className="my-try"
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
          buttonText="Sign up with google"
          onSuccess={successGoogleAuth}
          onFailure={(e) => console.log(e)}
          cookiePolicy="single_host_origin"
        />

      </div>
    </StyledForm>
  );
}

export default Form;
