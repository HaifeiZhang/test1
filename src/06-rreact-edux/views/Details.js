import React, { Component } from 'react'
import { hidden, show } from '../actionCreator/tabbarActionCreator'
import { connect } from 'react-redux'


class Details extends Component {

    
    componentDidMount(){
        console.log(this.props)
        // store.dispatch(show())
        this.props.show()
    }

    componentWillUnmount(){
      // store.dispatch(hidden())
      this.props.hidden()
    }

    
  render() {
    return (
      <div>Details-{this.props.match.params.cinemaId}</div>
    )
  }
}

export default connect(null,{
  show,
  hidden
})(Details)

//  const mapToDispatchProps = {
//   show,
//   hidden
// }
// export default connect(null,mapToDispatchProps)(Details)
