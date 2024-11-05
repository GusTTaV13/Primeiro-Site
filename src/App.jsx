import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ButtonCountTen } from "./components/ButtonCountTen";
import { Hero } from "./layout/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Features } from "./layout/Features/Features";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/features" element={<Features />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
