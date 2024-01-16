import React from "react";
import PlayersList from "./PlayersList";
import "./App.css"

const App = () => {
  return (
    <div className="App" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center",}}>
      <h1 style={{ color: "black", marginBottom: "2em", fontWeight: "bolder", marginTop: "30px"}}>Football Players App</h1>
      <PlayersList />
    </div>
  );
};
export default App;
