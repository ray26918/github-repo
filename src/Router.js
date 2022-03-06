import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RepositoryList from "./pages/RepositoryList";
import App from "./App";

const RouterConfig = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig