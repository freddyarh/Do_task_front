import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { startGoogleLogin, startFacebookLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui);

  const [formValue, handleInputChange] = useForm({
    email: "test1@gmail.com",
    password: "123456",
  });

  const { email, password } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  };

  return (
    <div>
      <h3 className="auth__title"> Login </h3>{" "}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          autoComplete="off"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>
          Login{" "}
        </button>
        <div className="auth__social-networks">
          <p>
            {" "}
            <b> Login with social network </b>
          </p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg"
                alt="google button"
              />
            </div>{" "}
            <p className="btn-text">
              <b> Sign in with google </b>{" "}
            </p>{" "}
          </div>{" "}
          <div className="google-btn" onClick={handleFacebookLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                alt="google button"
              />
            </div>{" "}
            <p className="btn-text">
              <b> Sign in with facebook </b>{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <Link to="/auth/register" className="link">
          Create new account{" "}
        </Link>
      </form>{" "}
    </div>
  );
};
