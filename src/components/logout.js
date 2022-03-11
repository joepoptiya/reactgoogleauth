import React from "react";
import { GoogleLogout } from "react-google-login";

export default function logout() {
  const onSuccess = () => {
    console.log("LOGOUT SUCCESS!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
