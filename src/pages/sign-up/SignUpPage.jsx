/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { handleSignUp } from './utils';
import BoxInput from '../../components/BoxInput';
import { PAGES } from '../consts';
import 'react-toastify/dist/ReactToastify.css';
import { parseGmailToValidUserName } from '../login/utils';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function Form() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  // TODO: replace to useMemo hook and check if behaves the same
  const canSignUp = !(email && userName && fname && lname);

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
    <StyledForm
      id="form"
    >

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
        buttonText="Sign up with google"
        onSuccess={successGoogleAuth}
        onFailure={(e) => console.log(e)}
        cookiePolicy="single_host_origin"
      />
      <BoxInput
        label="First Name"
        id="fname"
        state={fname}
        setState={setFname}
      />
      <BoxInput
        label="Last Name"
        id="lname"
        state={lname}
        setState={setLname}
      />
      <BoxInput
        label="User Name"
        id="userName"
        state={userName}
        setState={setuserName}
      />
      <BoxInput
        label="Email Address"
        id="email"
        state={email}
        setState={setEmail}
      />
      <Button
        id="sign-up"
        disabled={canSignUp}
        variant="contained"
        onClick={() => trySignUp({
          email,
          userName,
          firstName: fname,
          lastName: lname,
        })}
      >
        Sign Up!
      </Button>
    </StyledForm>
  );
}

export default Form;
