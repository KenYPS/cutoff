import React, { useReducer } from "react";
import { HashRouter } from "react-router-dom";

// components
import Routes from "./Routes";
import {version} from "../package.json"
//reducer
import { reducer, initialState, ContextStore } from 'reducer';

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <ContextStore.Provider value={{ state, dispatch }}>
      <div version={version}/>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ContextStore.Provider>
  );
}



