import React from 'react'

export default function test() {
  return (
    <div>test</div>
  )
}


function *test1(){
    yield "111";
    yield "222";
    yield "333";
}

var a = test1()

//一步一步输出，异步状态机，async
a.next()
a.next()
a.next()

async function aaa(){
    var res1 = await fetch()
    var res2 = await fetch()
    var res3 = await fetch()
}
