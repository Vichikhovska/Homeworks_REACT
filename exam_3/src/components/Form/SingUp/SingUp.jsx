import React, { useState } from "react";

//components
import Button from "../../Button/Button";

//styles
import "../../../styles/components/form/sing-up.scss";


function SignupForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    if (username.length < 3 || username.length > 30) {
      setErrorMessage("Enter a username between 3 to 30 characters");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Enter a valid email address");
      return;
    }

    //data sent to local Storage
    const userSecond = {
      name: username,
      email: email,
      password: password
    };
  
    localStorage.setItem("user", JSON.stringify(userSecond));

    // reset
    setUsername("");
    setPassword("");
    setEmail("");
    setErrorMessage("");

    alert("Ви успішно зареєструвались. Перейдіть до форми Log In.");
    window.location.href = "/authorization";

  };

  return (
    <form onSubmit={handleSignup} className="mrvl-form-singup">
      <h2 className="mrvl-form-singup_title">Sign Up</h2>
      <input
        className="mrvl-form-singup_text"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        className="mrvl-form-singup_password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <input
        className="mrvl-form-singup_email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      <Button  className="mrvl-main-button" type="submit" text="Sign Up" />
    </form>
  );
};

export default SignupForm;