import React, { useEffect } from "react";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import { MenuItem, FormControl, InputLabel, TextField, Button,} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

import moment from "moment"
// style
const StyledAdd = styled.div`
padding:30px 10%;
width:80%;
display: flex;
flex-direction:column;
justify-content:center;
`;


export default props => {
    const handleDateChange = date => {
        // setSelectedDate(date);
    };
    useEffect(() => { });
    console.log(moment().format('YYYY-MM-D'));
    return <StyledAdd>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={moment().format('YYYY-MM-D')}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
        <FormControl  >
            <InputLabel htmlFor="age-native-helper">種類</InputLabel>
            <Select
            label="種類"
                margin="normal"
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={1}
                InputLabelProps={{
                    shrink: true,
                }}
            >
                <MenuItem value={1}>現金</MenuItem>
                <MenuItem value={2}>非現金</MenuItem>
            </Select>
        </FormControl>
        <FormControl  >
            <InputLabel htmlFor="age-native-helper">代墊</InputLabel>
            <Select
            label="種類"
                margin="normal"
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={1}
                InputLabelProps={{
                    shrink: true,
                }}
            >
                <MenuItem value={1}>否</MenuItem>
                <MenuItem value={2}>是</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            {/* <InputLabel htmlFor="age-native-helper">項目</InputLabel> */}
            <TextField margin="normal" id="standard-error" defaultValue="" label="項目" />
        </FormControl>
        <FormControl>
            <TextField margin="normal" type="tel" id="standard-error" label="金額" defaultValue="" />
        </FormControl>
            <Button color="primary" margin="normal" variant="contained" >新增</Button>
    </StyledAdd>;
};
