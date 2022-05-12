import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";
import Dropdown from "./dropdown/Dropdown";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/pages/countrydetails" element={<CountryDetails />} />
          <Route path="/pages/dropdown" element={<Dropdown />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

// TODO: Implement Loading ✔
// TODO: Show Error Message
// TODO: Press Back Button => Load All Countries
// TODO: Dropdown Selection
