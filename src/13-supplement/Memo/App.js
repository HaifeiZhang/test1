import React, { Component, memo } from 'react'

export default class App extends Component {
    state = {
        name:"zhangsan",
        title:"chila"
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                name:"lisi"
            })
        }}>ClickName</button>
        <button onClick={()=>{
            this.setState({
                title:"pppp"
            })
        }}>ClicTitle</button>
        <MemoChild title={this.state.title}/>
      </div>
    )
  }
}

//memo防止更新子组件无状态更新时，也更新dom
//在class组件中用PureComponent
const MemoChild = memo(Child)

function Child(){
    console.log("update")
    return <div>

    </div>
}
