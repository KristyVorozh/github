import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../Main";
import Commit from "../Commit";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
