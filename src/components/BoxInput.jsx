/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-style: heebo;

  & label {
    font-weight: 500, medium;
  }
`;

function BoxInput(props) {
  const {
    setState, label, id: idBox, isHidden = false, noInput,
  } = props;

  const onChangeHandler = (event) => {
    setState(event.target.value);
  };
  return (
    <StyledDiv>
      <label hidden={isHidden}>{`${label}:`}</label>
      <input
        hidden={isHidden || noInput}
        id={idBox}
        onChange={onChangeHandler}
      />
    </StyledDiv>
  );
}

export default BoxInput;
