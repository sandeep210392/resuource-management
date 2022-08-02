import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

// import Home from "./components/Home";
import AddResource from "./components/AddResource";
import Header from "./components/Header";
import Home from "./components/Home";
// import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/addresource" element={<AddResource />} />
    </Routes>
  </BrowserRouter>
);

export default App;
