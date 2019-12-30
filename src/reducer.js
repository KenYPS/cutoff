/* eslint-disable no-case-declarations */
import React from 'react';
import { fromJS } from 'immutable';
import moment from "moment"
// import { fromJS } from 'immutable';   
// import get from "lodash/get";


//constants
const INIT_USER = 'INIT_USER'
const SET_SELECTED_MONTH = "SET_SELECTED_MONTH"
const MODIFYDATA = "MODIFYDATA"
const INIT_SEND_DATA = "INIT_SEND_DATA"

const cutoffMonthValue = (cutoffDate) => {
    return moment().add(`${checkCutoffDateIsNextMonth(cutoffDate) ? 1 : 0}`, 'month').month() + 1
}

const checkCutoffDateIsNextMonth = (cutoffDate) => {
    return moment().date() > cutoffDate ? true : false
}

const initialState = fromJS({
    user: "",
    cutoffDate: 19,
    selectedMonth: moment().month() + 1,
    sendData: {
        date: moment().format('YYYY-MM-D'),
        cufoffMonth: 0,
        payType: 0,
        advanced: 0,
        itemType: "",
        detail: "",
        amount: 0
    }
});

const initSendData = fromJS({
    date: moment().format('YYYY-MM-D'),
    cufoffMonth: cutoffMonthValue(initialState.get('cutoffDate')),
    payType: 0,
    advanced: 0,
    itemType: "",
    detail: "",
    amount: 0
})

const reducer = (state, action) => {
    switch (action.type) {
        case INIT_USER:
            return state.set('user', action.value)
        case INIT_SEND_DATA:
            return state.set('sendData', initSendData)
        case SET_SELECTED_MONTH:
            return state.set("selectedMonth", action.value)
        case MODIFYDATA:
            return state.setIn([...action.value.path], action.value.value)
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


