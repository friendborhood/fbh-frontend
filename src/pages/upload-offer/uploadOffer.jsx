import React, { useState } from 'react';
import BoxInput from '../../components/BoxInput';
import { network, END_POINTS } from '../../network';

const convertToBase64 = (file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    resolve(fileReader.result);
  };
  fileReader.onerror = (error) => {
    reject(error);
  };
});
function UploadOffer() {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [fileToShow, setFileToShow] = useState('');

  const changeHandler = async (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setIsSelected(true);
    console.log(base64);
    setFileToShow(base64);
  };

  const handleSubmission = async () => {
    let status = 500;
    try {
      ({ status } = await network.post(`${END_POINTS.OFFERS}`, {
        imageBase64: fileToShow,
        itemId: '038840e1-3f62-4e35-a88d-781a691fe358',
        priceAsked: 60,
        categoryName: 'Cleaning',
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
      }));
    } catch (e) {
      console.log(e);
    }
    alert('uploaded to backend, stauts is', status);
  };

  return (
    <div>
      <img
        max-width={500}
        max-height={500}
        hidden={!isSelected}
        src={fileToShow}
        alt="file"
      />
      <BoxInput
        label="Offer Description"
        id="pinCode"
        state={description}
        setState={setDescription}
        placeHolder="Describe the item..."
      />
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>
            Filename:
            {' '}
            {selectedFile.name}
          </p>
          <p>
            Filetype:
            {' '}
            {selectedFile.type}
          </p>
          <p>
            Size in bytes:
            {' '}
            {selectedFile.size}
          </p>
          <p>
            lastModifiedDate:
            {' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button disabled={!isSelected} type="button" onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
export default UploadOffer;
