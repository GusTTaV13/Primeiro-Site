import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ButtonCountTen } from "./components/ButtonCountTen";
import { Hero } from "./layout/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Hero />}>
          {/* <Route index element={<Features />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
