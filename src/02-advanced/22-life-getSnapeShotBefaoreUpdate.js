import React, { Component } from 'react'

export default class App extends Component {
    state={
        list:[1,2,3,4,5,6,7,8,9]
    }
    mmyref = React.createRef()

    getSnapshotBeforeUpdate(){
        //记录返回render前的高度
        return this.mmyref.current.scrollHeight
    }

    componentDidUpdate(nextProps,nextState,value){
        //设置当前高度为新高度减去旧高度
        this.mmyref.current.scrollTop+=this.mmyref.current.scrollHeight-value
    }

  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                list:[...[10,11,12,13,14,15,16,17,18,19],...this.state.list]
            })
        }}>来邮件</button>
        <div style={{height:"200px",overflow:"auto"}} ref={this.mmyref}>
            <ul>
                {this.state.list.map(item=>
                <li key={item} style={{height:"100px",background:"yellow"}}>{item}</li>)}
            </ul>
        </div>
      </div>
    )
  }
}
