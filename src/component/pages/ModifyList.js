import React, {} from "react";
import styled from "styled-components";
// import Add from "./Add"
// style
const StyledModifyList = styled.div`
padding:20px;
width:100%;
height:70%;
`;
export default ({
    children }) => {

    return (
        <StyledModifyList >
            {children}
        </StyledModifyList >
    )
};
