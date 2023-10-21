import React from "react";
import './styles/App.scss';
import Main from "./components/pages/Main";
import Learning from "./components/pages/Learning";
import Training from "./components/pages/Training";
import Error from "./components/pages/Error/Error";

function App() {

  return (
    <div className="App">
      <Main></Main>
      <Learning></Learning>
      <Training></Training>
      <Error></Error>
    </div>
  );
}

export default App;
