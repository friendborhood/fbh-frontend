import Autocomplete from 'react-google-autocomplete';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import DropDown from '../../components/drop-down';
import BoxInput from '../../components/BoxInput';
import { handleSubmitDetails } from './utils';
import { PAGES } from '../consts';
import { END_POINTS, network } from '../../network';

function AdditionalDetailsPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(['Cleaning']);
  const [imageUrl, setImageUrl] = useState('');

  const fetchUserData = async () => {
    const { userName: extractedUserName } = jwtDecode(token);
    setUserName(extractedUserName);
    const { data: userData } = await network.get(`${END_POINTS.USER}/${extractedUserName}`);
    console.log(JSON.stringify(userData));
    console.log(userData.imageUrl);
    setImageUrl(userData.imageUrl);
  };
  const fetchCategories = async () => {
    const { data: currentCategories } = await network.get(END_POINTS.CATEGORIES);
    console.log(currentCategories);
    setCategories(currentCategories);
  };
  useEffect(() => (!token
    ? navigate(PAGES.HOME, { replace: true })
    : Promise.all([fetchUserData(), fetchCategories()])), []);

  return (
    <form>
      <h3>
        {`Hello ${userName}, Wer'e happy to have you onboard. please add the following details to help us provide you the best service`}
      </h3>

      <BoxInput
        noInput
        label="Base Address"
        id="location"
      />
      <Autocomplete
        options={
          { types: ['address'] }
        }
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        onPlaceSelected={(place) => setLocation({
          address: place.formatted_address,
          geoCode: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        })}
      />
      <img alt="profile" src={imageUrl} referrerpolicy="no-referrer" width="120" height="120" />

      <Button
        style={{ marginLeft: 150 }}
        id="more-details"
        variant="contained"
        onClick={() => handleSubmitDetails({
          userName,
          favoriteCategory: category,
          location,
        })}
      >
        Submit!
      </Button>
      <DropDown options={categories} setState={setCategory} state={category} />

    </form>
  );
}

export default AdditionalDetailsPage;
