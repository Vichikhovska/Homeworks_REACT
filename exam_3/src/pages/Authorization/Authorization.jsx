import React from "react";

//components
import LoginForm from "../../components/Form/LogIn/LogIn";
import SignupForm from "../../components/Form/SingUp/SingUp.jsx";

//styles
import "../../styles/components/form/authorization.scss";

function Forms () {
  return (
    <div className="mrvl-forms">
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default Forms;
