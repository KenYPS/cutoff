import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import { MenuItem, FormControl, InputLabel, TextField, Button, makeStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { withRouter } from "react-router";


import { apiAddData, apiEditData, apiDeleteData } from "customUses"
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
/* height:90%; */
`;

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },

}));

export default withRouter(({ location: { pathname }, onModalClose,
    fetchApiFunc
}) => {
    const { state, dispatch } = useContext(ContextStore);
    const sendData = state.get("sendData")
    const account = state.get("account")
    const classes = useStyles();
    const addType = state.get('addType')
    const originCutoffDate = state.get("originCutoffDate")

    useEffect(() => {
        if (pathname === "/add") {
            dispatch({ type: 'INIT_SEND_DATA' })
        }
    }, [dispatch])

    useEffect(() => {
        // console.log(sendData.toJS());
    }, [sendData, state])

    const onSendHandler = () => {
        const amount = sendData.get("amount")
        if (!validEmpty(amount)) return window.alert('金額為空');
        if (!validNumber(amount)) return window.alert('金額不是數字');

        const data = {
            account,
            cutoffMonth: sendData.get("cufoffMonth"),
            sendData: sendData.toJS()
        }
        if (addType === 'add') {
            apiAddData(data).then(() => {
                window.alert("新增成功");
                dispatch({ type: 'INIT_SEND_DATA' })

            })
        } else if (addType === 'edit') {
            const key = sendData.get('key')
            
            const editData = {
                account,
                key,
                originCutoffDate,
                cutoffMonth: sendData.get("cufoffMonth"),
                sendData: sendData.delete('key').toJS()
            }

            apiEditData(editData).then(() => {
                window.alert("修改成功");
                fetchApiFunc()
                onModalClose()
            })

        }
    }
    const onDeleteHandler = () => {
        const key = sendData.get('key')
        const editData = {
            account,
            key,
            cutoffMonth: sendData.get("cufoffMonth")
        }
        apiDeleteData(editData).then(() => {
            window.alert("刪除成功");
            fetchApiFunc()
            onModalClose()
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

    const handleAmountChange = (amount) => {
        modifyAddSendData('amount', amount)
        const payType = sendData.get('payType')
        if (payType === 0) modifyAddSendData('cash', amount)
        if (payType === 1) modifyAddSendData('nonCash', amount)
    }
    const stopPropagationClick = (e) => {
        e.stopPropagation()
    }
    return <StyledAdd onClick={(e) => stopPropagationClick(e)}>
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
                onChange={({ target }) =>  modifyAddSendData('cufoffMonth', target.value)}
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
                value={sendData.get('itemType')}
                onChange={({ target }) => modifyAddSendData('itemType', target.value)} />
        </FormControl>
        <FormControl>
            <TextField margin="normal"
                label="詳情"
                value={sendData.get('detail')}
                onChange={({ target }) => modifyAddSendData('detail', target.value)}
            />
        </FormControl>
        <FormControl>
            <TextField margin="normal"
                type="tel"
                label="金額"
                value={sendData.get('amount')}

                onChange={({ target }) => handleAmountChange(target.value)}
            />
        </FormControl>
        <FormControl>
            <Button color="primary" className={classes.margin} margin="normal" variant="contained" onClick={() => onSendHandler()}>{addType === 'add' ? '新增' : '編輯'}</Button>
            {addType === 'edit' ? <Button color="secondary" onClick={() => window.confirm('確定刪除') && onDeleteHandler()}>刪除</Button> : null}
        </FormControl>

    </StyledAdd>;
}
)