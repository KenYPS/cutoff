import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from '../Nav'
// components

// style
const StyledLayout = styled.div`

`;

const Container = styled.div`
margin:0;
width:100%;
height: 100%;

`
export default ({ children }) => {
  const [value, setValue] = useState("");

  useEffect(() => { });

  return <StyledLayout>
    <Nav>
    </Nav>
    <Container>
      {children}
    </Container>
  </StyledLayout>;
};
