import SignUpForm from '../../components/SignUpForm/SignUpForm';
import 'react-lazy-load-image-component/src/effects/blur.css';
import HalfPageImage from '../../components/HalfPageImage/HalfPageImage';

function Form() {
  return (
    <>
      <HalfPageImage />
      <SignUpForm />
    </>
  );
}

export default Form;
