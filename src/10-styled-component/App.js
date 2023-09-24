import React, { Component } from 'react'
import styled from 'styled-components'
export default class App extends Component {
  render() {
    //组件的形式存在
    const StyledFooter = styled.footer`
    backgroud:${this.props.bg};
    postion:fixed;
    ul{
        display:flex;
        li{
            flex:1;
        }
    }
    `
    return (
      <StyledFooter bg="red">
        <ul>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
        </ul>
      </StyledFooter>
    )
  }
}
