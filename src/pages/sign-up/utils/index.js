import { toast } from 'react-toastify';
import styled from 'styled-components';
import { END_POINTS, network } from '../../../network';
import { BAD_REQUEST_CODE, UNKNOWN_SERVER_ERROR } from '../../consts';
import {
  GLOBAL_SCARLET, FORM_BOTTON_HEIGHT, BUTTON_RADIUS, FORM_MARGIN_LEFT,
} from '../../../GlobalStyling';

const COMPONENT_WIDTH = '446px';

export const handleSignUp = async (data) => {
  try {
    const { data: newUserData } = await network.post(END_POINTS.USER, data);
    console.log(`user has been added ${JSON.stringify(newUserData)}`);
    return true;
  } catch (e) {
    const toastMessage = e.response.status === BAD_REQUEST_CODE
      ? e.response.data.error : UNKNOWN_SERVER_ERROR;
    toast(toastMessage);
    console.log(e);
    return false;
  }
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: ${FORM_MARGIN_LEFT};
  font-style: heebo;
  font-weight: medium;
  width: 50%;
  min-width: ${COMPONENT_WIDTH};

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
      width: ${COMPONENT_WIDTH};
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
