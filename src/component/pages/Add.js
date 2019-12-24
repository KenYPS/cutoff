import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
// style
const StyledAdd = styled.div`
padding:30px 30px;
width:80%;
display: flex;
flex-direction:column;
justify-content:center;
`;

export default props => {
    const [value, setValue] = useState("");

    useEffect(() => { });

    return <StyledAdd>
        <TextField
            id="datetime-local"
            label="記帳日"
            type="datetime-local"
            defaultValue="2017-05-24"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <InputLabel htmlFor="age-native-helper">種類</InputLabel>
        <NativeSelect
            value={20}
            inputProps={{
                name: 'age',
                id: 'age-native-helper',
            }}
        >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
        </NativeSelect>


    </StyledAdd>;
};
