/* eslint-disable no-nested-ternary */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { isMobile } from 'react-device-detect';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
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
import Label from '../../components/Label';

const RedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: GLOBAL_SCARLET,
    '&:hover': {
      backgroundColor: alpha(GLOBAL_SCARLET, theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: GLOBAL_SCARLET,
  },
}));
function UploadOffer() {
  const CLOUD_NAME = 'dxjhkogtp';
  const PRESET = 'tc7nz7hr';
  const [condition, setCondition] = useState('');
  const [item, setItem] = useState('');
  const [itemNames, setItemNames] = useState([]);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);
  const [userLocation, setUserLocation] = useState({});
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [progressPrecent, setProgressPrecent] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [disableButton, setDisableButton] = useState(false);
  const [toRender, setToRender] = useState(true);
  const [free, setFree] = useState(false);
  const [categories, setCategories] = useState(['Other']);
  const [category, setCategory] = useState('Other');
  const navigate = useNavigate();
  const fetchCategories = async () => {
    const { data: fetchedCategories } = await network.get(END_POINTS.CATEGORIES);
    setCategories(Object.keys(fetchedCategories).map((categoryName) => categoryName));
  };
  useEffect(async () => {
    const { data: items } = await network.get(
      END_POINTS.ITEM,
      { params: { categoryName: category } },
    );
    const itemsNamesFormatted = items.map((item) => item.itemName);
    setItem(itemsNamesFormatted[0]);
    setItemNames(itemsNamesFormatted);
    setItemsArray(items);
  }, [category]);
  useEffect(() => free && setPrice('0'), [free]);
  useEffect(() => {
    if (stepOne) {
      setToRender(true);
    } else {
      setTimeout(() => {
        setToRender(false);
      }, 0);
    }
  }, [stepOne]);

  useEffect(() => Promise.all([
    fetchCategories(),
    fetchUserData({ setUserLocation }),
  ]), []);

  useEffect(() => {
    if (currentStep === 1) {
      if (item === '' || condition === '') {
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
      setDisableButton(true);
      const { id: selectedItemId } = itemsArray.find((itemObj) => itemObj.itemName === item);
      if (cloudinaryUrl && price && condition) {
        await network.post(END_POINTS.OFFERS, {
          imageUrl: cloudinaryUrl,
          itemId: selectedItemId,
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
    setDisableButton(false);
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
      <div className="main-panel" style={{ marginBottom: "20%" }}>
        {/* Step One: */}

        <div className={`single-step ${stepOne === true ? 'displayOnStart' : 'displayOff'}`} style={{ marginBottom: `${stepOne && isMobile ? '40%' : 'auto'}` }}>
          {toRender && (
            <>
              <Label
                borderWidth="1px"
                label="Select Category"
              />
              <DropDown className="item-selection on-top" options={categories} setState={setCategory} state={category} />
              <Label
                borderWidth="1px"
                label="Select Item"
              />
            </>
          )}
          {toRender && <DropDown className="item-selection on-top" options={itemNames} setState={setItem} state={item} />}
          {toRender && (
            <Label
              borderWidth="1px"
              label="Condition"
            />
          )}
          {toRender && <DropDown className="item-selection on-top" options={['Like New', 'Good', 'Used', 'Bad']} setState={setCondition} state={condition} style={{ marginBottom: '10px' }} />}
        </div>
        {/* Step Two: */}
        <div
          className={`single-step ${stepOne ? "displayNone" : (stepTwo === true ? 'displayOn' : 'displayOff')}`}
        >
          {!isUploadingImage && (
            <div className="single-field">
              <div className="field-title">Upload an image</div>
              <label htmlFor="image-upload" style={{ width: "fit-content" }}>
                {' '}
                <img src={uploadButton} alt="" />
                <input
                  type="file"
                  id="image-upload"
                  onChange={async (e) => {
                    const uploadedImage = e.target.files[0];
                    if (uploadedImage) {
                      setIsUploadingImage(true);
                      try {
                        await uploadToCloudinary(uploadedImage);
                      } catch (e) {
                        console.error(e);
                      }
                      setIsUploadingImage(false);
                    } else {
                      console.warn('no image on upload event');
                    }
                  }}
                />
              </label>
            </div>
          )}
          <FormGroup>
            <FormControlLabel control={<RedSwitch />} onChange={() => (setFree(!free))} value={free} label="Free & Friendly 😊" />
          </FormGroup>
          <BoxInput
            showLabel
            borderWidth="1px"
            label="Item's price (per day)"
            id="price"
            isHidden={free}
            state={price}
            placeHolder="Price"
            setState={setPrice}
          />
        </div>
        {stepTwo && ((
          <div
            className={`img-container ${stepTwo === true ? 'displayOn' : 'displayOff'}`}
            style={!isUploadingImage ? {
              backgroundImage: `url(${cloudinaryUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            } : {
              backgroundImage: 'url(https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif)',
              backgroundSize: `${isMobile ? '30%' : '20%'}`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        )
        )}
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
