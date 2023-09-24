import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    const StyledChild = styled(Child)`
    background:yellow;
    width:100px;
    height:100px;
    `

    const StyleButton = styled.button`
    background:yellow;
    width:100px;
    height:100px;
    `
    //可继承
    const StyleButton1 = styled(StyleButton)`
    background:red;
    `
    return (
      <div>
        <StyledChild></StyledChild>
        <StyleButton></StyleButton>
        <StyleButton1></StyleButton1>
      </div>
    )
  }
}


function Child(props){
    return
    <div className={props.className}>
        Child
    </div>
}
