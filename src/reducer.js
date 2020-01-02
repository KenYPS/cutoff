/* eslint-disable no-case-declarations */
import React from 'react';
import { fromJS } from 'immutable';
import moment from "moment"
// import { fromJS } from 'immutable';  

import {cutoffMonthValue} from "Utils/tools"

//constants
const INIT_USER = 'INIT_USER'
const SET_SELECTED_MONTH = "SET_SELECTED_MONTH"
const MODIFYDATA = "MODIFYDATA"
const INIT_SEND_DATA = "INIT_SEND_DATA"
const selectedMonth = `${moment().year()}-${moment().month() + 1}`

const initialState = fromJS({
    account: "",
    cutoffDate: 19,
    selectedMonth,
    sendData: {
        date: moment().format('YYYY/MM/D'),
        cufoffMonth: 0,
        payType: 0,
        advanced: 0,
        itemType: "",
        detail: "",
        cash: 0,
        nonCash:0,
        amount:0
    }
});

export const {newCutoffMonthArray, nowCutoffMonth} = cutoffMonthValue(initialState.get('cutoffDate'))


const initSendData = fromJS({
    date: moment().format('YYYY/MM/D'),
    cufoffMonth: nowCutoffMonth,
    payType: 0,
    advanced: 0,
    itemType: "",
    detail: "",
    amount: 0,
    cash: 0,
    nonCash:0,
})

const reducer = (state, action) => {
    switch (action.type) {
        case INIT_USER:
            return state.set('account', action.value)
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

