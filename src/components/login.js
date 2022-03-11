import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "436001671182-fihooedj7hn8ehv484p3aluf5ei7iioq.apps.googleusercontent.com";

export default function login() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILURE! res: ", res);
  };

  return (
    <div id="signInButton">
      <h2>[{process.env.GOOGLE_CLIENT_ID}]</h2>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        buttonText="Login"
      />
    </div>
  );
}
