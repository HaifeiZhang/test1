import React, { Component } from 'react'

class FilmList extends Component{
    state={
        type:0
    }
    static getDerivedStateFromProps(nextProps){
        return{
            type:nextProps.type
        }
    }

    //render执行完成之后执行
    componentDidUpdate(){
        //在这里面可能有setState
    }

    render(){
        return(
            <div>
                {this.state.type}
            </div>
        )
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.type)
    //     if (nextProps.type===1) {
    //         this.setState({
    //             type:nextProps.type
    //         })
    //     }
    //     if (nextProps.type===2) {
    //         this.setState({
    //             type:nextProps.type
    //         })
    //     }
    // }
}

export default class App extends Component {
    state={
        type:1
    }
  render() {
    return (
      <div>
        <ul>
            <li onClick={()=>{
                this.setState({
                    type:1
                })
            }}>正在上映</li>
            <li onClick={()=>{
                this.setState({
                    type:2
                })
            }}>即将上映</li>
            <FilmList type={this.state.type}></FilmList>
        </ul>
      </div>
    )
  }
}
