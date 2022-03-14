import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import RepositoryList from "./pages/UserReposList";
import App from "./App";
import UserReposList from "./pages/UserReposList";
import Home from "./pages/Home";
import SingleReposPage from "./pages/SingleReposPage";

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
          <Route path="/home/users/:username/repos/:repo" element={<SingleReposPage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig