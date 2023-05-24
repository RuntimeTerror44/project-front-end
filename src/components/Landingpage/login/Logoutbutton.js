import React, { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = React.forwardRef((props, ref) => {
  //////// handle button click from landing page
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    buttonRef.current.click();
  };
  React.useImperativeHandle(ref, () => ({
    handleButtonClick,
  }));

  //////////
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        style={{ display: "none" }}
        ref={buttonRef}
        onClick={() => logout()}
      >
        Sign Out
      </button>
    )
  );
});

export default LogoutButton;
