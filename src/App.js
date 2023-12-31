import React from "react";
import './styles/App.scss';
import Main from "./components/pages/Main/Main";
import Learning from "./components/pages/Learning/Learning";
import Training from "./components/pages/Training/Training";
import Error from "./components/pages/Error/Error";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path={'/learning'} element={<Learning/>}></Route>
      <Route path={'/training'} element={<Training/>}></Route>
      <Route exact path={'/'} element={<Main/>}></Route>
      <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
