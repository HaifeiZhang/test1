import React, { Component, PureComponent } from 'react'


//PureComponent 自动比对状态是否变化并且渲染，适合大部分场景对性能的优化，但是不是和用于state或者props一直在改变的的组件，比如计时器timer
export default class App extends PureComponent {
  render() {
    return (
      <div>23-purecomponent</div>
    )
  }
}
