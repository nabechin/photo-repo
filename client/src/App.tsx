import React from "react";
import "./App.css";
import camera from "./assets/picture/IMG_2122.JPG";

function App(): JSX.Element {
  return (
    <div>
      hello world
      <img src={camera} width="200px" height="200px"></img>
    </div>
  );
}

export default App;
