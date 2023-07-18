import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/css/MyNav.css";
import "../src/css/MyHome.css";
import "../src/css/MyContacts.css";
import "../src/css/MyGames.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/MyNav";
import MyGames from "./Components/Main/GamesPage/MyGames";
import MyHome from "./Components/Main/HomePage/MyHome";
import MyContacts from "./Components/Main/Contacts/MyContacts";
import SingleCard from "./Components/Main/GamesPage/SingleCard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={MyHome} />
        <Route path="/games" Component={MyGames} />
        <Route path="/games/:id" Component={SingleCard} />
        <Route path="/contacts" Component={MyContacts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
