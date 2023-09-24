import {take,fork,call,put} from 'redux-saga/effects'

function *watchSaga2(){
    while(true){
        yield take("get-list2");
        yield fork(getList2)
    }
}

function *getList2(){
    let res1 = yield call(getListAction2_1)
    let res = yield call(getListAction2_2,res1)
    yield put({
        type:"Change-list2",
        payload:res
    })
}

function getListAction2_1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(["444","555","666"])
        }, 1000);
    })
}

function getListAction2_2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([...data,"4444","555","666"])
        }, 1000);
    })
}


export default watchSaga2