import firebase from "firebase/app";
import "./Login.css";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Navbar/Navbar";
const Login = () => {
    
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    Cpassword: "",
    photo: "",
    error: "",
    success: false,
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };
  const handleChange = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = /\d{1}/.test(e.target.value) && e.target.value.length > 6;
    }
    if (e.target.name === "Cpassword") {
      isFormValid = /\d{1}/.test(e.target.value) && e.target.value.length > 6;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email };
          setLoggedInUser(signedInUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {})
      .catch((error) => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };
    return (
      <div>
        <Navbar></Navbar>
        <div className="form">
          <h2>{newUser ? "Create an account" : "Log In"}</h2>
          <form onSubmit={handleSubmit}>
            <span style={{ color: "red", fontSize: "14px" }}>{user.error}</span>
            {user.success && (
              <span style={{ color: "green", fontSize: "14px" }}>
                User {newUser ? "created" : "Logged In"} successfully
              </span>
            )}
            <br />
            {newUser && (
              <input
                type="text"
                onBlur={handleChange}
                className="input-field"
                name="name"
                placeholder="Name"
              />
            )}
            <br />
            <input
              type="text"
              onBlur={handleChange}
              className="input-field"
              name="email"
              placeholder="Username or Email"
              required
            />
            <br />
            <input
              type="password"
              onBlur={handleChange}
              className="input-field"
              name="password"
              placeholder="Password"
              required
            />

            {newUser && (
              <input
                type="password"
                onBlur={handleChange}
                className="input-field"
                name="Cpassword"
                placeholder="Confirm Password"
                required
              />
            )}

            <input
              type="submit"
              className="input-submit"
              value={newUser ? "Sign Up" : "Log In"}
            />
          </form>

          <button className="input-google" onClick={handleGoogleSignIn}>
            <FontAwesomeIcon className="google" icon={faGoogle} />
            Sign In with Google
          </button>
          <br />
          <input
            className="input-check"
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id=""
          />
          <label htmlFor="newUser">New user Sign Up</label>
          <br />
        </div>
      </div>
    );
};

export default Login;
