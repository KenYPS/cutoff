import React, { useContext } from "react";
import styled from "styled-components";
import { ContextStore,newCutoffMonthArray } from "reducer"

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
    const handleMonthSelected = (month) => {
        dispatch({ type: 'SET_SELECTED_MONTH', value: month })
    }
    return <StyledMonthPicker>
        {newCutoffMonthArray.map((month, index) => <div key={index} className={month === selectedMonth ? "month-active month" : "month"} onClick={() => handleMonthSelected(month)}>{month}</div>)
        }
    </StyledMonthPicker>;
};
