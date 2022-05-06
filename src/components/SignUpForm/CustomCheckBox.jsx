import { StyledCheckbox } from './utils';

function CustomCheckBox(props) {
  const { isChecked, setIsChecked } = props;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledCheckbox
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
}

export default CustomCheckBox;
