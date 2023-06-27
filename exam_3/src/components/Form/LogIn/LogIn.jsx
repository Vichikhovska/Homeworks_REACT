import React, { useState } from "react";

//components
import Button from "../../Button/Button";

//styles
import "../../../styles/components/form/log-in.scss";

function LoginForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.length < 3 || username.length > 30) {
      setErrorMessage("Enter a username between 3 to 30 characters");
      return;
    }

    //data sent to local Storage
    const user = {
      name: username,
      password: password
    };
  
    localStorage.setItem("user", JSON.stringify(user));

    // reset
    setUsername("");
    setPassword("");
    setErrorMessage("");

    window.location.href = "/";
  };

  return (
    <form onSubmit={handleLogin} className="mrvl-form-login">
      <h2 className="mrvl-form-login_title">Log In</h2>
      <input
        className="mrvl-form-login_text"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        className="mrvl-form-login_password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      <Button text="Log In" type="submit"/>
    </form>
  );
};

export default LoginForm;