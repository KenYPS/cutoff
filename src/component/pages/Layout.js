import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from '../Nav'

import {withRouter} from "react-router-dom"
// components

// style
const StyledLayout = styled.div`
width:100%;
height: 100%;
`;
const NavContainer = styled.div`
position: fixed;
top:0;
left:0;
width:100%;
z-index:99;
`
const Container = styled.div`
margin-top:81px;
width:100%;
height: calc(100% - 81px);
box-sizing:border-box;
`
export default withRouter(({ children }) => {

  useEffect(() => { });

  return <StyledLayout>
    <NavContainer>
      <Nav>
      </Nav>
    </NavContainer>

    <Container>
      {children}
    </Container>
  </StyledLayout>;
}
)