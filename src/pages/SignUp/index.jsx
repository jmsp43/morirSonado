import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [passMatch, setPassMatch] = useState("");
  const [validPassMatch, setValidPassMatch] = useState(false);
  const [passMatchFocus, setPassMatchFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (emailRef.current != undefined) {
      emailRef.current.focus();
    }
  }, [email]);

  useEffect(() => {
    let valid = false;
    console.log(email);
    if (email.includes("@") && email.includes(".") && email.length >= 5) {
      valid = true;
      setValidEmail(valid);
      console.log(email);
    }
  }, [email]);

  useEffect(() => {
    let valid = false;
    if (password.length >= 8) {
      valid = true;
      setValidPassword(valid);
      const match = password === passMatch;
      setPassMatch(match);
    }
  }, [password, passMatch]);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password, passMatch]);

  return (
    <div>
      <div className="belowNav">
        <h1>Register for a new account</h1>
        <h2>Join the family!</h2>
        <h4
          ref={errorRef}
          className={errorMsg ? "errorMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMsg}
        </h4>
        <br />

        <form>
          <label htmlFor="email">
            Email:
            <span className={validEmail ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validEmail || !email ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
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
            //will tell users using screen readers if email is valid befor submission of form
            aria-invalid={validEmail ? "false" : "true"}
            //when email field selected
            onFocus={() => setEmailFocus(true)}
            //when email field de-selected
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
            Emails must be at least 5 characters long and contain both an @
            symbol and a period.
          </p>

          <br />

          <label htmlFor="password">
            Password:
            <span className={validPassword ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPassword || !password ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            id="password"
            required
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
            Passwords must be at least 8 characters!
          </p>
          <br />

          <label htmlFor="passMatch">
            Confirm Password:
            <span className={validPassMatch && passMatch ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPassMatch || !passMatch ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            id="passMatch"
            required
            onChange={(event) => {
              event.preventDefault();
              setPassMatch(event.target.value);
            }}
            aria-invalid={validPassMatch ? "false" : "true"}
            onFocus={() => setPassMatchFocus(true)}
            onBlur={() => {
              setPassMatchFocus(false);
            }}
            aria-describedby="passMatchNote"
          />
          <p
            id="passMatchNote"
            className={
              passMatchFocus && !passMatch ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Passwords must match!
          </p>

          <button disabled = {!validEmail || !validPassword || !validPassMatch ? true : false}>Sign Up</button>
        </form>

        <p>Already Registered?</p>
        <Link to = '/login'>Login here</Link>
      </div>
    </div>
  );
}

export default SignUp;
