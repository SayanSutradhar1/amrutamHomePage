import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FindDoctors from "./pages/FindDoctors";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/finddoctors" element={<FindDoctors/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
