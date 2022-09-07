/* eslint-disable no-nested-ternary */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { isDesktop, isMobile } from 'react-device-detect';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import BoxInput from '../../components/BoxInput';
import DropDown from '../../components/drop-down';
import { END_POINTS, fetchUserData, network } from '../../network';
import { displayMessage } from '../../utils/handle-device-middleware';
import 'react-step-progress-bar/styles.css';
import { GLOBAL_SCARLET, LOADER_PARAMS } from '../../GlobalStyling';
import { UploadOfferStyle } from './uploadOfferStyle';
import miniIcon from '../../images/mini-icon-removebg.png';
import uploadButton from '../../images/upload-img-button.svg';
import { PAGES } from '../consts';

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
  const [disableButton, setDisableButton] = useState(false);
  const [toRender, setToRender] = useState(true);
  const navigate = useNavigate();

  const fetchItems = async () => {
    const { data: currentItems } = await network.get(END_POINTS.ITEM);
    const itemsNamesFormatted = currentItems.map((item) => item.itemName);
    setItemNames(itemsNamesFormatted);
    setItemsMap(currentItems);
  };

  useEffect(() => {
    console.log('here');
    if (stepOne) {
      setToRender(true);
    } else {
      setTimeout(() => {
        setToRender(false);
      }, 0);
    }
  }, [stepOne]);

  useEffect(() => Promise.all([
    fetchItems(),
    fetchUserData({ setUserLocation }),
  ]), []);

  useEffect(() => {
    if (currentStep === 1) {
      if (item === '' || condition === '' || description === '' || description.length <= 3) {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    } else if (currentStep === 2) {
      if (price === '' || cloudinaryUrl === '') {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    } else if (currentStep === 3) {
      setProgressPrecent(66.8);
      setStepTwo(false);
      setStepThree(true);
      setTimeout(() => {
        setProgressPrecent(100);
        setStepThree(false);
        setCurrentStep(4);
      }, 1200);
    } else if (currentStep === 4) {
      setTimeout(() => {
        navigate(PAGES.DASHBOARD, { replace: true });
      }, 500);
    }
  }, [currentStep, condition, description, price, cloudinaryUrl]);

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
        setCurrentStep(3);
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
      setProgressPrecent(33.4);
    } else if (currentStep === 2) {
      setStepTwo(false);
      setStepThree(true);
      setCurrentStep(3);
    }
  };

  return (
    <UploadOfferStyle>
      <div className="progress-bar-container">
        <ProgressBar
          percent={progressPrecent}
          width={isMobile ? '280px' : '876px'}
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
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
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
          {toRender && <DropDown className="item-selection on-top" options={itemNames} setState={setItem} state={item} />}
          { toRender && (
          <BoxInput
            borderWidth="1px"
            label="Condition"
            id="Condtion"
            state={condition}
            placeHolder="Condition"
            setState={setCondition}
          />
          )}
          {toRender && (
          <div className="description-container">
            <div className="field-title">About the item</div>
            <textarea
              className="description-input"
              id="description"
              onChange={onDescriptionChangeHandler}
              placeholder="  Describe your item"
            />
          </div>
          )}
        </div>
        {/* Step Two: */}
        <div
          className={`single-step ${stepOne ? "displayNone" : (stepTwo === true ? 'displayOn' : 'displayOff')}`}
        >
          <div className="single-field">
            <div className="field-title">Upload an image</div>
            <label htmlFor="image-upload" style={{ width: "fit-content" }}>
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
        <div
          className={`img-container ${stepTwo === true ? 'displayOn' : 'displayOff'}`}
          style={{
            backgroundImage: `url(${cloudinaryUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        {/* Step Three */}
        <div className={`single-step ${stepOne || stepTwo ? "displayNone" : (stepThree === true ? 'displayOn' : 'displayOff')}`}>
          <p style={{ "font-weight": 500 }}>Uploading your offer...</p>
        </div>
        <div className={`single-step ${stepOne || stepTwo || stepThree ? "displayNone" : (currentStep === 4 ? 'displayOn' : 'displayOff')}`}>
          <p>Navigating to homepage...</p>
        </div>
        {/* "Next Step" Button: */}
        {currentStep < 3 ? (
          <button
            className="step"
            onClick={stepTwo ? uploadOffer : clickHandler}
            disabled={disableButton}
          >
            {stepTwo ? 'Submit Offer' : 'Next Step'}
          </button>
        )
          : (
            <div className="loader-container">
              <TailSpin
                color={LOADER_PARAMS.color}
                height={LOADER_PARAMS.height}
                width={LOADER_PARAMS.width}
              />
            </div>
          )}

      </div>
    </UploadOfferStyle>
  );
}
export default UploadOffer;
