import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import noop from 'lodash'
// style
const StyledReactModal = styled.div`
  /* width: 50%; */
  width:100vw;
  height:100vh;
  position: fixed;
  top:0;
  left:0;
  z-index:100;
  background-color: rgba(0, 0, 0, 0.5);
  overflow:auto;
  visibility:${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition:0.3s;
  .wrapper{
    width:90%;
    margin:40px auto;
    z-index:110;
    background: #fff;
    max-height:90vh;
    overflow:auto;
  }
`;
export default ({
  isOpen = false,
  onModalClose = noop,
  children
}) => {
  const escClick=useCallback(event=>{
    if(event.keyCode ===27)onModalClose()
  },[])
  
  useEffect(() => {
    document.addEventListener('keydown', (event) => escClick(event), false)
    return document.removeEventListener("keydown",  (event) => escClick(event), false);
  }, [])
  return (
    <StyledReactModal isOpen={isOpen} onClick = {onModalClose}>
      <CSSTransition classNames='pop'
        in={isOpen}
        timeout={300}
        unmountOnExit={true}
      >
        <div className='wrapper'>
          {children}
        </div>
      </CSSTransition>
    </StyledReactModal >
  )
};
