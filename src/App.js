import React from "react";
import './App.css';
import Welcome from "./Welcome.js";
import Login from "./Login.js";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }

  return (
    <CookiesProvider>
      <div>
        {cookies.user ? (
          <Welcome user={cookies.user} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </CookiesProvider>
  );
}

export default App;