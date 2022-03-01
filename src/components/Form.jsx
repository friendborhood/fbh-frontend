import BoxInput from './BoxInput';

const Form = () => {
    return(
        <div id='form' className="basis-full border-8 border-green-900 rounded-lg border-double">
        <h1 style={{color: 'green', textAlign: 'center', fontSize: '30px' }} className="basis-full">Sign Up </h1>
        <BoxInput label="First Name" id="fname" margin="mt-6"/>
        <BoxInput label="Last Name" id="lname"/>
        <BoxInput label="Username" id="username"/>
        <BoxInput label="Email Address" id="email" margin="mb-6"/>
        </div>
    );
}

export default Form;