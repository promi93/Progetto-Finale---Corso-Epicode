import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/css/MyNav.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/MyNav";
import GamePage from "./Components/Main/Home/MyGames";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/games" element={<GamePage />} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
