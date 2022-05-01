/* eslint-disable import/no-named-default */

import styled from 'styled-components';
import { END_POINTS, network } from '../../../network';
import { BAD_REQUEST_CODE, UNKNOWN_SERVER_ERROR } from '../../consts';
import {
  GLOBAL_SCARLET, MOBILE_STYLE, FORM_BOTTON_HEIGHT, BUTTON_RADIUS, FORM_MARGIN_LEFT,
} from '../../../GlobalStyling';
import { default as BACKGROUND_IMG } from '../../../images/page-background-image.png';
import { displayMessage } from '../../../generic-utils/alert-message';

const COMPONENT_WIDTH = '446px';

export const handleSignUp = async (data) => {
  try {
    const { data: newUserData } = await network.post(END_POINTS.USER, data);
    console.log(`user has been added ${JSON.stringify(newUserData)}`);
    return true;
  } catch (e) {
    const toastMessage = e.response.status === BAD_REQUEST_CODE
      ? e.response.data.error : UNKNOWN_SERVER_ERROR;
    displayMessage(toastMessage);
    console.log(e);
    return false;
  }
};

export const StyledBackground = styled.div`
  position: absolute;
  background-image: url(${BACKGROUND_IMG});
  background-size: cover;
  right: 0;
  width: 50%;
  height: 100%;
  top: 0;
  bottom: 0;
  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    display: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: ${FORM_MARGIN_LEFT};
  font-style: 'heebo';
  font-weight: medium;
  width: calc(50% - ${FORM_MARGIN_LEFT});
  min-width: ${COMPONENT_WIDTH};

  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    min-width: ${MOBILE_STYLE.max_width};
    align-items: center;
    overflow-x: hidden;
  }

  & img {
    &.items-image {
      display: none;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width})
      {
        display: flex;
        background-size: cover;
        width: 390px;
        height: 155px;
      }
    }
  }

  & h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 70.5px;
  }

  & p {
    size: 20px;
    font-weight: 400;
  }

  & div {

    &.form-wrapper {
      width: inherit;
      width: ${COMPONENT_WIDTH};
      margin-bottom: 25px;
    }

    &.name-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width})
      {
        flex-direction: column;
      }
    }

    &.checkbox {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500;
      text-decoration: underline;
      margin-bottom: 25px;
    }

    &.already-have {
      display: flex;
      flex-direction: row;
      gap: 5px;
      font-weight: 400;
    }

    &.clickable {
      color: ${GLOBAL_SCARLET};
      font-weight: 500;
      background-color: white;
    }

    &.loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${COMPONENT_WIDTH};
      height: calc(${FORM_BOTTON_HEIGHT} * 2);
    }

  }

  & button {
    width: ${COMPONENT_WIDTH};
    background-color: ${GLOBAL_SCARLET};
    height: ${FORM_BOTTON_HEIGHT};
    border-radius: ${BUTTON_RADIUS};
    font-weight: 500 !important;
    color: white;
    margin-bottom: 15px;
    
    &:disabled {
      background-color: grey;
    }

    &.google-button {
      box-shadow: none !important;
      color: black !important;
      border: solid black !important;
      border-radius: ${BUTTON_RADIUS} !important;
      justify-content: center !important;
    }

    @media only screen and (max-width: ${MOBILE_STYLE.max_width})
    {
      width: ${MOBILE_STYLE.form_input_width};
      height: ${MOBILE_STYLE.form_input_height};
      & div {
        height: 100%;
        width: 30px;
        align-items: center !important;
      }
    }
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  height:16px;
  width: 16px;
  border: 2px solid black;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  flex-shrink: 0;

  &:hover, :active, :checked:active {
    background-color: #D5D5D5;
  }

  &:checked {
  background-color: #e9ecee;
  color: #99a1a7;

  &::after {
    display:inline-block;
    content: '\\2714';
  }
}
`;
