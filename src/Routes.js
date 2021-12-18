import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Userquery from "./pages/Userquery";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cadastro" element={<Register />}></Route>
      <Route path="/consulta" element={<Userquery />}></Route>
    </Routes>
  );
}
