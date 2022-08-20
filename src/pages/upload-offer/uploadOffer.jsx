/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import BoxInput from '../../components/BoxInput';
import DropDown from '../../components/drop-down';
import { END_POINTS, fetchUserData, network } from '../../network';
import { displayMessage } from '../../utils/handle-device-middleware';
import 'react-step-progress-bar/styles.css';
import { GLOBAL_SCARLET } from '../../GlobalStyling';
import { UploadOfferStyle } from './uploadOfferStyle';

function UploadOffer() {
  const CLOUD_NAME = 'dxjhkogtp';
  const PRESET = 'tc7nz7hr';
  const [condition, setCondition] = useState('');
  const [image, setImage] = useState('');
  const [item, setItem] = useState('');
  const [itemNames, setItemNames] = useState(['Driller']);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const [itemsMap, setItemsMap] = useState({});
  const [userLocation, setUserLocation] = useState({});

  const swapKeysAndValues = (obj) => {
    const swapped = Object.entries(obj).map(
      ([key, value]) => [value.itemName, key],
    );

    return Object.fromEntries(swapped);
  };
  const fetchItems = async () => {
    const { data: currentItems } = await network.get(END_POINTS.ITEM);
    const itemsNamesFormatted = Object.values(currentItems).map((item) => item.itemName);
    setItemNames(itemsNamesFormatted);
    const itemsFormattedForMapping = swapKeysAndValues(currentItems);
    setItemsMap(itemsFormattedForMapping);
  };

  useEffect(() => Promise.all([
    fetchItems(),
    fetchUserData({ setUserLocation }),
  ]), []);

  const uploadToCloudinary = async (base64Image) => {
    const data = new FormData();
    data.append('file', base64Image);
    data.append('upload_preset', PRESET);
    data.append('cloud_name', CLOUD_NAME);
    const { data: cloudinaryResponse } = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data);
    const { secure_url: cloudinaryUrlResult } = cloudinaryResponse;
    setCloudinaryUrl(cloudinaryUrlResult);
  };
  const uploadOffer = async () => {
    try {
      await uploadToCloudinary(image);
      await network.post(`${END_POINTS.OFFERS}`, {
        imageUrl: cloudinaryUrl,
        itemId: itemsMap[item],
        priceAsked: price,
        description,
        condition,
        state: 'Available',
        location: userLocation,
      });
      displayMessage('Offer uploaded successfully');
    } catch (e) {
      displayMessage(`Error uploading offer ${JSON.stringify(e.response.data)}`);
    }
  };
  return (
    <UploadOfferStyle>
      <div className="progress-bar-container">
        <ProgressBar
          percent={23}
          width="60vw"
          filledBackground={`linear-gradient(to right, ${GLOBAL_SCARLET}, ${GLOBAL_SCARLET}`}
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                alt=""
              />
            )}
          </Step>
        </ProgressBar>
      </div>
      <div className="main-panel">
        <DropDown className="item-selection" options={itemNames} setState={setItem} state={item} />
      </div>
      {/* h1>Upload an offer</h1>
      <div>
        <h4>Select an item</h4>
        <DropDown options={itemNames} setState={setItem} state={item} />
        <BoxInput
          label="Condition"
          id="Condtion"
          state={condition}
          placeHolder="Condition"
          setState={setCondition}
        />
        <BoxInput
          label="Description"
          id="description"
          state={description}
          placeHolder="description"
          setState={setDescription}
        />
        <BoxInput
          label="Price"
          id="price"
          state={price}
          placeHolder="Price"
          setState={setPrice}
        />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={uploadOffer}>Upload</button>

      </div>
      <div>

        <img hidden={!image} alt="offer" src={image} />
      </div> */}
    </UploadOfferStyle>
  );
}
export default UploadOffer;
