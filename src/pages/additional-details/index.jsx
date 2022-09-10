import Autocomplete from 'react-google-autocomplete';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxInput, { StyledSection } from '../../components/BoxInput';
import { handleSubmitDetails } from './utils';
import { PAGES } from '../consts';
import { displayMessage } from '../../utils/handle-device-middleware';
import { StyledForm } from '../../components/SignUpForm/utils';
import HalfPageImage from '../../components/HalfPageImage/HalfPageImage';
import { fetchUserData, fetchCategories } from '../../network';
import { CategoryTag } from '../../components/Categories/CategoryTag';
import Label from '../../components/Label';

function AdditionalDetailsPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => fetchUserData({
    setUserName, setImageUrl, setPhoneNumber, setAddress, setUserLocation: setLocation,
  }), []);
  useEffect(async () => {
    const fetchedCategories = await fetchCategories();
    const formattedCategories = Object.entries(fetchedCategories).map(([name, url]) => ({
      name,
      url,
    }));
    setCategories(formattedCategories);
    const categoriesSelected = {};
    if (!localStorage.getItem('selectedCategories')) {
      formattedCategories.forEach(
        (category) => { categoriesSelected[category.name] = true; },
      );
      localStorage.setItem('selectedCategories', JSON.stringify(categoriesSelected));
    }
  }, []);
  useEffect(async () => {
    // eslint-disable-next-line max-len
    const tagElements = categories.map(({ name, url }) => <CategoryTag name={name} icon={url} key={name} />);
    setTags(tagElements);
  }, [categories]);

  const selectedCategories = () => JSON.parse(localStorage.getItem('selectedCategories'));

  return (
    <>
      <HalfPageImage />
      <StyledForm style={{ gap: '5px' }}>
        <h1>Personal Info</h1>
        <div hidden={!imageUrl}>
          <h2 className="sub-headline">Profile Picture</h2>
          <img
            className="user-icon"
            alt="profile"
            src={imageUrl}
            referrerpolicy="no-referrer"
            width="120"
            height="120"
          />
        </div>
        <BoxInput
          showLabel
          label="Phone Number"
          id="phoneNumber"
          state={phoneNumber}
          setState={setPhoneNumber}
          placeHolder="Phone Number"
        />
        <Label label="Address" />

        <StyledSection>
          <Autocomplete
            options={
              { types: ['address'] }
            }
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
              setAddress(place.address);
              setLocation({
                address: place.formatted_address,
                geoCode: {
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                },
              });
            }}
          />
        </StyledSection>
        <h2 className="sub-headline">Favorite Categories</h2>
        <div className="categories">
          {tags}
        </div>
        <button
          type="button"
          variant="contained"
          disabled={!phoneNumber || !location}
          onClick={async () => {
            const response = await handleSubmitDetails({
              phoneNumber,
              userName,
              location,
              favoriteCategory: selectedCategories(),
            });
            if (response.status === 200) {
              navigate(PAGES.DASHBOARD);
            } else {
              displayMessage(response);
            }
          }}
        >
          Submit!
        </button>
      </StyledForm>
    </>
  );
}

export default AdditionalDetailsPage;
