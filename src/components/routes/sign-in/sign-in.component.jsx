import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is sign-in page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;