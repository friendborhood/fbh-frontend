import Autocomplete from 'react-google-autocomplete';
import React, { useState } from 'react';
import BoxInput from '../../components/BoxInput';

function AdditionalDetailsPage() {
  const userName = localStorage.getItem('fullName');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  return (
    <form>
      <h3>
        {`Hello ${userName}, Wer'e happy to have you onboard. please add the following details to help us provide you the best service`}
      </h3>

      <BoxInput
        noInput
        label="Base Address"
        id="location"
        state={location}
        setState={setLocation}
      />
      <Autocomplete
        options={
          { types: ['address'] }
        }
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        onPlaceSelected={(place) => console.log(place)}
      />
      <BoxInput
        label="Favorite category"
        id="category"
        state={category}
        setState={setCategory}
      />
    </form>
  );
}

export default AdditionalDetailsPage;
