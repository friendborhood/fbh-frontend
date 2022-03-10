import BoxInput from "./BoxInput";
import { useState } from "react";
function Form(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      id="form"
      className="basis-full border-8 border-green-900 rounded-lg border-double"
    >
      <BoxInput
        label="First Name"
        id="fname"
        state={fname}
        setState={setFname}
        margin="mt-6"
      />
      <BoxInput
        label="Last Name"
        id="lname"
        state={lname}
        setState={setLname}
      />
      <BoxInput
        label="Username"
        id="username"
        state={username}
        setState={setUsername}
      />
      <BoxInput
        label="Email Address"
        id="email"
        state={email}
        setState={setEmail}
        margin="mb-6"
      />
    </form>
  );
}

export default Form;
