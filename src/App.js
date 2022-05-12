// import logo from './logo.svg';
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Chores from "../src/Pages/Chores.js";
import Landing from "./Pages/Landing.js";
// import { Router } from 'express';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chores" element={<Chores />} />
      </Routes>
    </div>
  );
}
export default App;
