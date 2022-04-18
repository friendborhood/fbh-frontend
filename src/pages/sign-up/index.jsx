/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import { handleSignUp } from './utils';
import BoxInput from '../../components/BoxInput';
import { PAGES } from '../consts';
import 'react-toastify/dist/ReactToastify.css';
import { parseGmailToValidUserName } from '../login/utils';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Form() {
  const color = '#5F9EA0';
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const canSignUp = !(email && userName && fname && lname);

  const trySignUp = async (data) => {
    const { userName } = data;
    const successfulSignUp = await handleSignUp(data);
    if (successfulSignUp) {
      localStorage.setItem('userName', userName);
      navigate(PAGES.ADDITIONAL_DETAILS, { replace: true });
    } else {
      setLoading(false);
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
    <form
      id="form"
      className="basis-full border-8 border-green-900 rounded-lg border-double"
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
        margin="mt-6"
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
        margin="mb-6"
      />
      <Button
        style={{ marginLeft: 150 }}
        id="sign-up"
        disabled={canSignUp}
        variant="contained"
        onClick={() => {
          setLoading(!loading);
          trySignUp({
            email,
            userName,
            firstName: fname,
            lastName: lname,
          });
        }}
      >
        Sign Up!
      </Button>
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </form>
  );
}

export default Form;
