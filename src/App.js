import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import WarehousePage from "./components/WarehousePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehousePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
