import React, { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";
import { propTypes } from "react-bootstrap/esm/Image";

const LoginButton = React.forwardRef((props, ref) => {
  //////// handle button click from landing page
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    buttonRef.current.click();
  };
  React.useImperativeHandle(ref, () => ({
    handleButtonClick,
  }));

  ///////

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
        <button
          style={{ display: "none" }}
          ref={buttonRef}
          onClick={() => loginWithRedirect()}
        >
          SignIn
        </button>
      </>
    )
  );
});

export default LoginButton;
