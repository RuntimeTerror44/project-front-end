import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css"; //
import "@fortawesome/fontawesome-free/css/all.min.css"; //
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

/*------------------- this is for redirect after login---------------------*/
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : (window.location.href = "http://localhost:3000/profile")
  );
};
/*-------------------------------------------------------------------------*/
ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
