import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/css/MyNav.css";
import "../src/css/MyHome.css";
import "../src/css/MyContacts.css";
import "../src/css/MyGames.css";
import "../src/css/ChiSiamo.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/MyNav";
import MyGames from "./Components/Main/GamesPage/MyGames";
import MyHome from "./Components/Main/HomePage/MyHome";
import MyContacts from "./Components/Main/Contacts/MyContacts";
import SingleCard from "./Components/Main/GamesPage/SingleCard";
import ChiSiamo from "./Components/Main/Chi Siamo/ChiSiamo";
import Footer from "./Components/Footer/Footer";
import { SearchProvider } from "./Components/Main/GamesPage/SearchProvider";
import MyCustomGames from "./Components/Main/GamesPage/MyCustomGames";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={MyHome} />
          <Route path="/games" Component={MyGames} />
          <Route path="/games/:id" Component={SingleCard} />
          <Route path="/customgames" Component={MyCustomGames} />
          <Route path="/contacts" Component={MyContacts} />
          <Route path="/chisiamo" Component={ChiSiamo} />
        </Routes>
        <Footer />
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
