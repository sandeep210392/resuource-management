import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AddResource from "./components/AddResource";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/addresource" element={AddResource} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
