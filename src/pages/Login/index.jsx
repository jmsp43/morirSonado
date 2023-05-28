import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Login() {

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    
  }

  return (
    <div className="homePageCont">
      <h1>Log in</h1>
      <h2>Bienvenidos de nuevo!</h2>
      <div className="belowNav">
        <h4
          ref={errorRef}
          className={errorMsg ? "errorMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMsg}
        </h4>
        <br />

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <FontAwesomeIcon
              icon={faCheck}
              className={validEmail ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validEmail || !email ? "hide" : "invalid"}
            />
          </label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            required
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
            autoComplete="off"
            aria-invalid={validEmail ? "false" : "true"}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => {
              setEmailFocus(false);
            }}
            aria-describedby="emailNote"
          />
          <p
            id="emailNote"
            className={emailFocus && !validEmail ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Wrong email.
          </p>

          <br />

          <label htmlFor="password">
            Password:
            <FontAwesomeIcon
              icon={faCheck}
              className={validPassword ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validPassword || !password ? "hide" : "invalid"}
            />
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(event) => {
              event.preventDefault();
              setPassword(event.target.value);
            }}
            aria-invalid={validPassword ? "false" : "true"}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => {
              setPasswordFocus(false);
            }}
            aria-describedby="passNote"
          />
          <p
            id="passNote"
            className={
              passwordFocus && !validPassword ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Wrong password.
          </p>
          <br />

          <br />
          <button disabled={!validEmail || !validPassword ? true : false}>
            Log in
          </button>
        </form>

        <p>New here?</p>

        <Link to="/signup" className="link">Register for a New Account</Link>
      </div>
    </div>
  );
}

export default Login;
