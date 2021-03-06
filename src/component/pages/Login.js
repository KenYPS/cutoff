import React, { useContext, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom"

import { FormControl, TextField, Button, } from '@material-ui/core';
import { ContextStore } from "reducer"
// import bgImg from 'assets/login.jpeg'
import { apiLogin } from "customUses"
// util
import {abstractAccount} from "Utils/tools"

// style
const StyledLogin = styled.div`
width:100%;
height: 100%;
background-image:url("assets/login.jpeg");
background-repeat: no-repeat;
background-size: cover;
padding-top:80px;
.container{
  width:70%;
  /* height: 400px; */
  /* border:1px solid #8bccf5; */
  margin: 0 auto;
  /* background:rgba(139,204,245,0.8); */
  border-radius:10px;
  padding:0 5%;
  padding-bottom:30px;
  box-sizing:border-box;
  display: flex;
  flex-direction:column;
}
`;

export default withRouter(({
  history,
}) => {
  const [account, setAccount] = useState(localStorage.getItem("account"))
  const [password, setPassword] = useState("")
  const { dispatch } = useContext(ContextStore);

  const onClickHandler = () => {
    apiLogin(account, password).then((res) => {
      localStorage.setItem("account", account)
      const accountName = abstractAccount(res.user.email)
      dispatch({type:'INIT_USER', value:accountName})
      history.push('/list')
    }).catch((error) => {
      alert(error)
    })
  }

  return <StyledLogin>
    <div className="container">
      <FormControl>
        <TextField margin="normal" label="帳號" onChange={(event) => setAccount(event.target.value)} value={account}/>
      </FormControl>
      <FormControl>
        <TextField margin="normal" label="密碼" type='password' onChange={event => setPassword(event.target.value)} />
      </FormControl>
      <Button color="primary" margin="normal" variant="contained" onClick={onClickHandler}>登入</Button>

    </div>
  </StyledLogin>;
}
)