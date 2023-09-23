import {observable, autorun,configure, action} from "mobx"

configure({
    enforceActions: "always",//强制通过action改变变量
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true
})

class Store{
    @observable str = "123"
    @observable num = 10
    @action changeStr(){
        this.str="234"
    }
    @action changeNum(){
        this.num = 19
    }
    //注意异步时的写法，asysn
}
//可以用对象形式写
// const storeCopy = observable({
//     str:"123",
//     num:10,
//     changeNum(){

//     },
//     changeStr(){

//     }
// },
// {
//     changeNum:action,
//     changeStr:action//标记为action
// })

const store = new Store()

export default store