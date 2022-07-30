/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const CLOUD_NAME = 'dxjhkogtp';
  const PRESET = 'tc7nz7hr';
  const [image, setImage] = useState('');
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
  const uploadItem = async () => {
    uploadToCloudinary(image);
  };
  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={uploadItem}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img hidden={!cloudinaryUrl} alt="offer" src={image} />
      </div>
    </div>
  );
}
export default App;
