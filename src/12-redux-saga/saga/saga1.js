import {take,fork,call,put} from 'redux-saga/effects'

function *watchSaga1(){
    while(true){
        console.log("ok")
        yield take("get-list1");
        yield fork(getList1)
    }
}

function *getList1(){
    let res = yield call(getListAction1)
    yield put({
        type:"Change-list1",
        payload:res
    })
}

function getListAction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(["111","222","333"])
        }, 1000);
    })
}


export default watchSaga1