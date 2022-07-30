/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState } from 'react';
import BoxInput from '../../components/BoxInput';
import { END_POINTS, network } from '../../network';

function UploadOffer() {
  const CLOUD_NAME = 'dxjhkogtp';
  const PRESET = 'tc7nz7hr';
  const [image, setImage] = useState('');
  const [itemId, setItemId] = useState('');
  const [description, setDescription] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const uploadToCloudinary = async (base64Image) => {
    const data = new FormData();
    data.append('file', base64Image);
    data.append('upload_preset', PRESET);
    data.append('cloud_name', CLOUD_NAME);
    const { data: cloudinaryResponse } = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data);
    const { secure_url: cloudinaryUrlResult } = cloudinaryResponse;
    alert(cloudinaryUrlResult);
    setCloudinaryUrl(cloudinaryUrlResult);
  };
  const uploadOffer = async () => {
    uploadToCloudinary(image);
    try {
      await network.post(`${END_POINTS.OFFERS}`, {
        imageUrl: cloudinaryUrl,
        itemId,
        priceAsked: 60,
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
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Upload an offer</h1>
      <div>
        <BoxInput
          label="Item Id"
          id="itemName"
          state={itemId}
          placeHolder="item id"
          setState={setItemId}
        />
        <BoxInput
          label="Description"
          id="description"
          state={setDescription}
          placeHolder="description"
          setState={setItemId}
        />
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
