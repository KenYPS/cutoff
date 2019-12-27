/* eslint-disable no-case-declarations */
import React from 'react';
import { fromJS } from 'immutable';
// import { fromJS } from 'immutable';   
// import get from "lodash/get";


//constants
const INIT_USER = 'INIT_USER'

const initialState = fromJS({
    user: ""
});

const reducer = (state, action) => {
    switch (action.type) {
        case INIT_USER:
            return state.set('user', action.value)
        default:
            return state;
    }
};

const ContextStore = React.createContext(initialState);

export {
    initialState,
    reducer,
    ContextStore
};