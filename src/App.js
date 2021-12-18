import React from "react";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <div className="container top-space">
          <Routes></Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
