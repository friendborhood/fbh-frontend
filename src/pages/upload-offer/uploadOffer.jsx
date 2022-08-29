/* eslint-disable no-nested-ternary */
/* eslint-disable quotes */
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
import miniIcon from '../../images/mini-icon-removebg.png';
import uploadButton from '../../images/upload-img-button.svg';
import 'animate.css';

function UploadOffer() {
  const CLOUD_NAME = 'dxjhkogtp';
  const PRESET = 'tc7nz7hr';
  const [condition, setCondition] = useState('');
  const [item, setItem] = useState('');
  const [itemNames, setItemNames] = useState(['Driller']);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const [itemsMap, setItemsMap] = useState({});
  const [userLocation, setUserLocation] = useState({});
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [progressPrecent, setProgressPrecent] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
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
      if (cloudinaryUrl && price && condition) {
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
      } else {
        console.warn('No image uploaded');
        displayMessage('Please fill all the required fields');
      }
    } catch (e) {
      displayMessage(`Error uploading offer ${JSON.stringify(e.response.data)}`);
    }
  };

  const onDescriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const clickHandler = () => {
    if (currentStep === 1) {
      setStepOne(false);
      setStepTwo(true);
      setCurrentStep(2);
      setProgressPrecent(50);
    } else if (currentStep === 2) {
      setStepTwo(false);
      setStepThree(true);
      setCurrentStep(3);
      setProgressPrecent(100);
    } else if (currentStep === 3) {
      setStepThree(false);
      setCurrentStep(4);
    }
  };

  return (
    <UploadOfferStyle>
      <div className="progress-bar-container">
        <ProgressBar
          percent={progressPrecent}
          width="876px"
          filledBackground={`linear-gradient(to right, ${GLOBAL_SCARLET}, ${GLOBAL_SCARLET}`}
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="35"
                src={miniIcon}
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 30}%)` }}
                width="35"
                src={miniIcon}
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 30}%)` }}
                width="35"
                src={miniIcon}
                alt=""
              />
            )}
          </Step>
        </ProgressBar>
      </div>
      <div className="main-panel">
        {/* Step One: */}
        <div className={`single-step ${stepOne === true ? 'displayOnStart' : 'displayOff'}`}>
          <DropDown className="item-selection on-top" options={itemNames} setState={setItem} state={item} />
          <BoxInput
            borderWidth="1px"
            label="Condition"
            id="Condtion"
            state={condition}
            placeHolder="Condition"
            setState={setCondition}
          />
          <div className="description-container">
            <div className="field-title">About the item</div>
            <textarea
              className="description-input"
              id="description"
              onChange={onDescriptionChangeHandler}
              placeholder="  Describe your item"
            />
          </div>
        </div>
        {/* Step Two: */}
        <div className={`single-step ${stepOne ? "displayNone" : (stepTwo === true ? 'displayOn' : 'displayOff')}`}>
          <div className="single-field">
            <div className="field-title">Upload an image</div>
            <label htmlFor="image-upload">
              <img src={uploadButton} alt="" />
              <input
                type="file"
                id="image-upload"
                onChange={(e) => {
                  const uploadedImage = e.target.files[0];
                  if (uploadedImage) {
                    uploadToCloudinary(uploadedImage);
                  } else {
                    console.warn('no image on upload event');
                  }
                }}
              />
            </label>
          </div>
          <BoxInput
            borderWidth="1px"
            label="Item's price"
            id="price"
            state={price}
            placeHolder="Price"
            setState={setPrice}
          />
        </div>
        {/* "Next Step" Button: */}
        <button className="step" onClick={stepTwo ? uploadOffer : clickHandler}>{stepTwo ? 'Submit Offer' : 'Next Step'}</button>
        <div className="img-container">
          <img
            hidden={!cloudinaryUrl}
            style={{
              maxHeight: 400,
              maxWidth: 400,
            }}
            alt="offer"
            src={cloudinaryUrl}
          />
        </div>

      </div>
    </UploadOfferStyle>
  );
}
export default UploadOffer;
