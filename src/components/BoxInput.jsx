/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { GLOBAL_LIGHTGRAY, BUTTON_RADIUS } from '../GlobalStyling';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  font-style: heebo;
  margin-top: 10px;
  max-width: 446px;

  & div {
    font-weight: 500;
  }

  & input {
    border: solid ${GLOBAL_LIGHTGRAY};
    border-radius: ${BUTTON_RADIUS};
    min-width: 218px;
    padding: 4px;
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
