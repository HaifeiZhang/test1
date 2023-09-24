import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'
export default class App extends Component {
  render() {
    //动画
    const ani = keyframes`
    from{
        tranform:rotate(0deg)
    }
    to{
        tranform:rotate(360deg)
    }`
    const StyleDiv = styled.div`
    background:yellow;
    width:100px;
    height:100px;
    animation:${ani} 1s infinite
    `
    return (
      <div>
        <StyleDiv></StyleDiv>
      </div>
    )
  }
}



