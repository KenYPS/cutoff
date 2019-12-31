import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import moment from 'moment'
import { ContextStore } from "../reducer"

// style
const StyledMonthPicker = styled.div`
width:100%;
margin:0 auto;
display: flex;
justify-content:center;
.month{
    padding:5px 8px;
    cursor: pointer;
    &-active{
        background:rgba(63,82,181,0.9);
        border-radius:3px;
    }
}
`;

export default props => {
    const { state, dispatch } = useContext(ContextStore);
    const selectedMonth = state.get("selectedMonth")
    const SHOWMONTHS = 0
    const [monthsArray, setMonthArrary] = useState([])
    useEffect(() => {
        monthArrary(SHOWMONTHS)
    }, []);

    const monthArrary = (showMonths = 5) => {
        let newMonthArray = []
        for (let i = showMonths; i >= 0; i--) {
            const month =moment().subtract(i, 'month').month() + 1
            const year = moment().subtract(i, 'month').year()
            newMonthArray.push(`${year}-${month}`)
        }
        newMonthArray.push(`${moment().add(1,"month").year()}-${moment().add(1,"month").month() + 1}`)
        setMonthArrary(newMonthArray)
    }
    const handleMonthSelected = (month) => {
        dispatch({ type: 'SET_SELECTED_MONTH', value: month })
    }
    return <StyledMonthPicker>
        {monthsArray.map((month, index) => <div key={index} className={month === selectedMonth ? "month-active month" : "month"} onClick={() => handleMonthSelected(month)}>{month}</div>)
        }
    </StyledMonthPicker>;
};
