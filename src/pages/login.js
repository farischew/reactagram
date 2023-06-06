import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";

export default function Login() {
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPasswordAddress] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  useEffect(() => {
    document.title = "Login - Reactagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Profile" />
      </div>
      <div className="flex flex-col w-2/5">
        <p>This will be the form!</p>
      </div>
    </div>
  );
}
