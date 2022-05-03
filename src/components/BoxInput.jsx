/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {
  GLOBAL_LIGHTGRAY, MOBILE_STYLE, BUTTON_RADIUS, GLOBAL_SCARLET, GLOBAL_FONT,
} from '../GlobalStyling';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  font-style: ${GLOBAL_FONT};
  margin-top: 10px;
  max-width: 446px;

  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    width: 100%;
  }
  
  & div {
    font-weight: 500;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width})
    {
      display: none;
    }
  }

  & input {
    border: solid ${GLOBAL_LIGHTGRAY};
    border-radius: ${BUTTON_RADIUS};
    min-width: 218px;
    padding: 4px;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width})
    {
      width: ${MOBILE_STYLE.form_input_width};
      height: ${MOBILE_STYLE.form_input_height};
      align-self: center;
    }

    &:focus {
      border-color: ${GLOBAL_SCARLET};
      outline: ${GLOBAL_SCARLET};
      outline-color: none;
    }
  }
`;

function BoxInput(props) {
  const {
    setState, label, id: idBox, isHidden = false, noInput,
    placeHolder,
  } = props;

  const onChangeHandler = (event) => {
    setState(event.target.value);
  };

  return (
    <StyledSection>
      <div hidden={isHidden}>{label}</div>
      <input
        hidden={isHidden || noInput}
        id={idBox}
        onChange={onChangeHandler}
        placeholder={`Enter your ${placeHolder}`}
      />
    </StyledSection>
  );
}

export default BoxInput;
