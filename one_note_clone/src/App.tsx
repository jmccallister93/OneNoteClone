import React from "react";
import "./App.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import Navbar from "./Navbar";
import MainGrid from "./MainGrid";

function App() {
  return (
    <>
      <Navbar/>
      <MainGrid />
    </>
  );
}

export default App;
