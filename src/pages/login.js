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

  return <h1>Hello</h1>;
}
