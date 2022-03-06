import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import RepositoryList from "./pages/UserReposList";
import App from "./App";
import UserReposList from "./pages/UserReposList";
import Home from "./pages/Home";

const RouterConfig = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route 
            path="/" 
            element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home/>} />
          <Route path="/home/users/:username/repos" element={<UserReposList/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig