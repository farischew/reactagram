import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

export default function Login() {
  const navigation = useNavigate();

  const { firebase } = useContext(FirebaseContext);

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  useEffect(() => {
    document.title = "Signup - Reactagram";
  }, []);

  const signupHandler = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(userName);

    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: userName,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: userName.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          avatarSrc:
            "https://firebasestorage.googleapis.com/v0/b/reactagram3.appspot.com/o/avatars%2Fdefault.png?alt=media&token=da4c1bb9-18ee-4d31-8575-bb658085fcbf",
          dateCreated: Date.now(),
        });

        navigation(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setUserName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("This username is taken, please choose another");
    }

    try {
    } catch (error) {}
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Profile" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text.xs text-red-primary">{error}</p>}

          <form onSubmit={signupHandler} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUserName(target.value)}
              value={userName}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email Address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="text"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign Up
            </button>
          </form>

          <div className="flex justify-content items-center flex-col text-sm text-black border border-gray-primary rounded mb-2 mt-2 py-4">
            <p className="text-sm">
              Have an account?{" "}
              <Link to="/login" className="font-bold text-blue-medium">
                Login
              </Link>
            </p>
          </div>
          <div className="flex justify-content items-center flex-col text-sm text-black border border-gray-primary rounded mb-2 mt-2 py-4 px-2">
            <p className="text-sm">
              Disclaimer: This is just a conceptual mock up of Instagram by
              Faris Chew. It is not in any way intended for real use and no
              personal data given will be recorded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
