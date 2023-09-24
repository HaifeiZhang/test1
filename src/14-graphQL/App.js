import React, { Component } from 'react'
import {ApolloProvider, Mutation, Query} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gpl from 'graphql-tag'

//要解决跨越问题
const client = ApolloClient({
    url:"./graphql"
})

export default class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div>App
                <ChildQuery></ChildQuery>
                <ChildUpdate></ChildUpdate>
            </div>
        </ApolloProvider>
      
    )
  }
}

class ChildQuery extends Component{
    query = gpl`
    查询语句`
    render(){
        return (<Query query={this.query}>
            {
                ({loading,data})=>{
                    return loading?<div>loading...</div>:
                    <div>
                        {data.list.map(item=><div key={item.id}>{item.name}</div>)}
                    </div>
                }
            }
        </Query>)
    }
}

class ChildUpdate extends Component{
    state={
        id:1
    }
    update = gpl`
    查询语句`
    render(){
        return (<Mutation mutation={this.update} variables={this.state.id}>
            {
                ({updateFunc,data})=>{
                    return <div>
                        <button onClick={()=>{
                            updateFunc({
                                //variables对象也可以在此处配置
                            })
                        }}>update</button>
                    </div>
                }
            }
        </Mutation>)
    }
}


