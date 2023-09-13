import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
    state={
        list:["111","222","333","444","555","666","777","888","999","000"]
    }
    componentDidMount(){
        new BScroll("#wrapper")
    }
  render() {
    return (
        <div>
            <div id="wrapper" style={{background:"yellow",height:"200px",width:"200px",overflow:"hidden"}}>
                <ul>
                {
                    this.state.list.map(item=><li key={item}>{item}</li>)
                }
                </ul>
        
            </div>
        </div>
      
    )
  }
}
