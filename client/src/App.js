import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreateView from './components/details/CreateView';
import UpdateView from './components/details/UpdateView';
import Login from './components/login/Login';
import SignUp from "./components/login/SignUp";
import Logout from "./components/login/Logout";
import 'bootstrap/dist/css/bootstrap.css';

import ContactView from './components/header/ContactView';
import AboutView from './components/header/AboutView';

import ContextProvider from './components/context/ContextProvider';


import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { Box } from "@material-ui/core";
import { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();

const Routing = () => {
  return (
    <Box style={{ marginTop: 64 }}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/details/:id' component={DetailView} />
        <Route exact path='/create' component={CreateView} />
        <Route exact path='/update/:id' component={UpdateView} />
        <Route exact path='/contact' component={ContactView} />
        <Route exact path='/about' component={AboutView} />
        {/* <Route exact path='/user/:userid' component={ContactView} /> */}
      </Switch>
    </Box>
  )
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextProvider>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </ContextProvider>
  );
}

export default App;
