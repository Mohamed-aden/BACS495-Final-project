import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./homepage/Homepage";
import Header from "./header/Header";
import Login from "./login-register-forms/Login";
import Register from "./login-register-forms/Register";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Header />
      <Login />
      <Register />
    </div>
  );
}

export default App;
