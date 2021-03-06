import React, { useState } from "react";
import "../Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.replace("/");
      })

      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/register");
      })

      .catch((e) => alert(e.message));
  };

  const backHome = (e) => {
    history.push("/");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="../images/shopper.png" alt="" />
      </Link>

      <div className="login_container">
        <h1 className="login_title">Login</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <button
            onClick={register}
            disabled={email && password.length > 6 ? false : true}
            className="login_signUpButton"
          >
            Create Shopper Account
          </button>
          <button onClick={login} type="submit" className="login_signInButton">
            Login
          </button>
        </form>
        <p>
          By creating a Shopper account you agree to Shopper's Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={backHome} className="login_back">
          Back Home
        </button>
      </div>
    </div>
  );
}

export default Login;
