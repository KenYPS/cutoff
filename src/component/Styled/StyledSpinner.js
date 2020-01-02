import React, { useEffect } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

// style
const StyledSpinner = styled.div`
width:100%;
text-align:center;

`;

export default props => {

  useEffect(() => { });

  return <StyledSpinner>
    <ClipLoader />
  </StyledSpinner>;
};
