import { useState, useContext, React } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { userContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  console.log(formFields);

  const { setCurrentUser } = useContext(userContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
