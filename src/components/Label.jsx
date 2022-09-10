/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import {
  GLOBAL_LIGHTGRAY, MOBILE_STYLE, BUTTON_RADIUS, GLOBAL_SCARLET, GLOBAL_FONT,
} from '../GlobalStyling';

export const StyledSection = styled.section`
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
    }
  }

  & input {
    border: solid ${GLOBAL_LIGHTGRAY};
    border-width:${(props) => props.border};
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

function Label(props) {
  const {
    label, borderWidth = 'BUTTON_RADIUS',
  } = props;

  return (
    <StyledSection border={borderWidth}>
      <div>{label}</div>
    </StyledSection>
  );
}

export default Label;
