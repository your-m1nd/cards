import React from "react";
import './styles/App.scss';
import Main from "./components/pages/Main";
import Learning from "./components/pages/Learning";
import Training from "./components/pages/Training";
import Error from "./components/pages/Error/Error";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path={'/learning'} element={<Learning/>}></Route>
      <Route path={'/training'} element={<Training/>}></Route>
      <Route path={'/error'} element={<Error/>}></Route>
      <Route exact path={'/'} element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
