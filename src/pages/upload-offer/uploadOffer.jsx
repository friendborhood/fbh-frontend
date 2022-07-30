/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BoxInput from '../../components/BoxInput';
import DropDown from '../../components/drop-down';
// import DropDown from '../../components/drop-down';
import { END_POINTS, network } from '../../network';
import { displayMessage } from '../../utils/handle-device-middleware';

function UploadOffer() {
  const CLOUD_NAME = 'dxjhkogtp';
  const PRESET = 'tc7nz7hr';
  const [image, setImage] = useState('');
  const [item, setItem] = useState('');
  const [itemNames, setItemNames] = useState(['Driller']);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const [itemsMap, setItemsMap] = useState({});

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

  useEffect(async () => {
    fetchItems();
  }, []);

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
        condition: 'string',
        state: 'string',
        location: {
          address: 'string',
          geoCode: {
            lat: 32.05922334509145,
            lng: 34.76625321109972,
          },
        },
      });
      displayMessage('Offer uploaded successfully');
    } catch (e) {
      console.error(`Error uploading offer ${JSON.stringify(e.response.data)}`);
    }
  };
  return (
    <div>
      <h1>Upload an offer</h1>
      <div>
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
        <DropDown options={itemNames} setState={setItem} state={item} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={uploadOffer}>Upload</button>

      </div>
      <div>

        <img hidden={!image} alt="offer" src={image} />
      </div>
    </div>
  );
}
export default UploadOffer;
