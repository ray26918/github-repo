import React from "react";
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom'
import App from "./App";
import UserReposList from "./pages/UserReposList";
import Home from "./pages/Home";
import SingleReposPage from "./pages/SingleReposPage";

const RouterConfig = () =>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route 
            path="/" 
            element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home/>} />
          <Route path="/home/users/:username/repos" element={<UserReposList/> } />
          <Route path="/home/users/:username/repos/:repo" element={<SingleReposPage/> }/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default RouterConfig