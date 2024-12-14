// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import PlayersList from "./components/PlayersList";
import NavBarre from "./components/NavBarre";
import Footer from "./components/Footer";
import "./App" ;


const App = () => {
  return (
    <div className="App">
      <NavBarre/>
      <h1>FIFA Player Cards</h1>
      <PlayersList />
      <Footer/>
    </div>
  );
};

export default App;
