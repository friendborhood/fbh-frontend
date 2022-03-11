/* eslint-disable jsx-a11y/label-has-associated-control */
function BoxInput(props) {
  const {
    setState, margin, label, id,
  } = props;
  const def = 'border-solid border-2 border-green-700 rounded-md';
  const focus = 'focus:outline-none focus:border-green-800 focus:shadow-inner focus:shadow-green-900';
  const hover = 'hover:border-green-700';
  const hoverShadow = 'hover:shadow-inner hover:shadow-green-800';
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };
  return (
    <div className={`flex justify-between w-80 my-3 mx-8 ${margin}`}>
      <label>
        {label}
        :
        {' '}
      </label>
      <input
        id
        onChange={onChangeHandler}
        className={`${def} ${hover} ${focus} ${hoverShadow}`}
      />
    </div>
  );
}

export default BoxInput;
