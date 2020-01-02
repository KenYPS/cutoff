import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import { MenuItem, FormControl, InputLabel, TextField, Button, } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';


import { apiSendData } from "Api"
import moment from "moment"
import { ContextStore, newCutoffMonthArray } from "reducer"

// style
const StyledAdd = styled.div`
padding:0 10%;
width:80%;
display: flex;
flex-direction:column;
justify-content:center;
overflow-y:hidden;
height:90%;
`;


export default props => {
    const { state, dispatch } = useContext(ContextStore);
    const sendData = state.get("sendData")
    const account = state.get("account")

    useEffect(() => {
        dispatch({ type: 'INIT_SEND_DATA' })
    }, [dispatch])

    useEffect(() => {
        console.log(sendData.toJS());
        console.log(state.toJS());
        
    }, [sendData, state])

    const onSendHandler = () => {
        const amount = sendData.get("amount")
        if (!validEmpty(amount)) return console.log(456);
        if (!validNumber(amount)) return console.log(132);
     
        const data = {
            account,
            cutoffMonth: sendData.get("cufoffMonth"),
            sendData: sendData.toJS()
        }
        console.log(data);
        // return 
        apiSendData(data).then(()=>{
           window.alert("新增成功");
        })
    }
    const validEmpty = (value) => {
        return !!value ? true : false

    }
    const validNumber = (value) => {
        return typeof Number(value) === 'number' ? true : false
    }

    const modifyAddSendData = (path, value) => {
        dispatch({
            type: 'MODIFYDATA', value: {
                path: ['sendData', path], value
            }
        })
    }

    const handleDateChange = (path, date) => {
        let formatDate = moment(date).format('YYYY-MM-D')
        modifyAddSendData(path, formatDate)

    };

    const handleAmountChange=(amount)=>{
        modifyAddSendData('amount', amount)
       const payType = sendData.get('payType')
        if(payType===0) modifyAddSendData('cash', amount)
        if(payType===1) modifyAddSendData('nonCash', amount)
    }
    return <StyledAdd>
        <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    format="yyyy/MM/dd"
                    margin="normal"
                    label="記帳日"
                    defaultValue={sendData.get('date')}
                    value={sendData.get('date')}
                    onChange={(date) => handleDateChange('date', date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl  >
            <InputLabel htmlFor="age-native-helper">結帳月份</InputLabel>
            <Select
                label="種類"
                margin="normal"
                labelId="demo-controlled-open-select-label"
                value={sendData.get('cufoffMonth')}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={({ target }) => modifyAddSendData('cufoffMonth', target.value)}
            >
                {
                    newCutoffMonthArray.map((month, index) =>
                        <MenuItem value={month} key={index} > {`${month}`}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
        <FormControl  >
            <InputLabel htmlFor="age-native-helper">種類</InputLabel>
            <Select
                margin="normal"
                labelId="demo-controlled-open-select-label"
                value={sendData.get('payType')}
                onChange={({ target }) => modifyAddSendData('payType', target.value)}
            >
                <MenuItem value={0}>現金</MenuItem>
                <MenuItem value={1}>非現金</MenuItem>
            </Select>
        </FormControl>
        <FormControl  >
            <InputLabel htmlFor="age-native-helper">代墊</InputLabel>
            <Select
                margin="normal"
                labelId="demo-controlled-open-select-label"
                value={sendData.get('advanced')}
                onChange={({ target }) => modifyAddSendData('advanced', target.value)}
            >
                <MenuItem value={0}>否</MenuItem>
                <MenuItem value={1}>是</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <TextField margin="normal"
                label="項目"
                onChange={({ target }) => modifyAddSendData('itemType', target.value)} />
        </FormControl>
        <FormControl>
            <TextField margin="normal"
                label="詳情"
                defaultValue=""
                onChange={({ target }) => modifyAddSendData('detail', target.value)}
            />
        </FormControl>
        <FormControl>
            <TextField margin="normal"
                type="tel"
                label="金額"
                onChange={({ target }) => handleAmountChange(target.value)}
            />
        </FormControl>
        <Button color="primary" margin="normal" variant="contained" onClick={() => onSendHandler()}>新增</Button>
    </StyledAdd>;
};
