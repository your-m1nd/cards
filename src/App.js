import React from "react";
import './styles/App.scss';
import Head from './components/views/Head';
import Foot from "./components/views/Foot";
import Learning from "./components/pages/Learning";
import Training from "./components/pages/Training";

function App() {

  return (
    <div className="App">
      <Head></Head>
      <Foot></Foot>
      <Learning></Learning>
      <Training></Training>
    </div>
  );
}

export default App;
