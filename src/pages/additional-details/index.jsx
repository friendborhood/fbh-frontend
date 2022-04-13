import Autocomplete from 'react-google-autocomplete';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BoxInput from '../../components/BoxInput';
import { handleSubmitDetails } from './utils';
import { PAGES } from '../consts';
import { network } from '../../network';

function AdditionalDetailsPage() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const fetchUserData = async () => {
    const { data: { data: userData } } = await network.get(`user/${userName}`);
    console.log(JSON.stringify(userData));
    console.log(userData.imageUrl);
    setImageUrl(userData.imageUrl);
  };
  useEffect(() => (!userName ? navigate(PAGES.HOME, { replace: true }) : fetchUserData()), []);

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
      <BoxInput
        label="Favorite category"
        id="category"
        state={category}
        setState={setCategory}
      />
      <img alt="profile" src={imageUrl} referrerpolicy="no-referrer" />
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
    </form>
  );
}

export default AdditionalDetailsPage;
