import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/title/title";
import Header from "./components/header/header";
import MainScreen from "./components/mainScreen/mainScreen";
import Router from "./pages/router";

function App() {
  return (
    <div className="main">
      <Router />
    </div>
  );
}

export default App;
