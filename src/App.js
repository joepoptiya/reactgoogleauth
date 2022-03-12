import React from "react";
import { useEffect } from "react";

import "./App.css";

// Custom components
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";

// Google API
import { gapi } from "gapi-script";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        client: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
